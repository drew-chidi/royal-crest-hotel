import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from '../ui/Card';
import Board from '../../assets/images/board-room.jpeg';
import Reception from '../../assets/images/reception-area.jpeg';
import Room from '../../assets/images/deluxe-room.jpeg';
import '@splidejs/react-splide/css';
import styles from './Facilities.module.css';
import SectionDivider from '../ui/SectionDivider';
import Button from '../ui/Button';

const Facilities = () => {
  return (
    <section id='about' className={styles.sectionContainer}>
      <Card>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Our Facilities</h2>
          <p className={styles.intro}>
            Our hotel offers a wide range of options to suit every need, from
            luxurious guest rooms to on-site dining and recreational facilities.
            Whether you are traveling for business or leisure, we are dedicated
            to providing you with a memorable and enjoyable experience. Browse
            through our facilities and discover all that our hotel has to offer.
            We look forward to hosting you soon!
          </p>
        </div>
        <Splide
          options={{
            mediaQuery: 'min',
            perMove: 1,
            perPage: 1,
            gap: '1rem',
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
              src={Board}
              alt='board room'
              width={500}
              height={500}
              className={styles.img}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Reception}
              alt='reception area'
              width={500}
              height={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image src={Room} alt='room' width={500} height={500} />
          </SplideSlide>
          <SectionDivider />
        </Splide>
      </Card>
    </section>
  );
};

export default Facilities;
