import React from "react";
import Image from "next/image";
import { CgScrollV } from "react-icons/cg";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Gym from "../../assets/images/gym.svg";
import Pool from "../../assets/images/pool.svg";
import Spa from "../../assets/images/spa.svg";
import Restaurant from "../../assets/images/restaurant.svg";
import Laundry from "../../assets/images/laundry.svg";
import styles from "./Hero.module.css";

const Hero = ({ page }) => {
  let heroContainer;
  if (page === "room") {
    heroContainer = `${styles.heroContainer} ${styles.bgImageRoom}`;
  } else if (page === "facilities") {
    heroContainer = `${styles.heroContainer} ${styles.bgImageFacilities}`;
  } else {
    heroContainer = styles.heroContainer;
  }

  return (
    <div className={heroContainer}>
      {page === "facilities" && (
        <Splide
          options={{
            pagination: false,
            lazyLoad: "sequential",
            autoplay: true,
            cover: true,
            heightRatio: 0.6,
            mediaQuery: "min",
            breakpoints: {
              600: {
                heightRatio: 0.5,
              },
            },
            speed: 0,
            type: "loop",
          }}
          aria-label='facilities slide'
        >
          <SplideSlide>
            <Image
              src={Restaurant}
              alt='restaurant'
              className={styles.img}
              data-splide-lazy={Restaurant}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Gym}
              alt='gym'
              className={styles.img}
              data-splide-lazy={Gym}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Pool}
              alt='pool'
              className={styles.img}
              data-splide-lazy={Pool}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Laundry}
              alt='dry cleaning'
              className={styles.img}
              data-splide-lazy={Laundry}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Spa}
              alt='spa'
              className={styles.img}
              data-splide-lazy={Spa}
            />
          </SplideSlide>
        </Splide>
      )}
      <Card>
        <div className={styles.welcomeBox}>
          <p className={styles.welcomep1}>WELCOME TO</p>
          <div className={styles.welcomeHeading}>ROYAL CREST</div>
          <p className={styles.welcomep2}>HOTELS</p>
          <p className={styles.welcomep3}>
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
            <br />
            Enjoy luxury redefined at the most affordable rates
          </p>
          <Button title='Book now' href='#contacts' />
          <div className={styles.scrollWrapper}>
            <p className={styles.scroll}>Scroll</p>
            <CgScrollV className={styles.icon} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
