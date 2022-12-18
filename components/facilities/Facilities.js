import React from "react";
import Image from "next/image";
import Gym from "../../assets/images/gym.svg";
import Pool from "../../assets/images/pool.svg";
import Spa from "../../assets/images/spa.svg";
import Restaurant from "../../assets/images/restaurant.svg";
import Laundry from "../../assets/images/laundry.svg";
import styles from "./Facilities.module.css";
import Card from "../ui/Card";

const index = () => {
  return (
    <section>
      <Card>
        <div className={styles.itemBox}>
          <div className={styles.imgWrapper}>
            <Image src={Gym} alt='the gym' />
          </div>
          <div className={styles.contentGroup}>
            <h2 className={styles.title}>The Gym</h2>
            <p className={styles.description}>
              Our hotel gym offers a range of fitness equipment and amenities,
              including treadmills, stationary bikes, ellipticals, free weights,
              and weight machines. In addition, we offer complimentary fitness
              classes led by certified instructors, such as yoga and Pilates, as
              well as convenient hours and a clean, spacious facility. We aim to
              make it easy for our guests to stay active during their stay with
              us.
            </p>
          </div>
        </div>
        <div className={styles.itemBoxReverse}>
          <div className={styles.imgWrapper}>
            <Image src={Pool} alt='pool side bar' />
          </div>
          <div className={styles.contentGroup}>
            <h2 className={styles.title}>Pool side bar</h2>
            <p className={styles.description}>
              Our poolside bar is the perfect spot to relax and unwind. with a
              refreshing drink. We offer a range of cocktails, beers, wines, and
              non-alcoholic beverages to suit your taste. You can sit back and
              enjoy the sun while taking in the stunning view of the pool and
              surrounding area. We hope to see you at the poolside bar during
              your stay with us.
            </p>
          </div>
        </div>
        <div className={styles.itemBox}>
          <div className={styles.imgWrapper}>
            <Image src={Spa} alt='the spa' />
          </div>
          <div className={styles.contentGroup}>
            <h2 className={styles.title}>The Spa</h2>
            <p className={styles.description}>
              Our hotel spa is the perfect place to relax and rejuvenate after a
              long day of travel or sightseeing. We offer a range of luxurious
              spa treatments, including massages, facials, manicures, and
              pedicures, all designed to help you unwind and feel your best. Our
              skilled therapists use only the highest quality products to pamper
              and revitalize your skin, leaving you feeling refreshed and
              rejuvenated. In addition to our spa treatments, we also offer a
              sauna and steam room to help you relax and unwind. So come and
              visit us at the hotel spa and allow us to help you relax and
              unwind during your stay.
            </p>
          </div>
        </div>
        <div className={styles.itemBoxReverse}>
          <div className={styles.imgWrapper}>
            <Image src={Restaurant} alt='restaurant' />
          </div>
          <div className={styles.contentGroup}>
            <h2 className={styles.title}>Restaurant</h2>
            <p className={styles.description}>
              Our hotel restaurant is the perfect place to dine during your stay
              with us. We offer a variety of delicious dishes made with fresh,
              locally sourced ingredients. Whether you&#39;re in the mood for a
              hearty breakfast, a light lunch, or a sophisticated dinner, our
              talented chefs have something to satisfy every appetite. Our
              restaurant also features a full bar with a range of beers, wines,
              and cocktails to complement your meal. Plus, with indoor and
              outdoor seating options, you can choose the ambiance that best
              suits your mood. We look forward to welcoming you to our
              restaurant and providing you with a memorable dining experience.
            </p>
          </div>
        </div>
        <div className={styles.itemBox}>
          <div className={styles.imgWrapper}>
            <Image src={Pool} alt='Swimming Pool' />
          </div>
          <div className={styles.contentGroup}>
            <h2 className={styles.title}>Swimming Pool</h2>
            <p className={styles.description}>
              {`Our hotel swimming pool is a great place to relax, exercise, and cool off during your stay. With a large, heated pool and plenty of comfortable seating, you can enjoy a refreshing swim or just soak up the sun. The pool area is surrounded by lush greenery and features a poolside bar, so you can grab a drink and snack while you relax. Our pool is open daily from early morning until late evening, so you can fit in a swim or sunbathe at a time that's convenient for you. Whether you're looking to get in a workout, relax with friends and family, or just cool off on a hot day, our swimming pool is the perfect spot.`}
            </p>
          </div>
        </div>
        <div className={styles.itemBoxReverse}>
          <div className={styles.imgWrapper}>
            <Image src={Laundry} alt='The laundry' />
          </div>
          <div className={styles.contentGroup}>
            <h2 className={styles.title}>Laundry</h2>
            <p className={styles.description}>
              {`Our hotel offers a convenient and efficient laundry facility for our guests. The laundry room is equipped with top-of-the-line washing machines and dryers, as well as ironing boards and irons for your use. We offer a variety of detergents and fabric softeners for purchase, and our friendly staff is happy to assist with any questions you may have. Our goal is to make it easy for you to keep your clothes clean and fresh during your stay with us. Whether you're in need of a quick wash or want to freshen up your entire wardrobe, our laundry facility has you covered.`}
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default index;
