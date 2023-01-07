import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactContainer} id='contacts'>
      <Card>
        <h2 className={styles.title}>We are here for you</h2>
        <p className={styles.intro}>
          {`Thank you for considering our hotel for your upcoming stay. At Royal
          Crest Hotels, we take our customers seriously. If you have any
          questions or would like to make a reservation, please don't
          hesitate to contact us.`}
        </p>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
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
          <div className={styles.mapLocation}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7787074103894!2d3.327857912046835!3d6.549600611769895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e0c43f41ab5%3A0x8d2f5ae2ad17c851!2s9%20Osolo%20Wy%2C%20Ajao%20Estate%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1673111275444!5m2!1sen!2sng'
              width='100%'
              height='100%'
              allowfullscreen=''
              loading='lazy'
              // referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ContactUs;
