import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import { heroProducts, heroConfig } from '../../data/heroData.js';

/**
 * Premium Hero Section with Dynamic Product Switcher
 * Features: Ken Burns effect, smooth transitions, glassmorphism cards, auto-rotation
 */
export default function HeroSection() {
  const [activeProduct, setActiveProduct] = useState(heroProducts[0]);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveProduct((current) => {
        const currentIndex = heroProducts.findIndex((p) => p.id === current.id);
        const nextIndex = (currentIndex + 1) % heroProducts.length;
        return heroProducts[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Navigation functions
  const goToNext = () => {
    const currentIndex = heroProducts.findIndex((p) => p.id === activeProduct.id);
    const nextIndex = (currentIndex + 1) % heroProducts.length;
    setActiveProduct(heroProducts[nextIndex]);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10s
  };

  const goToPrevious = () => {
    const currentIndex = heroProducts.findIndex((p) => p.id === activeProduct.id);
    const prevIndex = (currentIndex - 1 + heroProducts.length) % heroProducts.length;
    setActiveProduct(heroProducts[prevIndex]);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10s
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <section
      className="relative min-h-[calc(100svh-150px)] overflow-hidden bg-slate-950 text-white lg:h-[calc(100vh-128px)] lg:min-h-[540px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          className="absolute inset-0 -z-20"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <img
            className="h-full w-full object-cover"
            src={activeProduct.backgroundImage}
            alt={activeProduct.title}
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Keep the product image present while preserving text contrast. */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(42,23,15,0.86),rgba(91,53,31,0.42)_48%,rgba(42,23,15,0.72))]" />

      {/* Main Content Container */}
      <div className="relative mx-auto flex min-h-[calc(100svh-150px)] max-w-7xl flex-col justify-center px-4 py-7 sm:px-6 lg:h-full lg:min-h-0 lg:px-8 lg:py-6">
        {/* Top Content */}
        <div className="flex flex-1 items-center pt-8 lg:pt-4">
          <div className="w-full max-w-2xl">
            <span className="animate-hero-enter text-[10px] font-black uppercase tracking-[0.2em] text-sky-200 sm:text-xs">Industrial packaging, made dependable</span>
            <motion.h1
              className="mt-3 max-w-2xl font-serif text-4xl font-normal leading-[0.98] tracking-normal sm:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroConfig.mainHeading}
            </motion.h1>

            {/* Dynamic Product Heading */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-2"
              >
                <h2 className="text-lg font-semibold text-sky-200 sm:text-xl lg:text-2xl">
                  {activeProduct.heading}
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 lg:text-lg">
                  {activeProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="mt-4 flex flex-col justify-start gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8ed] px-6 py-3 text-sm font-bold text-[#5b351f] shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff2dd] sm:min-h-0"
                href={heroConfig.primaryButton.href}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                {heroConfig.primaryButton.text}
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </a>

              <a
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/45 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:min-h-0"
                href="/products"
                data-spa-link="true"
              >
                View All Products
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Navigation Buttons */}
      <motion.button
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 lg:block"
        onClick={() => handleArrowClick('prev')}
        type="button"
        aria-label="Previous product"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ x: -4 }}
      >
        <ChevronLeft className="text-white" size={32} />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 lg:block"
        onClick={() => handleArrowClick('next')}
        type="button"
        aria-label="Next product"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ x: 4 }}
      >
        <ChevronRight className="text-white" size={32} />
      </motion.button>

      {/* Progress Indicator */}
      <div className="absolute bottom-32 left-1/2 z-20 hidden -translate-x-1/2 gap-2 lg:flex">
        {heroProducts.map((product, index) => (
          <motion.button
            key={product.id}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeProduct.id === product.id ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => {
              setActiveProduct(product);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 10000);
            }}
            type="button"
            aria-label={`Go to ${product.title}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
