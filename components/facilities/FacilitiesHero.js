import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Gym from "../../assets/images/gym.svg";
import Pool from "../../assets/images/pool.svg";
import Spa from "../../assets/images/spa.svg";
import Restaurant from "../../assets/images/restaurant.svg";
import Laundry from "../../assets/images/laundry.svg";
import "@splidejs/react-splide/css";
import styles from "./FacilitiesHero.module.css";

const FacilitiesHero = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <Splide
          options={{
            lazyLoad: true,
            pagination: false,
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
            <Image src={Restaurant} alt='restaurant' className={styles.img} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Gym} alt='gym' className={styles.img} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Pool} alt='pool' className={styles.img} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Laundry} alt='dry cleaning' className={styles.img} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Spa} alt='spa' className={styles.img} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default FacilitiesHero;
