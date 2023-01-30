import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ImPhone } from "react-icons/im";
import { MdMail, MdOutlineMail } from "react-icons/md";
import Card from "../ui/Card";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Card>
        <div className={styles.footerItemsWrapper}>
          <div className={styles.socialsWrapper}>
            <ul className={styles.socialsGroup}>
              <li className={styles.socialList}>
                <a className={styles.socialLink}>
                  <FaYoutube />
                </a>
              </li>
              <li className={styles.socialList}>
                <a className={styles.socialLink}>
                  <GrInstagram />
                </a>
              </li>
              <li className={styles.socialList}>
                <a className={styles.socialLink}>
                  <FaFacebookF />
                </a>
              </li>
              <li className={styles.socialList}>
                <a className={styles.socialLink}>
                  <FaTwitter />
                </a>
              </li>
              <li className={styles.socialList}>
                <a className={styles.socialLink}>
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
                AJao Estate, Lagos, Ng.
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
              <a href='mailto: info@royal-crest.com'>info@royal-crest.com </a>
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
