import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const whatsappUrl = `https://wa.me/971509253127?text=${encodeURIComponent('Hello, I need a quote for wooden pallets.')}`;

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 320);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      {showScrollTop && (
        <button
          className="grid size-11 place-items-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-950/30 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:size-12"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={21} />
        </button>
      )}
      <a
        className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/30 ring-1 ring-white/20 transition duration-300 hover:-translate-y-1 hover:animate-pulse hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:size-14"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="size-7 sm:size-8" />
      </a>
    </div>
  );
}
