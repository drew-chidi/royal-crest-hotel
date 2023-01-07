import React from "react";
import styles from "./SectionDivider.module.css";

const SectionDivider = () => {
  return (
    <div className={styles.dividerWrapper}>
      <div
        class={`${styles.divider} ${styles.divTransparent} ${styles.divDot}`}
      ></div>
    </div>
  );
};

export default SectionDivider;
