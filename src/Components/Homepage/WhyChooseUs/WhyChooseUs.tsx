import Image from "next/image";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      {/* Header + Button */}
      <div className={styles.content}>
        <div className={styles.headerSection}>
          <h2>
            Your fast and reliable <br /> production partner.
          </h2>
          <button className={styles.ctaButton}>Get In Touch</button>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src="/images/nescafe.jpg"
          alt="production sample"
          width={1200}
          height={650}
          className={styles.roundedImage}
          priority
        />
      </div>

      {/* Features Grid */}
      <div className={styles.content}>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <h3>Streamlined process</h3>
            <p>
              We bring strategy and production under one roof, keeping your
              brand’s voice consistent and strong.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3>Creative excellence</h3>
            <p>
              Our team ensures every detail reflects your vision, blending
              innovation with precision craftsmanship.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3>Reliable delivery</h3>
            <p>
              From concept to completion, we meet deadlines with accuracy and
              transparency, every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
