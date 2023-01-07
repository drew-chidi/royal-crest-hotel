import Image from "next/image";
import Link from "next/link";
import React from "react";
import Room from "../../assets/images/room-home.svg";
import Standard from "../../assets/images/hotel-standard-room.jpg";
import Card from "../ui/Card";
import LinkButton from "../ui/LinkButton";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Button from "../ui/Button";
import "@splidejs/react-splide/css";
import styles from "./Rooms.module.css";
import SectionDivider from "../ui/SectionDivider";

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
          in-room coffee maker.{" "}
        </p>
        {/* <div className={styles.imgContainer}>
          <div className={styles.imgWrapper}>
            <Image src={Room} alt='room' />
            <div className={styles.roomDetails}>
              <p className={styles.roomType}>Standard Room</p>
              <p className={styles.price}>NGN 30,000/Night</p>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={Room} alt='room' />
            <p className={styles.roomDetails}>NGN 30,000/Night</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={Room} alt='room' />
            <p className={styles.roomDetails}>NGN 30,000/Night</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={Room} alt='room' />
            <p className={styles.roomDetails}>NGN 30,000/Night</p>
          </div>
        </div> */}
        <Splide
          options={{
            pagination: false,
            // autoplay: true,
            // heightRatio: 0.6,
            // mediaQuery: "min",
            // breakpoints: {
            //   600: {
            //     heightRatio: 0.5,
            //   },
            // },
          }}
          aria-label='facilities slide'
        >
          {/* <div class='splide__arrows '>
            <button class='splide__arrow splide__arrow--prev '>Prev</button>
            <button class='splide__arrow splide__arrow--next'>Next</button>
          </div> */}
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Room} alt='room' />
              </div>{" "}
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Standard Room</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN30,000.00</strong>
                </p>{" "}
                <div className={styles.linkButton}>
                  <LinkButton title='READ MORE' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Standard} alt='room' />
              </div>{" "}
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Superior Room</h3>
                <p className={styles.roomDescription}>
                  Our standard hotel room is a comfortable and affordable option
                  for travelers. It features a cozy bed, a desk, and a private
                  bathroom. Amenities include access to high-speed internet,
                  cable TV, and a phone. Our standard room is the perfect choice
                  for a relaxing and enjoyable stay.
                </p>
                <p className={styles.price}>
                  Rates from <strong>NGN30,000.00</strong>
                </p>{" "}
                <div className={styles.linkButton}>
                  <LinkButton title='READ MORE' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Room} alt='room' />
              </div>{" "}
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
                  Rates from <strong>NGN30,000.00</strong>
                </p>{" "}
                <div className={styles.linkButton}>
                  <LinkButton title='READ MORE' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Standard} alt='room' />
              </div>
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Executive Room</h3>
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
                  <LinkButton title='READ MORE' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slideWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={Room} alt='room' />
              </div>{" "}
              <div className={styles.roomDetails}>
                <h3 className={styles.roomType}>Presidential Suites</h3>
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
                  <LinkButton title='READ MORE' href='rooms' />
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
        </Splide>
        <SectionDivider />
      </Card>
    </section>
  );
};

export default Rooms;
