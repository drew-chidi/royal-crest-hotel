import React from "react";
import styles from "./AboutContent.modules.css";

const AboutContent = () => {
  return (
    <div>
      <section>
        <h2>ABOUT US</h2>
        <p></p>

        <div className={styles.missionVision}>
          <div className={styles.missionWrapper}>
            <h3>Mission</h3>
            <p>
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
            <p>
              Our vision is to be the go-to destination for travelers seeking a
              unique and memorable experience. We strive to create a
              one-of-a-kind atmosphere and to offer a range of services and
              amenities that cater to the needs and preferences of our guests.
              We want to be known as the hotel that goes above and beyond to
              create an exceptional and personalized experience for every guest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
