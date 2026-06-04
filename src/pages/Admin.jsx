import { Download, ImagePlus, LayoutDashboard, Library, Lock, LogOut, MailCheck, Pencil, RefreshCw, Save, Search, Trash2, Upload } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const apiBase = import.meta.env.VITE_API_BASE_URL || '';
const statusOptions = ['new', 'contacted', 'quoted', 'won', 'lost', 'spam'];
const tabs = [
  ['inquiries', 'Inquiries', LayoutDashboard],
  ['products', 'Products CMS', Library],
  ['media', 'Media Library', ImagePlus]
];

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

const emptyProduct = {
  title: '',
  slug: '',
  category: '',
  summary: '',
  description: '',
  href: '',
  buttonLabel: 'Learn More',
  imageUrl: '',
  specs: '',
  status: 'active',
  featured: true,
  sortOrder: 100
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

function productToForm(product) {
  return {
    title: product.title || '',
    slug: product.slug || '',
    category: product.category || '',
    summary: product.summary || '',
    description: product.description || '',
    href: product.href || '',
    buttonLabel: product.buttonLabel || 'Learn More',
    imageUrl: product.imageUrl || '',
    specs: Array.isArray(product.specs) ? product.specs.join('\n') : product.specs || '',
    status: product.status || 'active',
    featured: Boolean(product.featured),
    sortOrder: product.sortOrder ?? 100
  };
}

export default function Admin() {
  const [credentials, setCredentials] = useState(getStoredCredentials);
  const [loginForm, setLoginForm] = useState({ username: credentials?.username || '', password: credentials?.password || '' });
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [totals, setTotals] = useState({});
  const [products, setProducts] = useState([]);
  const [media, setMedia] = useState([]);
  const [productForm, setProductForm] = useState(emptyProduct);
  const [editingProductId, setEditingProductId] = useState('');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState('');
  const [testingEmail, setTestingEmail] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const authHeaders = useMemo(() => (
    credentials ? { Authorization: createAuthHeader(credentials) } : {}
  ), [credentials]);

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

  const requestJson = useCallback(async (path, options = {}) => {
    const response = await fetch(`${apiBase}${path}`, {
      ...options,
      headers: {
        ...authHeaders,
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers || {})
      }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) {
        clearCredentials();
        setCredentials(null);
      }
      throw new Error(data.message || 'Request failed.');
    }
    return data;
  }, [authHeaders]);

  const loadInquiries = useCallback(async () => {
    if (!credentials) return;
    const data = await requestJson('/api/admin/inquiries');
    setInquiries(data.inquiries || []);
    setTotals(data.totals || {});
  }, [credentials, requestJson]);

  const loadProducts = useCallback(async () => {
    if (!credentials) return;
    const data = await requestJson('/api/admin/products');
    setProducts(data.products || []);
  }, [credentials, requestJson]);

  const loadMedia = useCallback(async () => {
    if (!credentials) return;
    const data = await requestJson('/api/admin/media');
    setMedia(data.media || []);
  }, [credentials, requestJson]);

  const loadAll = useCallback(async () => {
    if (!credentials) return;
    setLoading(true);
    setError('');
    try {
      await Promise.all([loadInquiries(), loadProducts(), loadMedia()]);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, [credentials, loadInquiries, loadProducts, loadMedia]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

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
    setProducts([]);
    setMedia([]);
  }

  async function updateInquiry(inquiry, updates) {
    setSavingId(inquiry.id);
    setError('');
    try {
      const data = await requestJson(`/api/admin/inquiries/${encodeURIComponent(inquiry.id)}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: updates.status ?? inquiry.status,
          notes: updates.notes ?? inquiry.notes
        })
      });
      setInquiries((items) => {
        const nextItems = items.map((item) => (item.id === inquiry.id ? { ...item, ...data.inquiry } : item));
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

  async function saveProduct(event) {
    event.preventDefault();
    setSavingId('product');
    setError('');
    setNotice('');
    try {
      const data = await requestJson(editingProductId ? `/api/admin/products/${editingProductId}` : '/api/admin/products', {
        method: editingProductId ? 'PATCH' : 'POST',
        body: JSON.stringify(productForm)
      });
      setProducts((items) => {
        const exists = items.some((item) => item.id === data.product.id);
        return exists
          ? items.map((item) => (item.id === data.product.id ? data.product : item))
          : [...items, data.product].sort((a, b) => Number(a.sortOrder || 100) - Number(b.sortOrder || 100));
      });
      setProductForm(emptyProduct);
      setEditingProductId('');
      setNotice('Product saved successfully.');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSavingId('');
    }
  }

  async function deleteProduct(product) {
    if (!window.confirm(`Delete ${product.title}?`)) return;
    setSavingId(product.id);
    setError('');
    try {
      await requestJson(`/api/admin/products/${product.id}`, { method: 'DELETE' });
      setProducts((items) => items.filter((item) => item.id !== product.id));
      if (editingProductId === product.id) {
        setEditingProductId('');
        setProductForm(emptyProduct);
      }
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSavingId('');
    }
  }

  async function uploadImage(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const file = form.image.files[0];
    if (!file) return;
    const formData = new FormData(form);
    setUploading(true);
    setError('');
    setNotice('');
    try {
      const data = await requestJson('/api/admin/media', {
        method: 'POST',
        body: formData
      });
      setMedia((items) => [data.media, ...items]);
      setProductForm((current) => ({ ...current, imageUrl: data.media.url }));
      setNotice('Image uploaded to Cloudinary and selected for the product form.');
      form.reset();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setUploading(false);
    }
  }

  async function sendEmailTest() {
    setTestingEmail(true);
    setError('');
    setNotice('');
    try {
      const data = await requestJson('/api/admin/email-test', {
        method: 'POST',
        body: JSON.stringify({ to: 'nh534392@gmail.com' })
      });
      setNotice(data.message || 'Test email sent successfully.');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setTestingEmail(false);
    }
  }

  if (!credentials) {
    return (
      <section className="min-h-[calc(100vh-280px)] bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-950/5">
          <div className="grid size-12 place-items-center rounded-2xl bg-[#02024f] text-white">
            <Lock size={22} />
          </div>
          <h1 className="mt-5 text-2xl font-black text-[#02024f]">Admin Control Center</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">Sign in to manage inquiries, products, and Cloudinary media.</p>
          <form className="mt-6 grid gap-4" onSubmit={handleLogin}>
            <label className="text-sm font-bold text-slate-700">
              Username
              <input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" value={loginForm.username} onChange={(event) => setLoginForm((form) => ({ ...form, username: event.target.value }))} autoComplete="username" required />
            </label>
            <label className="text-sm font-bold text-slate-700">
              Password
              <input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" type="password" value={loginForm.password} onChange={(event) => setLoginForm((form) => ({ ...form, password: event.target.value }))} autoComplete="current-password" required />
            </label>
            {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
            <button className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-indigo-500" type="submit">Sign In</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-280px)] bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-[#02024f] p-6 text-white shadow-xl shadow-slate-950/10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-sky-200">Admin Dashboard</span>
              <h1 className="mt-2 text-3xl font-black">Control Center</h1>
              <p className="mt-2 text-sm text-slate-300">Manage website leads, product catalogue, and Cloudinary images.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold transition hover:bg-white/15" type="button" onClick={loadAll}>
                <RefreshCw size={16} /> Refresh
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold transition hover:bg-white/15 disabled:opacity-60" type="button" onClick={sendEmailTest} disabled={testingEmail}>
                <MailCheck size={16} /> {testingEmail ? 'Testing...' : 'Test Email'}
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#02024f] transition hover:bg-slate-100" type="button" onClick={handleLogout}>
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tabs.map(([key, label, Icon]) => (
            <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black shadow-sm transition ${activeTab === key ? 'bg-[#02024f] text-white' : 'bg-white text-slate-700 hover:bg-indigo-50 hover:text-[#02024f]'}`} type="button" onClick={() => setActiveTab(key)} key={key}>
              <Icon size={17} /> {label}
            </button>
          ))}
        </div>

        {error && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
        {notice && <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{notice}</p>}
        {loading && <p className="mt-5 text-sm font-semibold text-slate-600">Loading dashboard data...</p>}

        {activeTab === 'inquiries' && (
          <InquiriesPanel
            totals={totals}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            query={query}
            setQuery={setQuery}
            filteredInquiries={filteredInquiries}
            savingId={savingId}
            updateInquiry={updateInquiry}
            exportCsv={exportCsv}
            loading={loading}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPanel
            products={products}
            productForm={productForm}
            setProductForm={setProductForm}
            editingProductId={editingProductId}
            setEditingProductId={setEditingProductId}
            saveProduct={saveProduct}
            deleteProduct={deleteProduct}
            savingId={savingId}
            media={media}
          />
        )}

        {activeTab === 'media' && (
          <MediaPanel media={media} uploadImage={uploadImage} uploading={uploading} setProductForm={setProductForm} />
        )}
      </div>
    </section>
  );
}

function InquiriesPanel({ totals, statusFilter, setStatusFilter, query, setQuery, filteredInquiries, savingId, updateInquiry, exportCsv, loading }) {
  return (
    <div className="mt-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
        {['all', ...statusOptions].map((status) => (
          <button className={`rounded-2xl border px-4 py-3 text-left transition ${statusFilter === status ? 'border-indigo-500 bg-white shadow-md shadow-indigo-950/10' : 'border-slate-200 bg-white hover:border-indigo-200'}`} type="button" onClick={() => setStatusFilter(status)} key={status}>
            <span className="block text-xs font-black uppercase tracking-wide text-slate-500">{status === 'all' ? 'All' : statusLabels[status]}</span>
            <strong className="mt-1 block text-2xl font-black text-[#02024f]">{totals[status] || 0}</strong>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by customer, phone, product, city, or message" />
        </label>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50" type="button" onClick={exportCsv}>
          <Download size={16} /> CSV Export
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
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
                    <select className={`w-full rounded-xl px-3 py-2 text-sm font-bold capitalize ring-1 ${statusClasses[inquiry.status] || statusClasses.new}`} value={inquiry.status} onChange={(event) => updateInquiry(inquiry, { status: event.target.value })} disabled={savingId === inquiry.id}>
                      {statusOptions.map((status) => <option value={status} key={status}>{statusLabels[status]}</option>)}
                    </select>
                    {savingId === inquiry.id && <span className="mt-2 block text-xs font-semibold text-slate-500">Saving...</span>}
                  </td>
                  <td className="w-72 px-4 py-4">
                    <textarea className="min-h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" defaultValue={inquiry.notes} placeholder="Follow-up notes" onBlur={(event) => {
                      if (event.target.value !== inquiry.notes) updateInquiry(inquiry, { notes: event.target.value });
                    }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!loading && filteredInquiries.length === 0 && <div className="px-4 py-12 text-center text-sm font-semibold text-slate-500">No inquiries match the current filters.</div>}
      </div>
    </div>
  );
}

function ProductsPanel({ products, productForm, setProductForm, editingProductId, setEditingProductId, saveProduct, deleteProduct, savingId, media }) {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5" onSubmit={saveProduct}>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black text-[#02024f]">{editingProductId ? 'Edit Product' : 'Add Product'}</h2>
          {editingProductId && (
            <button className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700" type="button" onClick={() => {
              setEditingProductId('');
              setProductForm(emptyProduct);
            }}>
              New Product
            </button>
          )}
        </div>
        <div className="mt-6 grid gap-4">
          <Input label="Title" value={productForm.title} onChange={(value) => setProductForm((form) => ({ ...form, title: value }))} required />
          <Input label="Slug" value={productForm.slug} onChange={(value) => setProductForm((form) => ({ ...form, slug: value }))} placeholder="wooden-pallets" required />
          <Input label="Category" value={productForm.category} onChange={(value) => setProductForm((form) => ({ ...form, category: value }))} />
          <Input label="Summary" value={productForm.summary} onChange={(value) => setProductForm((form) => ({ ...form, summary: value }))} required />
          <Textarea label="Description" value={productForm.description} onChange={(value) => setProductForm((form) => ({ ...form, description: value }))} />
          <Input label="Link / Page URL" value={productForm.href} onChange={(value) => setProductForm((form) => ({ ...form, href: value }))} placeholder="/wooden-pallets" />
          <Input label="Button Label" value={productForm.buttonLabel} onChange={(value) => setProductForm((form) => ({ ...form, buttonLabel: value }))} />
          <Input label="Image URL" value={productForm.imageUrl} onChange={(value) => setProductForm((form) => ({ ...form, imageUrl: value }))} required />
          {media.length > 0 && (
            <div>
              <span className="text-sm font-bold text-slate-700">Select Uploaded Image</span>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                {media.slice(0, 12).map((item) => (
                  <button className="size-16 shrink-0 overflow-hidden rounded-xl border border-slate-200" type="button" onClick={() => setProductForm((form) => ({ ...form, imageUrl: item.url }))} key={item.id}>
                    <img className="h-full w-full object-cover" src={item.url} alt={item.alt || item.originalName || 'Uploaded media'} />
                  </button>
                ))}
              </div>
            </div>
          )}
          <Textarea label="Specs / Badges (one per line)" value={productForm.specs} onChange={(value) => setProductForm((form) => ({ ...form, specs: value }))} />
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-bold text-slate-700">
              Status
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" value={productForm.status} onChange={(event) => setProductForm((form) => ({ ...form, status: event.target.value }))}>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
              </select>
            </label>
            <Input label="Sort Order" type="number" value={productForm.sortOrder} onChange={(value) => setProductForm((form) => ({ ...form, sortOrder: value }))} />
            <label className="flex items-center gap-3 pt-8 text-sm font-bold text-slate-700">
              <input type="checkbox" checked={productForm.featured} onChange={(event) => setProductForm((form) => ({ ...form, featured: event.target.checked }))} />
              Featured
            </label>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1 disabled:opacity-60" type="submit" disabled={savingId === 'product'}>
            <Save size={17} /> {savingId === 'product' ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </form>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
        <h2 className="text-2xl font-black text-[#02024f]">Managed Products</h2>
        <div className="mt-5 grid gap-4">
          {products.map((product) => (
            <article className="grid gap-4 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[96px_1fr_auto]" key={product.id}>
              <img className="h-24 w-full rounded-xl object-cover sm:w-24" src={product.imageUrl} alt={product.title} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-black text-[#02024f]">{product.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${product.status === 'draft' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>{product.status}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{product.summary}</p>
                <span className="mt-2 block text-xs font-semibold text-slate-500">{product.slug} | Order {product.sortOrder}</span>
              </div>
              <div className="flex gap-2 sm:flex-col">
                <button className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-700 transition hover:bg-indigo-100" type="button" onClick={() => {
                  setEditingProductId(product.id);
                  setProductForm(productToForm(product));
                }} aria-label={`Edit ${product.title}`}>
                  <Pencil size={17} />
                </button>
                <button className="grid size-10 place-items-center rounded-xl bg-red-50 text-red-700 transition hover:bg-red-100" type="button" onClick={() => deleteProduct(product)} aria-label={`Delete ${product.title}`} disabled={savingId === product.id}>
                  <Trash2 size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function MediaPanel({ media, uploadImage, uploading, setProductForm }) {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[380px_1fr]">
      <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5" onSubmit={uploadImage}>
        <h2 className="text-2xl font-black text-[#02024f]">Upload Image</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Images upload to Cloudinary and can be selected for products.</p>
        <label className="mt-5 block text-sm font-bold text-slate-700">
          Image
          <input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" type="file" name="image" accept="image/*" required />
        </label>
        <Input label="Alt Text" name="alt" placeholder="Wooden pallet stack" />
        <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1 disabled:opacity-60" type="submit" disabled={uploading}>
          <Upload size={17} /> {uploading ? 'Uploading...' : 'Upload to Cloudinary'}
        </button>
      </form>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
        <h2 className="text-2xl font-black text-[#02024f]">Media Library</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item) => (
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50" key={item.id}>
              <img className="h-44 w-full object-cover" src={item.url} alt={item.alt || item.originalName || 'Uploaded media'} />
              <div className="p-4">
                <p className="truncate text-sm font-bold text-[#02024f]">{item.alt || item.originalName || 'Uploaded image'}</p>
                <p className="mt-1 text-xs text-slate-500">{item.width}x{item.height} | {Math.round((item.bytes || 0) / 1024)} KB</p>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-full bg-[#02024f] px-4 py-2 text-xs font-black text-white" type="button" onClick={() => setProductForm((form) => ({ ...form, imageUrl: item.url }))}>
                    Use in Product
                  </button>
                  <a className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-700 ring-1 ring-slate-200" href={item.url} target="_blank" rel="noreferrer">Open</a>
                </div>
              </div>
            </article>
          ))}
          {media.length === 0 && <p className="text-sm font-semibold text-slate-500">No media uploaded yet.</p>}
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = 'text', required = false, placeholder = '', name }) {
  return (
    <label className="text-sm font-bold text-slate-700">
      {label}
      <input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" name={name} type={type} value={value} placeholder={placeholder} required={required} onChange={onChange ? (event) => onChange(event.target.value) : undefined} />
    </label>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <label className="text-sm font-bold text-slate-700">
      {label}
      <textarea className="mt-2 min-h-28 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
