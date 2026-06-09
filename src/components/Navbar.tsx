"use client";

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          &lt;A/&gt;
        </a>

        <div className={styles.navActions}>
          <div className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.linkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          <div className={styles.langContainer}>
            <button
              className={`${styles.langButton} ${language === 'es' ? styles.langButtonActive : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <span className={styles.langDivider}>|</span>
            <button
              className={`${styles.langButton} ${language === 'en' ? styles.langButtonActive : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <span className={styles.langDivider}>|</span>
            <button
              className={`${styles.langButton} ${language === 'pt' ? styles.langButtonActive : ''}`}
              onClick={() => setLanguage('pt')}
            >
              PT
            </button>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${activeSection === link.href.slice(1) ? styles.linkActive : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
