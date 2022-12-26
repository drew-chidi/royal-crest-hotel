import React from "react";
import Image from "next/image";

const OurLocations = () => {
  return (
    <section>
      <h2>Our Locations</h2>
      <div className={styles.itemBox}>
        <div className={styles.imgWrapper}>
          <Image src={Standard} alt='the standard room' />
        </div>
        <div className={styles.contentGroup}>
          <h2 className={styles.title}>Standard Room</h2>
          {/* <div>
              <span className={styles.icon}>
                <BsPerson />
              </span>
              <span className={styles.guest}>Max. guests: 2 adults</span>
            </div> */}
          <p className={styles.description}>
            Our standard rooms offer comfort and convenience for travelers. Each
            room features a comfortable bed, flat-screen TV, mini-fridge, and
            free Wi-Fi. The private bathroom comes equipped with a shower,
            toilet, and complimentary toiletries. Our standard rooms are a great
            choice for those looking for an affordable and comfortable place to
            stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurLocations;
