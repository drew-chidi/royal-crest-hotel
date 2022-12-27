import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Card from "../ui/Card";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Card>
        <div className={styles.footerItemsWrapper}>
          <div className={styles.detailsWrapper}>
            <p className={styles.royalCrest}>ROYAL CREST</p>
            <p className={styles.hotelSuites}>HOTELS</p>

            <address className={styles.addressContainer}>
              <p className={styles.locationInfo}>
                9, Isolo, AJao Estate, <br />
                Lagos, Ng.
                <br />
                royalcrest@gmail.com
              </p>
            </address>
          </div>
          <div className={styles.linksWrapper}>
            <p className={styles.linkItem}>Home</p>
            <p className={styles.linkItem}>Facilities</p>
            <p className={styles.linkItem}>Contact</p>
          </div>
          <div className={styles.socialsWrapper}>
            <div className={styles.socialItem}>
              <FaFacebookF />
              <span className={styles.socialName}>Facebook</span>
            </div>
            <div className={styles.socialItem}>
              <GrInstagram />
              <span className={styles.socialName}>Instagram</span>
            </div>
            <div className={styles.socialItem}>
              <AiOutlineWhatsApp />
              <span className={styles.socialName}>08012345678</span>
            </div>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
