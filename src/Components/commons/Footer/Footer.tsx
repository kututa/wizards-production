
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.logoSection}>
          <span className={styles.logoText}>
            Wizards<br />
            <span className={styles.logoSub}>CO-OPERATION</span>
          </span>
        </div>
        <nav className={styles.navLinks}>
          <a href="#">Our Approach</a>
          <a href="#">Innovations</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className={styles.socialSection}>
          <a href="#" aria-label="Facebook" className={styles.socialIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5.022 3.676 9.167 8.438 9.876v-6.987h-2.54v-2.889h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.772-1.631 1.563v1.879h2.773l-.443 2.889h-2.33v6.987C18.324 21.167 22 17.022 22 12z" fill="#fff"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className={styles.socialIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#fff"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 7.5H7v7h2.5v-7zm-1.25-2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm7.25 2.25c-1.25 0-2.25 1-2.25 2.25v4.5H16v-4.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.5H18v-4.5c0-2.071-1.679-3.75-3.75-3.75z" fill="#fff"/></svg>
          </a>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.policyLinks}>
          <a href="#">Terms of Use</a>
          <a href="#">Quality Policy</a>
          <a href="#">Cookies Policy</a>
        </div>
        <div className={styles.siteBy}>Site by</div>
      </div>
    </footer>
  );
};

export default Footer;
