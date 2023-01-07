import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../ui/Card";
import Gym from "../../assets/images/gym.svg";
import Pool from "../../assets/images/pool.svg";
import Spa from "../../assets/images/spa.svg";
import Restaurant from "../../assets/images/restaurant.svg";
import Laundry from "../../assets/images/laundry.svg";
import { FacilitiesData } from "../../data/facilities-data";
import "@splidejs/react-splide/css";
import styles from "./Facilities.module.css";

import LinkButton from "../ui/LinkButton";
import SectionDivider from "../ui/SectionDivider";
const Facilities = () => {
  return (
    <section id='about' className={styles.sectionContainer}>
      <Card>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Our Facilities</h2>
          <p className={styles.intro}>
            Welcome to our hotel! We are a family-owned and operated business
            that has been serving travelers for over 50 years. Our goal is to
            provide our guests with comfortable accommodations, excellent
            service, and a memorable stay.
          </p>
        </div>
        <Splide
          options={{
            mediaQuery: "min",
            perMove: 1,
            perPage: 1,
            gap: "1rem",
            pagination: false,
            breakpoints: {
              600: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
            },
          }}
          aria-label='facilities slide'
        >
          <SplideSlide>
            <Image
              src={Restaurant}
              alt='restaurant'
              width={500}
              height={500}
              className={styles.img}
            />
          </SplideSlide>
          <SplideSlide>
            <Image src={Gym} alt='gym' width={500} height={500} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Pool} alt='pool' width={500} height={500} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Laundry} alt='dry cleaning' width={500} height={500} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Spa} alt='spa' width={500} height={500} />
          </SplideSlide>
        </Splide>
        <div className={styles.linkButton}>
          <LinkButton title='Learn more' href='facilities' />
        </div>
        <SectionDivider />
      </Card>
    </section>
  );
};

export default Facilities;
