import Image from "next/image";
import Link from "next/link";
import React from "react";
import Room from "../../assets/images/room-home.svg";
import Card from "../ui/Card";
import LinkButton from "../ui/LinkButton";
import styles from "./Rooms.module.css";

const Rooms = () => {
  return (
    <section className={styles.roomContainer}>
      <Card>
        <h2 className={styles.title}>Royal Crest Rooms</h2>
        <p className={styles.intro}>
          Our beautifully appointed rooms are the perfect retreat after a day of
          exploration or business. Each room features a comfortable bed dressed
          in luxurious linens, a flat screen TV, and a private bathroom stocked
          with plush towels and premium toiletries. Stay connected with
          complimentary WiFi, or relax with a cup of coffee or tea from the
          in-room coffee maker.{" "}
        </p>
        <div className={styles.imgContainer}>
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
        </div>
        <div className={styles.linkButton}>
          <LinkButton title='EXPLORE' href='rooms' />
        </div>
      </Card>
    </section>
  );
};

export default Rooms;
