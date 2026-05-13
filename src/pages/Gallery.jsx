import { ChevronLeft, ChevronRight, MessageCircle, Plus, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const filters = ['All', 'Wooden Pallets', 'Plastic Pallets', 'Crates', 'Jumbo Bags'];

const galleryItems = [
  {
    title: 'Wooden Pallets',
    category: 'Wooden Pallets',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Pallet Manufacturing',
    category: 'Wooden Pallets',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Plastic Pallets',
    category: 'Plastic Pallets',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Wooden Crates',
    category: 'Crates',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Jumbo Bags',
    category: 'Jumbo Bags',
    image: 'https://images.unsplash.com/photo-1581093458791-9d09ccfed1c1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Forklift Loading Pallets',
    category: 'Wooden Pallets',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Warehouse Supply',
    category: 'Wooden Pallets',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Export Packing Operations',
    category: 'Crates',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80'
  }
];

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need quality pallets for my business.')}`;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);
  const filteredItems = useMemo(
    () => activeFilter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? filteredItems.length - 1 : index - 1));
  }

  function showNext() {
    setActiveIndex((index) => (index === filteredItems.length - 1 ? 0 : index + 1));
  }

  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Gallery</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Our Gallery</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Explore our wooden pallets, plastic pallets, wooden crates, jumbo bags, warehouse stock, and industrial supply operations across UAE.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${activeFilter === filter ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-950/20' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-indigo-50 hover:text-indigo-700'}`}
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
                <img className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" src={item.image} alt={item.title} loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <span className="absolute inset-0 grid place-items-center bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/45 group-hover:opacity-100">
                  <span className="grid size-14 place-items-center rounded-full bg-white/15 text-white backdrop-blur">
                    <Search size={24} />
                  </span>
                </span>
                <span className="absolute bottom-5 left-5 right-5">
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
            <h2 className="text-2xl font-black">Need quality pallets for your business?</h2>
            <div className="mt-5 flex justify-center">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                Request Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {activeItem && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <button className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery image">
            <X size={22} />
          </button>
          <button className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8" type="button" onClick={showPrevious} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <img className="max-h-[75vh] w-full object-cover" src={activeItem.image} alt={activeItem.title} />
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
