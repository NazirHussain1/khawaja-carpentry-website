import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * HeroProductCard Component
 * Premium glassmorphism card for product selection in hero
 */
export default function HeroProductCard({ product, isActive, onClick, index }) {
  return (
    <motion.button
      className={`group relative cursor-pointer overflow-hidden rounded-[20px] p-4 text-left backdrop-blur-xl transition-all duration-500 ${
        isActive
          ? 'border-2 border-sky-400 bg-white/15 shadow-[0_8px_32px_rgba(56,189,248,0.25)]'
          : 'border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
      }`}
      onClick={onClick}
      type="button"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{ cursor: 'pointer' }}
    >
      {/* Active indicator glow */}
      {isActive && (
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="flex items-center gap-4">
        {/* Product thumbnail */}
        <div className="relative size-16 shrink-0 cursor-pointer overflow-hidden rounded-xl">
          <motion.img
            className="h-full w-full cursor-pointer object-cover"
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
          />
          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
        </div>

        {/* Product info */}
        <div className="flex-1 min-w-0">
          <h3
            className={`truncate text-base font-bold transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
            }`}
          >
            {product.title}
          </h3>
          <p
            className={`mt-0.5 truncate text-sm transition-colors duration-300 ${
              isActive ? 'text-sky-200' : 'text-white/60 group-hover:text-white/80'
            }`}
          >
            {product.subtitle}
          </p>
        </div>
      </div>

      {/* Bottom border accent */}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
        initial={false}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
}

HeroProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
