const galleryItems = [
  'visual-pallet-stack',
  'visual-crate',
  'visual-box',
  'visual-warehouse',
  'visual-pallet-stack',
  'visual-crate'
];

export default function Gallery() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Gallery</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Project and product visuals</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Representative pallet, crate, warehouse, and carpentry visuals. Replace these panels with real project photos.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {galleryItems.map((item, index) => (
          <div className="flex min-h-72 items-end rounded-lg bg-gradient-to-br from-slate-900 via-slate-700 to-emerald-800 p-5 shadow-sm" key={`${item}-${index}`}>
            <span className="rounded-md bg-white px-3 py-2 text-sm font-bold text-slate-950">Project {index + 1}</span>
          </div>
        ))}
      </section>
    </>
  );
}
