import Image from "next/image";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Card from "../ui/Card";
import Studio from "../../assets/images/studio-room.jpg";
import Classic from "../../assets/images/deluxe-room.jpeg";
import Deluxe from "../../assets/images/deluxe-room-1.jpeg";
import Premium from "../../assets/images/premium-room.jpg";
import Suite from "../../assets/images/deluxe-room-2.jpeg";
import { BsBoxArrowInDown, BsBoxArrowInUp, BsPerson } from "react-icons/bs";
import styles from "./RoomsContent.module.css";
import Hero from "../homepage/Hero";
import RoomAmenities from "./RoomAmenities";
import SectionDivider from "../ui/SectionDivider";

const ContactUs = dynamic(() => import("../contact/ContactUs"));

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
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image
                src={Studio}
                alt='the studio room'
                className={styles.img}
              />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Studio Room</h2>
              <div className={styles.details}>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}> Max. guests: 2 adults</span>
              </div>
              <div className={styles.lodgeTime}>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInDown /> Check in:
                  </span>
                  <span className=''> 2pm;</span>
                </div>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInUp /> Check out:
                  </span>
                  <span className=''> 12noon</span>
                </div>
              </div>
              <p className={styles.description}>
                Our studio room is a cozy and functional space perfect for solo
                travelers or couples. This compact unit features a combined
                living and sleeping area, a private bathroom, and essential
                amenities. Experience comfortable and cost-effective
                accommodation with all the essentials you need for a pleasant
                stay.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image
                src={Classic}
                alt='the classic room'
                className={styles.img}
              />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Classic Room</h2>
              <div className={styles.details}>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <div className={styles.lodgeTime}>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInDown /> Check in:
                  </span>
                  <span className=''> 2pm;</span>
                </div>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInUp /> Check out:
                  </span>
                  <span className=''> 12noon</span>
                </div>
              </div>
              <p className={styles.description}>
                Our classic room is a traditional, comfortable accommodation
                option that is budget-friendly and cozy accommodation for solo
                travelers or couples seeking comfort and convenience. It offers
                a traditional, relaxed atmosphere with basic amenities, making
                it an ideal base for your travels.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image
                src={Deluxe}
                alt='the deluxe room'
                className={styles.img}
              />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Deluxe Room</h2>
              <div className={styles.details}>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <div className={styles.lodgeTime}>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInDown /> Check in:
                  </span>
                  <span className=''> 2pm;</span>
                </div>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInUp /> Check out:
                  </span>
                  <span className=''> 12noon</span>
                </div>
              </div>
              <p className={styles.description}>
                The Royal Crest Deluxe Room offers luxurious comfort and
                amenities, with spacious and elegant accommodations. Features
                include comfortable beds, sitting area, flat-screen TV, Wi-Fi,
                mini-fridge, and private bathroom with premium toiletries. The
                Deluxe Room provides ultimate comfort and style in a larger
                space for families, couples, or those seeking an upscale
                experience.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image
                src={Premium}
                alt='the premium room'
                className={styles.img}
              />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Premium Room</h2>
              <div className={styles.details}>
                <span className={styles.icon}>
                  <BsPerson />
                </span>
                <span className={styles.guest}>Max. guests: 2 adults</span>
              </div>
              <div className={styles.lodgeTime}>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInDown /> Check in:
                  </span>
                  <span className=''> 2pm;</span>
                </div>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInUp /> Check out:
                  </span>
                  <span className=''> 12noon</span>
                </div>
              </div>
              <p className={styles.description}>
                Our premium room offers luxury and comfort with spacious,
                elegantly designed interiors featuring a king-size bed and
                separate seating area. Enjoy extras such as a minibar, fast
                Wi-Fi, flat-screen TV, and coffee/tea maker. Experience a
                memorable stay with our focus on comfort and convenience.
              </p>
            </div>
          </div>
          <div className={styles.itemBox}>
            <div className={styles.imgWrapper}>
              <Image src={Suite} alt='the suite' className={styles.img} />
            </div>
            <div className={styles.contentGroup}>
              <h2 className={styles.title}>Diplomatic Suite</h2>
              <div className={styles.details}>
                <span className={styles.icon}>{<BsPerson />}</span>
                <span className={styles.guest}>
                  Max. guests: 2 adults 2 children
                </span>
              </div>
              <div className={styles.lodgeTime}>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInDown /> Check in:
                  </span>
                  <span className=''> 2pm;</span>
                </div>
                <div className={styles.checkingTime}>
                  <span className={styles.icon}>
                    <BsBoxArrowInUp /> Check out:
                  </span>
                  <span className=''> 12noon</span>
                </div>
              </div>
              <p className={styles.description}>
                Our diplomatic suite offers luxurious and spacious
                accommodations with separate living and bedroom areas, private
                bathroom, elegant decor and high-end furnishings. Ideal for
                business travelers, families, or those seeking a luxurious stay
                experience.
              </p>
            </div>
          </div>
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
