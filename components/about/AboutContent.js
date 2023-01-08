import React from "react";
import Card from "../ui/Card";
import styles from "./AboutContent.module.css";

const AboutContent = () => {
  return (
    <section
      id='section'
      aria-label='facilities content'
      className={styles.sectionContainer}
    >
      <Card>
        <h2 className={styles.sectionHeader}>ABOUT US</h2>
        <p className={styles.intro}>
          Welcome to the Royal Crest! Located in the heart of Lagos, our hotel
          offers a blend of modern amenities and classic charm. With 34 guest
          rooms and suites, a restaurant and bar, a fitness center, and a pool,
          we have everything you need for a comfortable and enjoyable stay.
          <br />
          <br />
          Our guest rooms and suites are spacious and well-appointed, with
          comfortable beds, high-speed internet, and flat-screen TVs. Some rooms
          also offer stunning views of the city.
          <br />
          <br />
          At our restaurant and bar, you&#39;ll find a range of dining options,
          from casual fare to fine dining. Our menu features a selection of
          locally-sourced ingredients and dishes that are sure to please any
          palate.
          <br />
          <br />
          When you&#39;re not exploring the city, take advantage of our fitness
          center and pool, which are open to all guests. We also offer a variety
          of services and amenities to make your stay even more comfortable,
          including a concierge, room service, and a 24-hour front desk.
          <br />
          <br />
          We look forward to welcoming you to the Royal Crest and making your
          stay with us a memorable one.
        </p>
        <div className={styles.missionVision}>
          <div className={styles.missionWrapper}>
            <h3>Mission</h3>
            <p className={styles.description}>
              Our mission is to be a leader in the hospitality industry, setting
              the standard for excellence in service, comfort, and convenience.
              We are dedicated to creating a welcoming and comfortable
              environment for our guests, and to providing a range of services
              and amenities that cater to their individual needs and
              preferences.
            </p>
          </div>
          <div className={styles.visionWrapper}>
            <h3>Vision</h3>
            <p className={styles.description}>
              Our vision is to be the go-to destination for travelers seeking a
              unique and memorable experience. We strive to create a
              one-of-a-kind atmosphere and to offer a range of services and
              amenities that cater to the needs and preferences of our guests.
              We want to be known as the hotel that goes above and beyond to
              create an exceptional and personalized experience for every guest.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AboutContent;
