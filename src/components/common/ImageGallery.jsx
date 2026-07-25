import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Zoom, Autoplay } from 'swiper/modules';
import { X, ZoomIn } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

/**
 * Professional Image Gallery Component
 * Features:
 * - Multiple images slider
 * - Thumbnail navigation
 * - Lightbox/fullscreen view
 * - Touch/swipe support
 * - Autoplay with pause on hover
 * - Zoom functionality
 * - Smooth animations
 */
export default function ImageGallery({ images = [], alt = 'Product image', className = '' }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // If single image, show simple image with lightbox
  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <>
        <div className={`group relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/10 ${className}`}>
          <button
            className="image-hover-effect relative block h-full w-full"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
            type="button"
            aria-label="Open image in fullscreen"
          >
            <img
              className="h-80 w-full object-cover transition-all duration-500 group-hover:scale-105 sm:h-96"
              src={images[0]}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-300 group-hover:bg-slate-900/20">
              <ZoomIn className="translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" size={32} />
            </div>
          </button>
        </div>
        <Lightbox images={images} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} onIndexChange={setLightboxIndex} alt={alt} />
      </>
    );
  }

  // Multiple images - show slider with thumbnails
  return (
    <>
      <div className={`space-y-4 ${className}`}>
        {/* Main Slider */}
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/10">
          <Swiper
            modules={[Navigation, Pagination, Thumbs, Zoom, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            zoom={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={images.length > 1}
            className="aspect-[4/3] cursor-pointer"
            onClick={(swiper) => {
              setLightboxIndex(swiper.realIndex);
              setLightboxOpen(true);
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container relative h-80 sm:h-96">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500"
                    src={image}
                    alt={`${alt} - Image ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-300 group-hover:bg-slate-900/10">
                    <ZoomIn className="translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" size={32} />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-custom absolute left-4 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 sm:size-12"
              aria-label="Previous image"
            >
              <svg className="size-5 sm:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="swiper-button-next-custom absolute right-4 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 sm:size-12"
              aria-label="Next image"
            >
              <svg className="size-5 sm:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Swiper>
        </div>

        {/* Thumbnail Slider */}
        {images.length > 1 && (
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            watchSlidesProgress
            className="cursor-pointer"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="group relative aspect-square overflow-hidden rounded-xl border-2 border-slate-200 transition-all hover:border-sky-500 hover:shadow-lg">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={image}
                    alt={`${alt} thumbnail ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox images={images} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} onIndexChange={setLightboxIndex} alt={alt} />
    </>
  );
}

/**
 * Lightbox Component for Fullscreen Image Viewing
 */
function Lightbox({ images, isOpen, currentIndex, onClose, onIndexChange, alt }) {
  if (!isOpen) return null;

  const handlePrevious = () => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close Button */}
      <button
        className="absolute right-4 top-4 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Main Image */}
      <img
        className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
