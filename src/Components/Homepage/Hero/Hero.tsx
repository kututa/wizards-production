import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Navbar from "../../commons/Navbar/Navbar";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            World-Class Marketing
            <br />
            <span className={styles.made}>Made</span>{" "}
            <span className={styles.simple}>Simple</span>
          </h1>

          <p className={styles.subtitle}>
            Wizards enables brands to create any video they need with a single,
            trusted partner. Our fast, simple, and transparent process redefines
            simplicity and efficiency in video production.
          </p>

          <a href="#get-started" className={styles.cta}>
            Get Started
          </a>
        </div>

        {/* 🌀 Three-panel video layout */}
        <div className={styles.heroMediaWrap}>
          <div className={styles.sidePreviewLeft}>
            <Image
              src="/images/left.jpg"
              alt="Happy person enjoying pizza and soda"
              width={300}
              height={200}
              className={styles.sideImage}
            />
          </div>

          <div className={styles.heroMedia}>
            <video
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              poster="/images/6fb03863720e6c5cc81aec3ce2e21d387130b8cc.jpg"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
            <div className={styles.wizardsText}>WIZARDS</div>
          </div>

          <div className={styles.sidePreviewRight}>
            <Image
              src="/images/soda.jpg"
              alt="Stylish man dramatic pose"
              width={300}
              height={200}
              className={styles.sideImage}
            />
          </div>
        </div>

        <div className={styles.trustedBrands}>
          <span className={styles.trustedText}>TRUSTED BY OVER 500 BRANDS</span>
          <div className={styles.brandLogos}>
            <Image src="/images/1c87a5853f896a3c526eb943db95c39f0287bd57.png" alt="b1" width={56} height={28}/>
            <Image src="/images/f0edd2eafef783c77d710df679a17ddc8b07069c.png" alt="b2" width={56} height={28}/>
            <Image src="/images/adec059bc61f92552eb251aceed7fbd58d10c12e.png" alt="b3" width={56} height={28}/>
            <Image src="/images/fe4d2be1643d93dd7b1e6f58eaee973a4796d34b.png" alt="b4" width={56} height={28}/>
            <Image src="/images/sha.png" alt="b5" width={56} height={28}/>
            <Image src="/images/king.png" alt="b6" width={56} height={28}/>
            <Image src="/images/white-01.png" alt="b7" width={56} height={28}/>
            <Image src="/images/caf.png" alt="b8" width={56} height={28}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
