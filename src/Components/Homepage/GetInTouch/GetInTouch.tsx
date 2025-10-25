
import React from "react";
import styles from "./GetInTouch.module.scss";

const GetInTouch = () => {
  return (
    <section className={styles.getInTouchSection}>
      <div className={styles.content}>
        <p className={styles.subheading}>Get In Touch</p>
        <h2 className={styles.heading}>
          Expert storytelling meets <br /> innovative production technology.
        </h2>
        <p className={styles.description}>
          Join thousands of the world’s largest brands that trust Wizards with their video content.
        </p>
        <button className={styles.ctaButton}>Tell Us About Your Project</button>
      </div>
    </section>
  );
};

export default GetInTouch;
