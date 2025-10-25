import React from 'react';
import styles from './PartnerProgram.module.scss';

const PartnerProgram: React.FC = () => (
  <section className={styles.partnerProgramSection}>
    <div className={styles.centeredContent}>
      <h2 className={styles.heading}>
        Scale your video content without<br />scaling your vendor list.
      </h2>
      <p className={styles.description}>
        Skip the hassle of managing multiple vendors. Instead, rely on one partner for all your video needs regardless of project size or budget.
      </p>
      <div className={styles.buttonRow}>
        <button className={styles.primaryBtn}>Get In Touch</button>
        <button className={styles.secondaryBtn}>Partner Program</button>
      </div>
    </div>
  </section>
);

export default PartnerProgram;
