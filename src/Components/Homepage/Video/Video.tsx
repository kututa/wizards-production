import React from "react";
import Image from "next/image";
import styles from "./Video.module.scss";

const videoCategories = [
  { title: 'Short Films', image: '/images/1.jpg' },
  { title: 'Products', image: '/images/2.jpg' },
  { title: 'Testimonials', image: '/images/nescafe.jpg' },
  { title: 'Events', image: '/images/left.jpg' },
  { title: 'Motion Graphics', image: '/images/6fb03863720e6c5cc81aec3ce2e21d387130b8cc.jpg' },
  { title: 'Interviews', image: '/images/runer.jpg' },
  { title: 'Photography', image: '/images/soda.jpg' },
  { title: 'Advertisement', image: '/images/4.jpg' },
  { title: 'Documentary', image: '/images/5.jpg' },
    { title: 'Documentary', image: '/images/8.jpg' },
  { title: 'Documentary', image: '/images/9.jpg' },
  { title: 'Documentary', image: '/images/77.jpg' },

];

const clientLogos = [
  '/images/1c87a5853f896a3c526eb943db95c39f0287bd57.png',
  '/images/adec059bc61f92552eb251aceed7fbd58d10c12e.png',
  '/images/ba635d36a99321e5398308086e4b282e9eedf3da.png',
  '/images/caf.png',
  '/images/d25c6e296071d56d08f6474f8460f7a1c37d9f2f.png',
  '/images/f0edd2eafef783c77d710df679a17ddc8b07069c.png',
  '/images/fe4d2be1643d93dd7b1e6f58eaee973a4796d34b.png',
  '/images/king.png',
  '/images/logo1.png',
  '/images/sha.png',
  '/images/cafe.png',
  '/images/white-01.png',
];

const Video = () => (
  <section className={styles.videoSection}>
    <div className={styles.header}>
      <h2>Create any video, with<br />one partner.</h2>
      <p>View our past work to find inspiration for your own video content</p>
    </div>
    <div className={styles.grid}>
      {videoCategories.map((cat) => (
        <div
          key={cat.title}
          className={styles.card}
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <span className={styles.cardTitle}>{cat.title}</span>
        </div>
      ))}
    <div className={styles.logos}>
      {clientLogos.map((logo, idx) => (
        <Image
          key={idx}
          src={logo}
          alt="Client logo"
          width={120}
          height={60}
          className={styles.logoImg}
        />
      ))}
    </div>
    </div>
  </section>
);

export default Video;
