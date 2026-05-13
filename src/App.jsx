import { useEffect, useState } from 'react';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Gallery from './pages/Gallery.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Industries from './pages/Industries.jsx';
import FAQ from './pages/FAQ.jsx';
import GetQuote from './pages/GetQuote.jsx';

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

  const Page = page === 'products' && slug ? ProductDetail : routes[page] || Home;

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-900 antialiased">
      <Header activePage={page} />
      <main>
        <Page slug={slug} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
