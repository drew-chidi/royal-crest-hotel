import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ title, href }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>
        {href ? (
          <Link href={`/${href}`} className={styles.title}>
            {title}
          </Link>
        ) : (
          <span className={styles.title}>{title}</span>
        )}
      </button>
    </div>
  );
};

export default Button;
