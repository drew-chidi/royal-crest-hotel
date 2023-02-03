import Image from "next/image";
import React from "react";
import coffeeMaker from "../../assets/images/tea-cup-coffee.svg";
import wardrobe from "../../assets/images/wardrobe.svg";
import wifi from "../../assets/images/wifi.svg";
import desk from "../../assets/images/desk.svg";
import aircon from "../../assets/images/air-conditioner-svgrepo-com.svg";
import styles from "./RoomAmenities.module.css";

const RoomAmenities = () => {
  return (
    <article>
      <h2 className={styles.title}>Room Amenities</h2>
      <div className={styles.amenitiesWrapper}>
        <div className={styles.amenities}>
          <div className={styles.imgWrapper}>
            <Image src={aircon} alt='air conditioning unit' />
          </div>
          <h4 className={styles.amenitiesTitle}>AC</h4>
          <p>Air conditioning unit</p>
        </div>
        <div className={styles.amenities}>
          <div className={styles.imgWrapper}>
            <Image src={desk} alt='reading desk and chair' />
          </div>
          <h4>Desk</h4>
          <p>Writing desk and chair</p>
        </div>
        <div className={styles.amenities}>
          <div className={styles.imgWrapper}>
            <Image src={wardrobe} alt='Wardrobe' />
          </div>
          <h4>Wardrobe</h4>
          <p>Closet for organizing and protecting the garments</p>
        </div>
        <div className={styles.amenities}>
          <div className={styles.imgWrapper}>
            <Image src={wifi} alt='coffee maker' />
          </div>
          <h4>Coffee Maker</h4>
          <p>24/7 access to the internet</p>
        </div>
        <div className={styles.amenities}>
          <div className={styles.imgWrapper}>
            <Image src={coffeeMaker} alt='coffee maker' />
          </div>
          <h4>Coffee Maker</h4>
          <p>Coffee and tea-making facility</p>
        </div>
      </div>
    </article>
  );
};

export default RoomAmenities;
