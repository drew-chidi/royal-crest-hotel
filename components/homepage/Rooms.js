import Image from "next/image";
import React from "react";
import Classic from "../../assets/images/deluxe-room-1.jpeg";
import Deluxe from "../../assets/images/deluxe-room-1.jpeg";
import Premium from "../../assets/images/premium-room.jpg";
import Suite from "../../assets/images/deluxe-room.jpeg";
import Studio from "../../assets/images/studio-room.jpg";
import Card from "../ui/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Button from "../ui/Button";
import SectionDivider from "../ui/SectionDivider";
import "@splidejs/react-splide/css";
import styles from "./Rooms.module.css";

const Rooms = () => {
  return (
    <section className={styles.roomContainer}>
      <Card>
        <h2 className={styles.title}>Royal Crest Accommodations</h2>
        <p className={styles.intro}>
          Our beautifully appointed rooms are the perfect retreat after a day of
          exploration or business. Each room features a comfortable bed dressed
          in luxurious linens, a flat screen TV, and a private bathroom stocked
          with plush towels and premium toiletries. Stay connected with
          complimentary WiFi, or relax with a cup of coffee or tea from the
          in-room coffee maker.
        </p>
        <Splide
          options={{
            pagination: false,
            lazyLoad: "sequential",
          }}
          aria-label='facilities slide'
        >
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Studio} alt='studio room' />
              </div>
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Studio Room</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN18,000.00</strong>
                </p>{" "}
                <div className={styles.linkButton}>
                  <Button title='Read more' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Classic} alt='room' />
              </div>
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Classic Room</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN20,000.00</strong>
                </p>
                <div className={styles.linkButton}>
                  <Button title='Read more' href='rooms' />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Deluxe} alt='room' />
              </div>{" "}
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Deluxe Room</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN27,000.00</strong>
                </p>{" "}
                <div className={styles.linkButton}>
                  <Button title='Read more' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Premium} alt='premium room' />
              </div>
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Premium Room</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN30,000.00</strong>
                </p>
                <div className={styles.linkButton}>
                  <Button title='Read more' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Suite} alt='diplomatic suites' />
              </div>{" "}
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Diplomatic Suite</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN60,000.00</strong>
                </p>
                <div className={styles.linkButton}>
                  <Button title='Read more' href='rooms' />
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <SectionDivider />
      </Card>
    </section>
  );
};

export default Rooms;
