import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactContainer}>
      <Card>
        <h2 className={styles.title}>We are here for you</h2>
        <p className={styles.intro}>
          {`Thank you for considering our hotel for your upcoming stay. At Royal
          Crest Hotels, we take our customers seriously. If you have any
          questions or would like to make a reservation, please don't
          hesitate to contact us.`}
        </p>
        <div className={styles.contactWrapper}>
          <div className={styles.details}>
            <p className={styles.phone}>Phone: +44 345 678 903</p>
            <p className={styles.emailAddress}>
              Email: luxury_hotels@gmail.com
            </p>
          </div>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor='name' className={styles.label}>
                  Name
                </label>
                <input id='name' type='text' className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor='email' className={styles.label}>
                  Email Address
                </label>
                <input id='email' type='email' className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor='message' className={styles.label}>
                  Message
                </label>
                <textarea id='message' type='text' className={styles.input} />
              </div>
              {/* <button className={styles.button}>Submit</button> */}
              <div className={styles.button}>
                <Button title='Submit' />
              </div>
            </form>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ContactUs;
