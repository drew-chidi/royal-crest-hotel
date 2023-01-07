import React from "react";
import { AiOutlineContacts } from "react-icons/ai";
import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Card>
        <div className={styles.welcomeBox}>
          <p className={styles.welcomep1}>WELCOME TO</p>
          <div className={styles.welcomeHeading}>ROYAL CREST</div>
          <p className={styles.welcomep2}>HOTELS</p>
          <p className={styles.welcomep3}>
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
            <br />
            Enjoy luxury redefined at the most affordable rates
          </p>
          <Button title='BOOK NOW' iconName='book' />
        </div>
      </Card>
    </div>
  );
};

export default Hero;
