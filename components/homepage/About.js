import Link from "next/link";
import React from "react";
import Card from "../ui/Card";
import LinkButton from "../ui/LinkButton";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id='about' className={styles.aboutContainer}>
      <Card>
        <div>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.intro}>
            Welcome to our hotel! We are a family-owned and operated business
            that has been serving travelers for over 50 years. Our goal is to
            provide our guests with comfortable accommodations, excellent
            service, and a memorable stay.
          </p>
          <LinkButton title='Learn more' href='about' />
        </div>
      </Card>
    </section>
  );
};

export default About;
