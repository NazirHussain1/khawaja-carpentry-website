import { Download, Lock, LogOut, RefreshCw, Search } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const apiBase = import.meta.env.VITE_API_BASE_URL || '';
const statusOptions = ['new', 'contacted', 'quoted', 'won', 'lost', 'spam'];
const statusLabels = {
  new: 'New',
  contacted: 'Contacted',
  quoted: 'Quoted',
  won: 'Won',
  lost: 'Lost',
  spam: 'Spam'
};

const statusClasses = {
  new: 'bg-sky-50 text-sky-700 ring-sky-200',
  contacted: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  quoted: 'bg-amber-50 text-amber-700 ring-amber-200',
  won: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  lost: 'bg-slate-100 text-slate-700 ring-slate-200',
  spam: 'bg-red-50 text-red-700 ring-red-200'
};

function getStoredCredentials() {
  try {
    return JSON.parse(sessionStorage.getItem('adminCredentials') || 'null');
  } catch {
    return null;
  }
}

function saveCredentials(credentials) {
  sessionStorage.setItem('adminCredentials', JSON.stringify(credentials));
}

function clearCredentials() {
  sessionStorage.removeItem('adminCredentials');
}

function createAuthHeader(credentials) {
  return `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`;
}

function formatDate(value) {
  if (!value) return 'Not available';
  return new Intl.DateTimeFormat('en-AE', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));
}

function normalize(value) {
  return String(value || '').toLowerCase();
}

function countInquiries(items) {
  return items.reduce((summary, inquiry) => {
    summary[inquiry.status] = (summary[inquiry.status] || 0) + 1;
    summary.all += 1;
    return summary;
  }, { all: 0, new: 0, contacted: 0, quoted: 0, won: 0, lost: 0, spam: 0 });
}

export default function Admin() {
  const [credentials, setCredentials] = useState(getStoredCredentials);
  const [loginForm, setLoginForm] = useState({ username: credentials?.username || '', password: credentials?.password || '' });
  const [inquiries, setInquiries] = useState([]);
  const [totals, setTotals] = useState({});
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState('');
  const [error, setError] = useState('');

  const filteredInquiries = useMemo(() => {
    const text = normalize(query);
    return inquiries.filter((inquiry) => {
      const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter;
      const searchable = [
        inquiry.id,
        inquiry.name,
        inquiry.phone,
        inquiry.email,
        inquiry.productType,
        inquiry.quantity,
        inquiry.city,
        inquiry.message,
        inquiry.source,
        inquiry.notes
      ].map(normalize).join(' ');
      return matchesStatus && (!text || searchable.includes(text));
    });
  }, [inquiries, query, statusFilter]);

  const loadInquiries = useCallback(async (activeCredentials = credentials) => {
    if (!activeCredentials) return;
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${apiBase}/api/admin/inquiries`, {
        headers: { Authorization: createAuthHeader(activeCredentials) }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 401) {
          clearCredentials();
          setCredentials(null);
        }
        throw new Error(data.message || 'Unable to load inquiries.');
      }
      setInquiries(data.inquiries || []);
      setTotals(data.totals || {});
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, [credentials]);

  useEffect(() => {
    if (credentials) loadInquiries(credentials);
  }, [credentials, loadInquiries]);

  async function handleLogin(event) {
    event.preventDefault();
    const nextCredentials = {
      username: loginForm.username.trim(),
      password: loginForm.password
    };
    saveCredentials(nextCredentials);
    setCredentials(nextCredentials);
  }

  function handleLogout() {
    clearCredentials();
    setCredentials(null);
    setInquiries([]);
    setTotals({});
  }

  async function updateInquiry(inquiry, updates) {
    setSavingId(inquiry.id);
    setError('');

    try {
      const response = await fetch(`${apiBase}/api/admin/inquiries/${encodeURIComponent(inquiry.id)}`, {
        method: 'PATCH',
        headers: {
          Authorization: createAuthHeader(credentials),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: updates.status ?? inquiry.status,
          notes: updates.notes ?? inquiry.notes
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'Unable to update inquiry.');

      setInquiries((items) => {
        const nextItems = items.map((item) => (
          item.id === inquiry.id
            ? { ...item, ...data.inquiry }
            : item
        ));
        setTotals(countInquiries(nextItems));
        return nextItems;
      });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSavingId('');
    }
  }

  function exportCsv() {
    const headers = ['ID', 'Status', 'Name', 'Phone', 'Email', 'Product', 'Quantity', 'City', 'Message', 'Source', 'Submitted At', 'Notes'];
    const rows = filteredInquiries.map((inquiry) => [
      inquiry.id,
      statusLabels[inquiry.status] || inquiry.status,
      inquiry.name,
      inquiry.phone,
      inquiry.email,
      inquiry.productType,
      inquiry.quantity,
      inquiry.city,
      inquiry.message,
      inquiry.source,
      inquiry.submittedAt,
      inquiry.notes
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell || '').replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!credentials) {
    return (
      <section className="min-h-[calc(100vh-280px)] bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
          <div className="grid size-12 place-items-center rounded-lg bg-[#02024f] text-white">
            <Lock size={22} />
          </div>
          <h1 className="mt-5 text-2xl font-black text-[#02024f]">Inquiry Admin</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">Sign in to view quote requests and manage follow-ups.</p>
          <form className="mt-6 grid gap-4" onSubmit={handleLogin}>
            <label className="text-sm font-bold text-slate-700">
              Username
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                value={loginForm.username}
                onChange={(event) => setLoginForm((form) => ({ ...form, username: event.target.value }))}
                autoComplete="username"
                required
              />
            </label>
            <label className="text-sm font-bold text-slate-700">
              Password
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                type="password"
                value={loginForm.password}
                onChange={(event) => setLoginForm((form) => ({ ...form, password: event.target.value }))}
                autoComplete="current-password"
                required
              />
            </label>
            {error && <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
            <button className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-indigo-500" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-280px)] bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Admin Dashboard</span>
            <h1 className="mt-2 text-3xl font-black text-[#02024f]">Quote Inquiries</h1>
            <p className="mt-2 text-sm text-slate-600">Manage website leads, update follow-up status, and export records.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50" type="button" onClick={() => loadInquiries()}>
              <RefreshCw size={16} /> Refresh
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50" type="button" onClick={exportCsv}>
              <Download size={16} /> CSV
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-[#02024f] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-800" type="button" onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {['all', ...statusOptions].map((status) => (
            <button
              className={`rounded-lg border px-4 py-3 text-left transition ${statusFilter === status ? 'border-indigo-500 bg-white shadow-md shadow-indigo-950/10' : 'border-slate-200 bg-white hover:border-indigo-200'}`}
              type="button"
              onClick={() => setStatusFilter(status)}
              key={status}
            >
              <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">{status === 'all' ? 'All' : statusLabels[status]}</span>
              <strong className="mt-1 block text-2xl font-black text-[#02024f]">{totals[status] || 0}</strong>
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              className="w-full rounded-md border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by customer, phone, product, city, or message"
            />
          </label>
          <select
            className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">All Statuses</option>
            {statusOptions.map((status) => <option value={status} key={status}>{statusLabels[status]}</option>)}
          </select>
        </div>

        {error && <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
        {loading && <p className="mt-6 text-sm font-semibold text-slate-600">Loading inquiries...</p>}

        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-black">Customer</th>
                  <th className="px-4 py-3 font-black">Request</th>
                  <th className="px-4 py-3 font-black">Message</th>
                  <th className="px-4 py-3 font-black">Status</th>
                  <th className="px-4 py-3 font-black">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInquiries.map((inquiry) => (
                  <tr className="align-top hover:bg-slate-50/80" key={inquiry.id}>
                    <td className="w-64 px-4 py-4">
                      <strong className="block text-slate-950">{inquiry.name}</strong>
                      <a className="mt-1 block text-indigo-700 hover:text-indigo-500" href={`tel:${inquiry.phone}`}>{inquiry.phone}</a>
                      <a className="mt-1 block break-all text-slate-600 hover:text-indigo-700" href={`mailto:${inquiry.email}`}>{inquiry.email}</a>
                      <span className="mt-2 block text-xs font-semibold text-slate-500">{formatDate(inquiry.submittedAt)}</span>
                    </td>
                    <td className="w-60 px-4 py-4">
                      <span className="font-bold text-slate-900">{inquiry.productType}</span>
                      <span className="mt-1 block text-slate-600">Qty: {inquiry.quantity || 'Not provided'}</span>
                      <span className="mt-1 block text-slate-600">City: {inquiry.city || 'Not provided'}</span>
                      <span className="mt-2 block break-all text-xs text-slate-500">{inquiry.source}</span>
                    </td>
                    <td className="min-w-72 px-4 py-4 text-slate-700">
                      <p className="max-w-xl leading-6">{inquiry.message}</p>
                    </td>
                    <td className="w-44 px-4 py-4">
                      <select
                        className={`w-full rounded-md px-3 py-2 text-sm font-bold capitalize ring-1 ${statusClasses[inquiry.status] || statusClasses.new}`}
                        value={inquiry.status}
                        onChange={(event) => updateInquiry(inquiry, { status: event.target.value })}
                        disabled={savingId === inquiry.id}
                      >
                        {statusOptions.map((status) => <option value={status} key={status}>{statusLabels[status]}</option>)}
                      </select>
                      {savingId === inquiry.id && <span className="mt-2 block text-xs font-semibold text-slate-500">Saving...</span>}
                    </td>
                    <td className="w-72 px-4 py-4">
                      <textarea
                        className="min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                        defaultValue={inquiry.notes}
                        placeholder="Follow-up notes"
                        onBlur={(event) => {
                          if (event.target.value !== inquiry.notes) updateInquiry(inquiry, { notes: event.target.value });
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!loading && filteredInquiries.length === 0 && (
            <div className="px-4 py-12 text-center text-sm font-semibold text-slate-500">No inquiries match the current filters.</div>
          )}
        </div>
      </div>
    </section>
  );
}
