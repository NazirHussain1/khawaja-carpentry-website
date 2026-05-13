import { Mail, MapPin, Phone } from 'lucide-react';
import contactInfo from '../../data/contactInfo.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand footer-brand" href="#/home">
            <span className="brand-mark">KC</span>
            <span>
              <strong>Khawaja</strong>
              <small>WoodPallets LLC</small>
            </span>
          </a>
          <p>Premium wooden pallets manufacturer and supplier serving businesses across all 7 UAE Emirates.</p>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#/about">About</a>
          <a href="#/products">Products</a>
          <a href="#/gallery">Gallery</a>
          <a href="#/contact">Contact</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p><Phone size={16} /> {contactInfo.phone}</p>
          <p><Phone size={16} /> {contactInfo.secondaryPhone}</p>
          <p><Mail size={16} /> {contactInfo.email}</p>
          <p><MapPin size={16} /> {contactInfo.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {contactInfo.businessName}. All rights reserved.</span>
      </div>
    </footer>
  );
}
