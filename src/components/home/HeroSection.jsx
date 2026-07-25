import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import HeroProductCard from './HeroProductCard.jsx';
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

  const handleCardClick = (product) => {
    // Navigate to product page
    window.location.href = product.link;
  };

  return (
    <section 
      className="relative h-screen min-h-[600px] overflow-hidden bg-slate-950 text-white"
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

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/85 via-indigo-950/75 to-slate-900/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.15),transparent_50%)]" />

      {/* Main Content Container */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-3xl">
            {/* Main Heading - Static */}
            <motion.h1
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl"
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
                className="mt-6"
              >
                <h2 className="text-2xl font-bold text-sky-300 sm:text-3xl lg:text-4xl">
                  {activeProduct.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
                  {activeProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(56,189,248,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(56,189,248,0.4)]"
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
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                href={heroConfig.secondaryButton.href}
                data-spa-link="true"
              >
                {heroConfig.secondaryButton.text}
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Product Selector - Glassmorphism Cards */}
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroProducts.map((product, index) => (
              <HeroProductCard
                key={product.id}
                product={product}
                isActive={activeProduct.id === product.id}
                onClick={() => handleCardClick(product)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Side Navigation Buttons */}
      <motion.button
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 lg:block"
        onClick={goToPrevious}
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
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 lg:block"
        onClick={goToNext}
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Scroll</span>
          <div className="h-12 w-[2px] bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
