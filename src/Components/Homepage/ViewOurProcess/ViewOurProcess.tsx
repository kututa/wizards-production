import React from "react";
import styles from "./ViewOurProcess.module.scss";
import Image from "next/image";

const processSteps = [
  {
    title: "Pre-Production",
    description:
      "Develop a detailed strategy that ensures every video project not only tells a compelling story, but also aligns with your brand’s larger goals.",
    image: "/images/post.jpg",
  },
  {
    title: "Production",
    description:
      "Our production team handles every detail from scripting, casting, scheduling, filming, and everything in between so you don't have to, giving you confidence that your project is in expert hands.",
    image: "/images/post1.jpg",
  },
  {
    title: "Post-Production",
    description:
      "Our in-house team of editors will refine every aspect of your video ensuring the final cut is exactly what you envisioned.",
    image: "/images/post2.jpg",
  },
];

const ViewOurProcess = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.header}>
        <h2>From ideation to creation.</h2>
        <p>
          We take care of everything you need to bring your vision to life.
        </p>
        <button className={styles.ctaButton}>View Our Process</button>
      </div>

      <div className={styles.cardsGrid}>
        {processSteps.map((step) => (
          <div key={step.title} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={step.image}
                alt={step.title}
                fill
                className={styles.cardImage}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.cardContent}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewOurProcess;
