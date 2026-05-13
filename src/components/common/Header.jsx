import { Phone } from 'lucide-react';
import Navbar from './Navbar.jsx';
import contactInfo from '../../data/contactInfo.js';

export default function Header({ activePage }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="Khawaja-Carpentry-WoodPallets home">
        <span className="brand-mark">KC</span>
        <span>
          <strong>{contactInfo.businessName}</strong>
          <small>{contactInfo.tagline}</small>
        </span>
      </a>
      <Navbar activePage={activePage} />
      <a className="header-call" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
        <Phone size={18} />
        <span>{contactInfo.phone}</span>
      </a>
    </header>
  );
}
