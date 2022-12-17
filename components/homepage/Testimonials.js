import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Card from "../ui/Card";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <Card>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p
          className={styles.statement}
        >{`"Calm, Serene, Retro – What a way to relax and enjoy"`}</p>
        <p className={styles.author}> Mr. and Mrs. Njoku, Lagos</p>
        <div className={styles.buttonGroup}>
          <button className={styles.chevronIcon}>
            <BsChevronRight />
          </button>
          <button className={styles.chevronIcon}>
            <BsChevronLeft />
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Testimonials;
