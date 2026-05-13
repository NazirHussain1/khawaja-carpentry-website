import { Suspense, lazy, useEffect, useState } from 'react';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Industries = lazy(() => import('./pages/Industries.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const GetQuote = lazy(() => import('./pages/GetQuote.jsx'));

const site = {
  name: 'Mujahid Hussain Carpentry',
  url: 'https://nazirhussain1.github.io/khawaja-carpentry-website',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=65&fm=webp',
  keywords: 'wooden pallets UAE, pallet supplier Dubai, wooden pallets Sharjah, wooden crates UAE, plastic pallets UAE, jumbo bags supplier UAE, industrial packaging UAE, export pallets UAE',
  phone: '+971 50 92 53127',
  email: 'mujahidhussaincarpentry@gmail.com',
  address: 'Industrial Area Al Sajja, Sharjah, UAE'
};

const seoPages = {
  home: {
    title: 'Wooden Pallets Supplier in UAE | Mujahid Hussain Carpentry',
    description: 'Leading supplier of wooden pallets, wooden crates, plastic pallets, and jumbo bags in Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE.',
    path: '/'
  },
  about: {
    title: 'About Us | Wooden Pallet Supplier UAE',
    description: 'Trusted pallet and industrial packaging supplier in UAE since 2009.',
    path: '/about'
  },
  products: {
    title: 'Our Products | Wooden Pallets & Industrial Packaging UAE',
    description: 'Explore wooden pallets, crates, plastic pallets, and jumbo bags supplied across UAE.',
    path: '/products'
  },
  'wooden-pallets': {
    title: 'Wooden Pallets Supplier UAE | Export & Warehouse Pallets',
    description: 'Premium wooden pallet manufacturer and supplier in Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE.',
    path: '/products/wooden-pallets'
  },
  'wooden-crates': {
    title: 'Wooden Crates Supplier UAE | Custom Export Crates',
    description: 'Custom wooden crates supplier in Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, and all UAE for export packing, machinery, and industrial goods.',
    path: '/products/wooden-crates'
  },
  'plastic-pallets': {
    title: 'Plastic Pallets Supplier UAE | Industrial Plastic Pallets',
    description: 'Leading plastic pallet supplier in Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE for warehouse, logistics, food, and industrial use.',
    path: '/products/plastic-pallets'
  },
  'plastic-jumbo-bags': {
    title: 'Plastic Jumbo Bags Supplier UAE | Bulk Packaging Bags',
    description: 'Supplier of plastic jumbo bags in Dubai, Sharjah, Abu Dhabi, JAFZA, and all UAE for industrial packaging, storage, and transport.',
    path: '/products/plastic-jumbo-bags'
  },
  contact: {
    title: 'Contact Us | Mujahid Hussain Carpentry UAE',
    description: 'Contact Mujahid Hussain Carpentry for wooden pallets, crates, plastic pallets, and jumbo bags across Dubai, Sharjah, Abu Dhabi, and all UAE.',
    path: '/contact'
  },
  gallery: {
    title: 'Gallery | Wooden Pallets & Industrial Packaging UAE',
    description: 'View gallery of wooden pallets, wooden crates, plastic pallets, jumbo bags, warehouse operations, and industrial packaging services across UAE.',
    path: '/gallery'
  },
  testimonials: {
    title: 'Client Testimonials | Wooden Pallet Supplier UAE',
    description: 'Read customer reviews for Mujahid Hussain Carpentry, supplier of wooden pallets, crates, plastic pallets, and jumbo bags across UAE.',
    path: '/testimonials'
  },
  services: {
    title: 'Industrial Packaging Services UAE | Mujahid Hussain Carpentry',
    description: 'Pallet manufacturing, pallet refurbishing, bulk pallet supply, and custom wooden crating services across UAE.',
    path: '/services'
  },
  industries: {
    title: 'UAE Pallet Delivery Areas | Mujahid Hussain Carpentry',
    description: 'Wooden pallet, crate, plastic pallet, and jumbo bag supply across Dubai, Sharjah, Abu Dhabi, JAFZA, Jebel Ali, Ajman, Fujairah, and UAE.',
    path: '/industries'
  },
  faq: {
    title: 'FAQ | Wooden Pallets & Industrial Packaging UAE',
    description: 'Common questions about wooden pallets, crates, plastic pallets, jumbo bags, pricing, delivery, and custom orders in UAE.',
    path: '/faq'
  },
  quote: {
    title: 'Request Quote | Wooden Pallets Supplier UAE',
    description: 'Request a free quote for wooden pallets, wooden crates, plastic pallets, and jumbo bags anywhere in UAE.',
    path: '/quote'
  }
};

const routes = {
  home: Home,
  about: About,
  services: Services,
  products: Products,
  industries: Industries,
  gallery: Gallery,
  testimonials: Testimonials,
  faq: FAQ,
  quote: GetQuote,
  contact: Contact
};

function parseRoute() {
  const hashRoute = window.location.hash.startsWith('#/') ? window.location.hash.replace('#/', '') : '';
  const pathRoute = window.location.pathname.replace(/^\/+/, '');
  const route = hashRoute || pathRoute || 'home';
  const [page, slug] = route.split('/');
  return { page, slug };
}

function ensureMeta(selector, createTag, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(createTag);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function applySeo(page, slug) {
  const key = page === 'products' && slug ? slug : page || 'home';
  const seo = seoPages[key] || seoPages.home;
  const url = `${site.url}${seo.path}`;

  document.title = seo.title;
  ensureMeta('meta[name="description"]', 'meta', { name: 'description', content: seo.description });
  ensureMeta('meta[name="keywords"]', 'meta', { name: 'keywords', content: site.keywords });
  ensureMeta('link[rel="canonical"]', 'link', { rel: 'canonical', href: url });
  ensureMeta('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: site.name });
  ensureMeta('meta[property="og:title"]', 'meta', { property: 'og:title', content: seo.title });
  ensureMeta('meta[property="og:description"]', 'meta', { property: 'og:description', content: seo.description });
  ensureMeta('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
  ensureMeta('meta[property="og:url"]', 'meta', { property: 'og:url', content: url });
  ensureMeta('meta[property="og:image"]', 'meta', { property: 'og:image', content: site.image });
  ensureMeta('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' });
  ensureMeta('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: seo.title });
  ensureMeta('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: seo.description });
  ensureMeta('meta[name="twitter:image"]', 'meta', { name: 'twitter:image', content: site.image });

  setJsonLd('local-business-schema', {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    url: site.url,
    image: site.image,
    telephone: site.phone,
    email: site.email,
    description: seoPages.home.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industrial Area Al Sajja',
      addressLocality: 'Sharjah',
      addressCountry: 'AE'
    },
    areaServed: ['Dubai', 'Sharjah', 'Abu Dhabi', 'JAFZA', 'Jebel Ali', 'Ras Al Khaimah', 'Ajman', 'Fujairah'],
    makesOffer: ['wooden pallets UAE', 'wooden crates UAE', 'plastic pallets UAE', 'jumbo bags supplier UAE', 'industrial packaging UAE']
  });

  const breadcrumbItems = [{ name: 'Home', item: site.url }];
  if (seo.path !== '/') {
    const parts = seo.path.split('/').filter(Boolean);
    parts.forEach((part, index) => {
      const itemPath = `/${parts.slice(0, index + 1).join('/')}`;
      breadcrumbItems.push({
        name: part.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' '),
        item: `${site.url}${itemPath}`
      });
    });
  }
  setJsonLd('breadcrumb-schema', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  });
}

export default function App() {
  const [{ page, slug }, setRoute] = useState(parseRoute);

  useEffect(() => {
    const updateRoute = () => setRoute(parseRoute());
    const onLinkClick = (event) => {
      const link = event.target.closest('a[data-spa-link="true"]');
      if (!link) return;

      event.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      updateRoute();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', updateRoute);
    window.addEventListener('hashchange', updateRoute);
    document.addEventListener('click', onLinkClick);
    return () => {
      window.removeEventListener('popstate', updateRoute);
      window.removeEventListener('hashchange', updateRoute);
      document.removeEventListener('click', onLinkClick);
    };
  }, []);

  useEffect(() => {
    applySeo(page, slug);
  }, [page, slug]);

  const Page = page === 'products' && slug ? ProductDetail : routes[page] || Home;

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-900 antialiased">
      <Header activePage={page} />
      <main className="pb-20 sm:pb-0">
        <Suspense fallback={<PageSkeleton />}>
          <Page slug={slug} />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function PageSkeleton() {
  return (
    <section className="min-h-[460px] bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8" aria-label="Loading page">
      <div className="mx-auto max-w-7xl">
        <div className="h-8 w-44 animate-pulse rounded-full bg-white/10" />
        <div className="mt-8 h-12 max-w-3xl animate-pulse rounded-2xl bg-white/10 sm:h-16" />
        <div className="mt-5 h-5 max-w-2xl animate-pulse rounded-full bg-white/10" />
        <div className="mt-3 h-5 max-w-xl animate-pulse rounded-full bg-white/10" />
      </div>
    </section>
  );
}
