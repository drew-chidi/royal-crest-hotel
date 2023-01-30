import React, { Fragment } from "react";
import Card from "../ui/Card";
import Studio from "../../assets/images/studio-room.jpg";
import Classic from "../../assets/images/deluxe-room.png";
import Deluxe from "../../assets/images/deluxe-room.png";
import Premium from "../../assets/images/deluxe-room.png";
import Suite from "../../assets/images/deluxe-room.png";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";
import styles from "./RoomsContent.module.css";
import Hero from "../homepage/Hero";
import ContactUs from "../contact/ContactUs";
import RoomAmenities from "./RoomAmenities";
import { GrHomeRounded } from "react-icons/gr";

const RoomsContent = () => {
  return (
    <Fragment>
      <Hero page='room' />
      <section>
        <Card>
          <div>
            <h1 className={styles.sectionHeader}> ROOMS & RATES </h1>
            <p className={styles.intro}>
              Here at Royal Crest, we offer a variety of comfortable and stylish
              guest rooms to suit your needs. Whether you are traveling for
              business or leisure, we have the perfect room to make your stay
              enjoyable.
              <br />
              <br />
              Our rooms are designed with your comfort in mind, featuring plush
              beds, high-quality linens, and a range of modern amenities.
              You&#39;ll enjoy free Wi-Fi, a flat-screen TV, a mini-fridge, and
              a private bathroom with complimentary toiletries. Some of our
              rooms also have a balcony or patio, offering stunning views of the
              surrounding area.
            </p>
          </div>
          <RoomAmenities />
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image src={Studio} alt='the studio room' />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Studio Room</h2>
              <div>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <p className={styles.description}>
                Our standard rooms offer comfort and convenience for travelers.
                Each room features a comfortable bed, flat-screen TV,
                mini-fridge, and free Wi-Fi. The private bathroom comes equipped
                with a shower, toilet, and complimentary toiletries. Our
                standard rooms are a great choice for those looking for an
                affordable and comfortable place to stay.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image src={Classic} alt='the classic room' />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Classic Room</h2>
              <div>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <p className={styles.description}>
                Our hotel gym offers a range of fitness equipment and amenities,
                including treadmills, stationary bikes, ellipticals, free
                weights, and weight machines. In addition, we offer
                complimentary fitness classes led by certified instructors, such
                as yoga and Pilates, as well as convenient hours and a clean,
                spacious facility. We aim to make it easy for our guests to stay
                active during their stay with us.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image src={Deluxe} alt='the deluxe room' />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Deluxe Room</h2>
              <div>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <p className={styles.description}>
                Our hotel gym offers a range of fitness equipment and amenities,
                including treadmills, stationary bikes, ellipticals, free
                weights, and weight machines. In addition, we offer
                complimentary fitness classes led by certified instructors, such
                as yoga and Pilates, as well as convenient hours and a clean,
                spacious facility. We aim to make it easy for our guests to stay
                active during their stay with us.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image src={Premium} alt='the premium room' />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Premium Room</h2>
              <div>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <p className={styles.description}>
                Our hotel gym offers a range of fitness equipment and amenities,
                including treadmills, stationary bikes, ellipticals, free
                weights, and weight machines. In addition, we offer
                complimentary fitness classes led by certified instructors, such
                as yoga and Pilates, as well as convenient hours and a clean,
                spacious facility. We aim to make it easy for our guests to stay
                active during their stay with us.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image src={Suite} alt='the suite' />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Diplomatic Suite</h2>
              <div>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <p className={styles.description}>
                Our hotel gym offers a range of fitness equipment and amenities,
                including treadmills, stationary bikes, ellipticals, free
                weights, and weight machines. In addition, we offer
                complimentary fitness classes led by certified instructors, such
                as yoga and Pilates, as well as convenient hours and a clean,
                spacious facility. We aim to make it easy for our guests to stay
                active during their stay with us.
              </p>
            </div>
          </div>
        </Card>
      </section>
      <ContactUs />
    </Fragment>
  );
};

export default RoomsContent;
