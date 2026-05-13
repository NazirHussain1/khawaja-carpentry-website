import { ChevronLeft, ChevronRight, MessageCircle, Phone, Plus, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const filters = ['All', 'Wooden Pallets', 'Wooden Crates', 'Plastic Pallets', 'Jumbo Bags', 'Warehouse Operations', 'Export Packing'];

const galleryItems = [
  ['Wooden Pallets', 'Wooden Pallets', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Wooden Pallet Manufacturing', 'Wooden Pallets', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Plastic Pallets Stock', 'Plastic Pallets', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Wooden Crates', 'Wooden Crates', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Plastic Jumbo Bags', 'Jumbo Bags', 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Forklift Loading Pallets', 'Warehouse Operations', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Warehouse Storage', 'Warehouse Operations', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Export Packing Operations', 'Export Packing', 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=65&fm=webp'],
  ['Delivery Operations', 'Warehouse Operations', 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=65&fm=webp']
].map(([title, category, image]) => ({ title, category, image }));

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need quality industrial packaging solutions.')}`;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const filteredItems = useMemo(
    () => activeFilter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  useEffect(() => {
    function handleKeyDown(event) {
      if (activeIndex === null) return;
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? filteredItems.length - 1 : index - 1));
  }

  function showNext() {
    setActiveIndex((index) => (index === filteredItems.length - 1 ? 0 : index + 1));
  }

  function handleTouchEnd(event) {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 60) {
      if (delta > 0) showPrevious();
      else showNext();
    }
    setTouchStart(null);
  }

  return (
    <>
      <section
        className="relative isolate min-h-[460px] bg-slate-950 text-white sm:min-h-[520px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 2, 79, 0.94), rgba(22, 17, 86, 0.86), rgba(2, 6, 23, 0.62)), url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=65&fm=webp')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/10">Industrial Gallery</span>
            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">Our Industrial Gallery</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
              Explore our wooden pallets, wooden crates, plastic pallets, jumbo bags, warehouse stock, export packing, and industrial supply operations across UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/30 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Get Free Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${activeFilter === filter ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:text-indigo-700'}`}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveIndex(null);
                }}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                className="group relative min-h-72 overflow-hidden rounded-3xl bg-slate-900 text-left shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/15"
                type="button"
                onClick={() => setActiveIndex(index)}
                key={`${item.title}-${item.image}`}
              >
                <img className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" src={item.image} alt={item.title} width="1200" height="800" loading="lazy" decoding="async" />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <span className="absolute inset-0 grid place-items-center bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/45 group-hover:opacity-100">
                  <span className="grid size-14 translate-y-2 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Search size={24} />
                  </span>
                </span>
                <span className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    <Plus size={13} />
                    {item.category}
                  </span>
                  <strong className="block text-xl font-black text-white">{item.title}</strong>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#02024f] px-6 py-8 text-center text-white shadow-2xl shadow-slate-950/10">
            <h2 className="text-2xl font-black">Need Quality Industrial Packaging Solutions?</h2>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Request Quote
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> WhatsApp Us
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15" href="tel:+971509253127">
                <Phone size={19} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <button className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery image">
            <X size={22} />
          </button>
          <button className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8" type="button" onClick={showPrevious} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <div className="w-full max-w-5xl animate-hero-enter overflow-hidden rounded-3xl bg-white shadow-2xl">
            <img className="max-h-[75vh] w-full object-cover" src={activeItem.image} alt={activeItem.title} width="1200" height="800" decoding="async" />
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <h2 className="text-xl font-black text-[#02024f]">{activeItem.title}</h2>
                <p className="text-sm font-semibold text-indigo-700">{activeItem.category}</p>
              </div>
              <span className="text-sm font-bold text-slate-500">{activeIndex + 1} / {filteredItems.length}</span>
            </div>
          </div>
          <button className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8" type="button" onClick={showNext} aria-label="Next image">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
