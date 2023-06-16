import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { ImLocation, ImPhone } from 'react-icons/im';
import { MdOutlineMail } from 'react-icons/md';
import styles from './ContactUs.module.css';

const ContactUs = ({ page }) => {
  return (
    <section className={styles.contactContainer} id='contacts'>
      {page === 'contact' && (
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Contact Us</h1>
        </div>
      )}
      <Card>
        <h2 className={styles.title}>We are here for you</h2>
        <p className={styles.intro}>
          {`Thank you for considering our hotel for your upcoming stay. At Royal
          Crest Hotels & Suites, we take our customers seriously. If you have any
          questions or would like to make a reservation, please don't
          hesitate to contact us.`}
        </p>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.details}>
              <div className={styles.address}>
                <div className={styles.labelGroup}>
                  <span className={styles.labelIcon}>
                    <ImLocation />
                  </span>
                  <p className={styles.contactLabel}>Address: </p>
                </div>
                <address className={styles.link}>
                  9, Osolo way <br />
                  7 & 8 Bus Stop <br />
                  Ajao Estate <br />
                  Lagos
                </address>
              </div>
              <div className={styles.phone}>
                <div className={styles.labelGroup}>
                  <span className={styles.labelIcon}>
                    <ImPhone />
                  </span>
                  <p className={styles.contactLabel}>Phone: </p>
                </div>
                <div className={styles.phoneNumbers}>
                  <a href='tel:+234-913-444-8666' className={styles.link}>
                    0913 444 8666
                  </a>
                  <a href='tel:+234-913-444-7999' className={styles.link}>
                    0913 444 7999
                  </a>
                </div>
              </div>
              <div className={styles.emailAddress}>
                <div className={styles.labelGroup}>
                  <span className={styles.labelIcon}>
                    <MdOutlineMail />
                  </span>
                  <p className={styles.contactLabel}>Email: </p>
                </div>
                <a
                  href='mailto:reservations-lagos@royalcresthotelsng.com'
                  className={styles.link}
                >
                  reservations-lagos@royalcresthotelsng.com{' '}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.mapLocation}>
            <iframe
              title='royal crest lagos map location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7787074103894!2d3.327857912046835!3d6.549600611769895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e0c43f41ab5%3A0x8d2f5ae2ad17c851!2s9%20Osolo%20Wy%2C%20Ajao%20Estate%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1673111275444!5m2!1sen!2sng'
              width='100%'
              height='100%'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ContactUs;
