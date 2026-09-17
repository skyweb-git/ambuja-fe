import React from 'react';
import { ShieldCheck, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';
import { useWebsiteContent } from '../services/contentService';

export default function Footer({ onOpenPrivacy }) {
  const websiteContent = useWebsiteContent();
  const contactData = websiteContent?.contact || {};
  const heroData = websiteContent?.hero || {};

  const phone = contactData.phone || '+91 98490 12345';
  const email = contactData.email || contactData.infoEmail || 'sales@ambhujamaytri.in';
  const rawWebsiteUrl = contactData.websiteUrl || 'https://www.ambhujamaytri.in';
  const websiteUrl = rawWebsiteUrl.startsWith('http') ? rawWebsiteUrl : `https://${rawWebsiteUrl}`;
  const displayWebsite = rawWebsiteUrl.replace(/^https?:\/\//i, '').replace(/\/$/, '');
  const reraNo = heroData.reraNumber || 'P02400007647';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Club House', href: '#clubhouse' },
    { name: 'Elevations', href: '#elevations' },
    { name: 'Floor Plans', href: '#floorplans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location Map', href: '#location' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand & RERA */}
          <div className="footer-brand-col">
            <div className="footer-brand-logos">
              <a href="#home" title="Maytri Ambhuja">
                <img
                  src={CLOUDINARY_MEDIA.logo}
                  alt="Maytri Ambhuja Logo"
                  className="footer-logo-img"
                />
              </a>
              <div className="footer-brand-divider" aria-hidden="true" />
              <a href="#home" title="Sanghi City">
                <img
                  src={CLOUDINARY_MEDIA.sanghiLogo || '/sanghicity-logo.png'}
                  alt="Sanghi City Logo"
                  className="footer-secondary-logo-img"
                />
              </a>
            </div>
            <p className="footer-brand-tagline">
              Exclusive Villa Township in Hyderabad by Maytri Group.
            </p>
            <div className="footer-rera-box">
              <ShieldCheck size={16} className="text-cyan" />
              <div>
                <span className="footer-rera-lbl">Telangana RERA Reg.</span>
                <strong className="footer-rera-num">{reraNo}</strong>
              </div>
            </div>
            <p className="footer-firm-note">
              Maytri Group — 13+ years of reputed real-estate craftsmanship in Hyderabad.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Head Office */}
          <div className="footer-office-col">
            <h4 className="footer-heading">Head Office</h4>
            <address className="footer-address">
              Old Bata Showroom Building,<br />
              Vanasthalipuram, Next to Dmart,<br />
              Hyderabad - 500070.
            </address>
          </div>

          {/* Column 4: Contact Channels */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="footer-contact-link">
                  <Phone size={15} className="text-cyan" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="footer-contact-link" title="Official Email">
                  <Mail size={15} className="text-cyan" />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <Globe size={15} className="text-cyan" />
                  <span>{displayWebsite}</span>
                </a>
              </li>
            </ul>

            <button onClick={scrollToTop} className="footer-scroll-top-btn" aria-label="Scroll to top of page">
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 MAYTRI GROUP, All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <button className="legal-link-btn" onClick={onOpenPrivacy}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
