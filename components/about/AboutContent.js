import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa";
import Card from "../ui/Card";
import Building from "../../assets/images/royal-crest-building.jpeg";
import Reception from "../../assets/images/reception-area.jpeg";
import Board from "../../assets/images/board-room.jpeg";
import styles from "./AboutContent.module.css";

const AboutContent = () => {
  return (
    <section
      id='section'
      aria-label='facilities content'
      className={styles.sectionContainer}
    >
      <Card>
        <h1 className={styles.sectionHeader}>ABOUT US</h1>
        <p className={styles.intro}>
          Welcome to the Royal Crest! Located in the heart of Lagos, our hotel
          offers a blend of modern amenities and classic charm. With 34 guest
          rooms and suites, a restaurant and bar, a fitness center, and a pool,
          we have everything you need for a comfortable and enjoyable stay.
          <br />
          We look forward to welcoming you to the Royal Crest and making your
          stay with us a memorable one.
        </p>

        <>
          <div className={styles.aboutCard}>
            <div className={styles.aboutCardItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={Building}
                  alt='royal crest building'
                  className={styles.img}
                />
              </div>
              <p className={styles.aboutDescription}>
                We are a boutique hotel, 5 minutes from the Murtala Mohammed
                International Airport, 7 minutes from MM2 and 10 minutes from
                MM1
                <br />
                We parade an array of rooms and suites every discerning guest is
                guaranteed to find appealing
              </p>
            </div>
            <div className={styles.aboutCardItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={Reception}
                  alt='reception area'
                  className={styles.img}
                />
              </div>
              <p className={styles.aboutDescription}>
                Our boutique concept guarantees personalized service to all our
                guests.
                <br />
                Our remodeled checking in desk is designed to have you seated
                while you get the guest-friendly attention you rightly deserve.
              </p>
            </div>
            <div className={styles.aboutCardItem}>
              <div className={styles.imgWrapper}>
                <Image src={Board} alt='board room' className={styles.img} />
              </div>
              <p className={styles.aboutDescription}>
                Our faclities and services awaiting your delightsome experience
                are a fully automated boardroom, restaurant and bar, among
                others.
              </p>
            </div>
          </div>
        </>
      </Card>
      <Card>
        <article className={styles.missionWrapper}>
          <h2>Mission</h2>
          <p className={styles.description}>
            Our mission is to be a leader in the hospitality industry, setting
            the standard for excellence in service, comfort, and convenience. We
            are dedicated to creating a welcoming and comfortable environment
            for our guests, and to providing a range of services and amenities
            that cater to their individual needs and preferences.
          </p>
        </article>

        <article className={styles.visionWrapper}>
          <h2>Vision</h2>
          <p className={styles.description}>
            Our vision is to be the go-to destination for travelers seeking a
            unique and memorable experience. We strive to create a one-of-a-kind
            atmosphere and to offer a range of services and amenities that cater
            to the needs and preferences of our guests. We want to be known as
            the hotel that goes above and beyond to create an exceptional and
            personalized experience for every guest.
          </p>
        </article>
      </Card>
      <article className={styles.locationWrapper}>
        <Card>
          <h2>Our Locations</h2>
          <div className={styles.locationColumns}>
            <div className={styles.locationItem}>
              <h4 className={styles.branch}>Lagos Branch</h4>
              <address className={styles.address}>
                Royal Crest Hotel & Swites
                <br />
                No. 9 Osolo Way, 7 & 8 Bus Stop, <br />
                Off Muritala Mohammed International Airport Road,
                {/* <br /> */}
                Lagos.
              </address>
              <div className={styles.contactPhone}>
                <FaPhone />
                <a href='tel: +2349134448666' className={styles.number}>
                  0913 444 8666,
                </a>
                <a href='tel: +2349134447999' className={styles.number}>
                  0913 444 7999
                </a>
              </div>
            </div>
            <div className={styles.locationItem}>
              <h4 className={styles.branch}>Port Harcourt Branch</h4>
              <address className={styles.address}>
                Royal Crest Hotel & Swites
                <br />
                No. 2, Divine Grace Close,
                <br />
                Slaughter Road, Trans Woji,
                <br />
                Port Harcourt.
              </address>
              <div className={styles.contactPhone}>
                <FaPhone />
                <a href='tel: +2348028793388' className={styles.number}>
                  0802 879 3388,
                </a>
                <a href='tel: +234802 879 3570' className={styles.number}>
                  0802 879 3570
                </a>
              </div>
            </div>
          </div>
        </Card>
      </article>
    </section>
  );
};

export default AboutContent;
