import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../ui/Card";
import styles from "./Testimonials.module.css";
import SectionDivider from "../ui/SectionDivider";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <Card>
        {/* <div className={styles.contentWrapper}> */}
        <div>
          <h2 className={styles.sectionTitle}>Testimonials</h2>
          <Splide
            options={{ rewind: true, pagination: false }}
            aria-label='facilities slide'
          >
            <SplideSlide>
              <p
                className={styles.statement}
              >{`"Calm, Serene, Retro – What a way to relax and enjoy"`}</p>
              <p className={styles.author}> Mr. and Mrs. Njoku, Lagos</p>{" "}
            </SplideSlide>
            <SplideSlide>
              <p
                className={styles.statement}
              >{`"Calm, Serene, Retro – What a way to relax and enjoy"`}</p>
              <p className={styles.author}> Mr. and Mrs. Njoku, Lagos</p>{" "}
            </SplideSlide>
            <SplideSlide>
              <p
                className={styles.statement}
              >{`"Calm, Serene, Retro – What a way to relax and enjoy"`}</p>
              <p className={styles.author}> Mr. and Mrs. Njoku, Lagos</p>{" "}
            </SplideSlide>
            <SplideSlide>
              <p
                className={styles.statement}
              >{`"Calm, Serene, Retro – What a way to relax and enjoy"`}</p>
              <p className={styles.author}> Mr. and Mrs. Njoku, Lagos</p>{" "}
            </SplideSlide>
            <SplideSlide>
              <p
                className={styles.statement}
              >{`"Calm, Serene, Retro – What a way to relax and enjoy"`}</p>
              <p className={styles.author}> Mr. and Mrs. Njoku, Lagos</p>{" "}
            </SplideSlide>
          </Splide>
        </div>
        <SectionDivider />
      </Card>
    </section>
  );
};

export default Testimonials;
