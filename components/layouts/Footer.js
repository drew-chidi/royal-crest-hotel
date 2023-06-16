import React from 'react';
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { ImPhone } from 'react-icons/im';
import { MdMail, MdOutlineMail } from 'react-icons/md';
import Card from '../ui/Card';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Card>
        <div className={styles.footerItemsWrapper}>
          <div className={styles.socialsWrapper}>
            <ul className={styles.socialsGroup}>
              <li className={styles.socialList}>
                <a
                  href='https://instagram.com/royalcrest.hotel.suites?igshid=ZWIzMWE5ZmU3Zg=='
                  className={styles.socialLink}
                >
                  <GrInstagram />
                </a>
              </li>
              <li className={styles.socialList}>
                <a
                  href='https://www.facebook.com/profile.php?id=100088426539331&mibextid=LQQJ4d'
                  className={styles.socialLink}
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className={styles.socialList}>
                <a
                  href='https://www.linkedin.com/in/uzor-ojirika-a468a332/?original_referer=https%3A%2F%2Fwww.google.com%2F'
                  className={styles.socialLink}
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.detailsWrapper}>
            <p className={styles.royalCrest}>Royal Crest, Lagos</p>

            <address className={styles.addressContainer}>
              <p className={styles.locationInfo}>
                9, Osolo Way, 7 & 8 Bus Stop <br />
                Ajao Estate, Lagos, Ng.
              </p>
            </address>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactGroup}>
              <span className={styles.contactIcon}>
                <ImPhone />
              </span>
              <a href='tel: +2349134448666'>09134448666 | </a>
            </div>
            <div className={styles.contactGroup}>
              <span className={styles.contactIcon}>
                <FaWhatsapp />
              </span>
              <a href='tel: +2349134448666'>09134448666 | </a>
            </div>
            <div className={styles.contactGroup}>
              <span className={styles.contactIcon}>
                <MdMail />
              </span>
              <a href='mailto: reservations-lagos@royalcresthotelsng.com'>
                reservations-lagos@royalcresthotelsng.com{' '}
              </a>
            </div>
          </div>
          <div className={styles.copyrightWrapper}>
            <p className={styles.copyright}>
              &copy; Royal Crest Hotel & Suites
            </p>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
