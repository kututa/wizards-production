"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src="/images/wizards black.png" alt="Wizards Logo" width={140} height={48} className={styles.logo} />
        </div>

        <div className={styles.center}>
          <ul className={styles.navLinks}>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
        </div>

        <div className={styles.right}>
          <a href="#login" className={styles.login}>Login</a>
          <a href="#get-started" className={styles.getStarted}>Get Started</a>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenuOverlay} ${menuOpen ? styles.open : ''}`} role="dialog" aria-hidden={!menuOpen}>
        <ul className={styles.mobileNavList}>
          <li><a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a></li>
          <li><a href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a></li>
          <li><a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li><a href="#login" onClick={() => setMenuOpen(false)}>Login</a></li>
          <li className={styles.mobileGetStarted}><a href="#get-started" onClick={() => setMenuOpen(false)}>Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
