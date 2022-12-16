import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Card from "../ui/Card";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Card>
        <div className={styles.footerItemsWrapper}>
          <div className={styles.nameContainer}>
            <p className={styles.royalCrest}>ROYAL CREST</p>
            <p className={styles.hotelSuites}>HOTELS & SUITES</p>

            <address className={styles.addressContainer}>
              <p className={styles.locationInfo}>
                9, Isolo, AJao Estate, <br />
                Lagos, Ng.
                <br />
                royalcrest@gmail.com
              </p>
            </address>
          </div>
          <div className={styles.footerLinksWrapper}>
            <div>
              <p className={styles.linkItem}>Home</p>
              <p className={styles.linkItem}>Facilities</p>
              <p className={styles.linkItem}>Contact</p>
            </div>
            <div className={styles.socialsWrapper}>
              <div className={styles.socialsItem}>
                <span className={styles.socialIcon}>
                  <FaFacebookF />
                </span>
                {/* <span className={styles.socialTitle}>Facebook</span> */}
              </div>
              <div className={styles.socialsItem}>
                <span className={styles.socialIcon}>
                  <GrInstagram />
                </span>
                {/* <span className={styles.socialItem}>Instagraam</span> */}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
