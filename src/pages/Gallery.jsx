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
      <section className="page-hero">
        <span className="eyebrow">Gallery</span>
        <h1>Project and product visuals</h1>
        <p>Representative pallet, crate, warehouse, and carpentry visuals. Replace these panels with real project photos.</p>
      </section>
      <section className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className={`gallery-item ${item}`} key={`${item}-${index}`}>
            <span>Project {index + 1}</span>
          </div>
        ))}
      </section>
    </>
  );
}
