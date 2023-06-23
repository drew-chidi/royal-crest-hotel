import Image from 'next/image';
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import Card from '../ui/Card';
import { BsBoxArrowInDown, BsBoxArrowInUp, BsPerson } from 'react-icons/bs';
import styles from './RoomsContent.module.css';
import Hero from '../homepage/Hero';
import RoomAmenities from './RoomAmenities';
import SectionDivider from '../ui/SectionDivider';
import { roomContents } from '../../content';

const ContactUs = dynamic(() => import('../contact/ContactUs'));

const RoomsContent = () => {
  return (
    <Fragment>
      <Hero page='room' />
      <section className={styles.sectionContainer}>
        <Card>
          <div>
            <h1 className={styles.sectionHeader}> ROOMS & RATES </h1>
            <p className={styles.intro}>
              Here at Royal Crest, we offer a variety of comfortable and stylish
              guest rooms to suit your needs. Whether you are traveling for
              business or leisure, we have the perfect room to make your stay
              enjoyable.
              <br />
              <br />
              Our rooms are designed with your comfort in mind, featuring plush
              beds, high-quality linens, and a range of modern amenities.
              You&#39;ll enjoy free Wi-Fi, a flat-screen TV, a mini-fridge, and
              a private bathroom with complimentary toiletries. Some of our
              rooms also have a balcony or patio, offering stunning views of the
              surrounding area.
            </p>
          </div>
          <RoomAmenities />
          <hr className={styles.horizontalLine} />

          {roomContents.details?.map((item) => (
            <div className={styles.itemBox} key={item.id}>
              <div className={styles.imgWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.img}
                />
              </div>
              <div className={styles.contentGroup}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.details}>
                  <span className={styles.icon}>
                    <BsPerson />
                  </span>
                  <span className={styles.guest}>
                    {' '}
                    Max. guests: {item.maxGuests}
                  </span>
                </div>
                <div className={styles.lodgeTime}>
                  <div className={styles.checkingTime}>
                    <span className={styles.icon}>
                      <BsBoxArrowInDown /> Check in:
                    </span>
                    <span className=''> {item.checkin}</span>
                  </div>
                  <div className={styles.checkingTime}>
                    <span className={styles.icon}>
                      <BsBoxArrowInUp /> Check out:
                    </span>
                    <span className=''> {item.checkout}</span>
                  </div>
                </div>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.rate}>
                  Rate: <strong>{item.rate}</strong>
                </p>
              </div>
            </div>
          ))}
        </Card>
      </section>
      <div className={styles.divider}>
        <SectionDivider />
      </div>
      <ContactUs />
    </Fragment>
  );
};

export default RoomsContent;
