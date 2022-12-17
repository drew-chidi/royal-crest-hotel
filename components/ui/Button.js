import React from "react";
import { AiOutlineContacts } from "react-icons/ai";
import styles from "./Button.module.css";

const Button = ({ title, iconName }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>
        {iconName && (
          <span className={styles.icon}>
            <AiOutlineContacts />
          </span>
        )}
        <span className={styles.title}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
