import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Navbar from '../../commons/Navbar/Navbar';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    {/* Render Navbar inside the hero so they share the same container width */}
    <Navbar />
    <div className={styles.heroContent}>
      <h1 className={styles.title}>
        World-Class Marketing<br />
        Made <span className={styles.simple}>Simple</span>
      </h1>
      <p className={styles.subtitle}>
        Wizards enables brands to create any video they need with a single, trusted partner. Our fast, simple, and transparent process redefines simplicity and efficiency in video production.
      </p>
      <a href="#get-started" className={styles.getStarted}>Get Started</a>
    </div>
    <div className={styles.heroMedia}>
      <Image src="/images/6fb03863720e6c5cc81aec3ce2e21d387130b8cc.jpg" alt="Wizards Spiral" className={styles.heroImage} width={600} height={300} />
      <div className={styles.wizardsText}>WIZARDS</div>
    </div>
    <div className={styles.trustedBrands}>
      <span className={styles.trustedText}>TRUSTED BY OVER 500 BRANDS</span>
      <div className={styles.brandLogos}>
        {/* Example logos, replace with your actual brand images */}
        <Image src="/images/1c87a5853f896a3c526eb943db95c39f0287bd57.png" alt="Brand 1" width={60} height={40} />
        <Image src="/images/7f43054917be4819334f87d63301e209f446d124.jpg" alt="Brand 2" width={60} height={40} />
        <Image src="/images/adec059bc61f92552eb251aceed7fbd58d10c12e.png" alt="Brand 3" width={60} height={40} />
        <Image src="/images/f0edd2eafef783c77d710df679a17ddc8b07069c.png" alt="Brand 4" width={60} height={40} />
        <Image src="/images/fe4d2be1643d93dd7b1e6f58eaee973a4796d34b.png" alt="Brand 5" width={60} height={40} />
        <Image src="/images/adec059bc61f92552eb251aceed7fbd58d10c12e.png" alt="Brand 6" width={60} height={40} />
        {/* Add more logos as needed */}
      </div>
    </div>
  </section>
);

export default Hero;
