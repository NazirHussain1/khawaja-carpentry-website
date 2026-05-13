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

function parseHash() {
  const hash = window.location.hash.replace('#/', '') || 'home';
  const [page, slug] = hash.split('/');
  return { page, slug };
}

export default function App() {
  const [{ page, slug }, setRoute] = useState(parseHash);

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const Page = slug ? ProductDetail : routes[page] || Home;

  return (
    <>
      <Header activePage={page} />
      <main>
        <Page slug={slug} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
