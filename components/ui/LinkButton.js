import Link from "next/link";
import React from "react";
import { AiOutlineContacts } from "react-icons/ai";
import styles from "./LinkButton.module.css";

const LinkButton = ({ title, iconName, href }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>
        {/* {iconName && (
          <span className={styles.icon}>
            <AiOutlineContacts />
          </span>
        )} */}
        <Link href={`/${href}`} className={styles.title}>
          {title}
        </Link>
      </button>
    </div>
  );
};

export default LinkButton;
