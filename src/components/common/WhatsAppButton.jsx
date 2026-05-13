import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:right-5">
      {showScrollTop && (
        <button
          className="grid size-12 place-items-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-950/30 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={21} />
        </button>
      )}
      <a
        className="grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-950/30 transition duration-300 hover:-translate-y-1 hover:animate-pulse hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}
