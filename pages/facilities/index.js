import React from "react";
// import Image from "next/image";
// import Gym from "../../assets/images/gym.svg";
// import Pool from "../../assets/images/pool.svg";
// import Spa from "../../assets/images/spa.svg";
// import Restaurant from "../../assets/images/restaurant.svg";
// import Laundry from "../../assets/images/laundry.svg";
// import styles from "./Facilities.module.css";
import Facilities from "../../components/facilities/Facilities";

const index = () => {
  return (
    // <section>
    //   <div className={styles.itemBox}>
    //     <div>
    //       <Image src={Gym} alt='the gym' />
    //     </div>
    //     <div>
    //       <h2>The Gym</h2>
    //       <p></p>
    //     </div>
    //   </div>
    //   <div className={styles.itemBoxReverse}>
    //     <div>
    //       <Image src={Pool} alt='pool side bar' />
    //     </div>
    //     <div>
    //       <h2>The Gym</h2>
    //       <p></p>
    //     </div>
    //   </div>
    //   <div className={styles.itemBox}>
    //     <div>
    //       <Image src={Spa} alt='the spa' />
    //     </div>
    //     <div>
    //       <h2>The Gym</h2>
    //       <p></p>
    //     </div>
    //   </div>
    //   <div className={styles.itemBoxReverse}>
    //     <div>
    //       <Image src={Restaurant} alt='restaurant' />
    //     </div>
    //     <div>
    //       <h2>The Gym</h2>
    //       <p></p>
    //     </div>
    //   </div>
    //   <div className={styles.itemBox}>
    //     <div>
    //       <Image src={pool} alt='Swimming Pool' />
    //     </div>
    //     <div>
    //       <h2>The Gym</h2>
    //       <p></p>
    //     </div>
    //   </div>
    //   <div className={styles.itemBoxReverse}>
    //     <div>
    //       <Image src={Laundry} alt='The laundry' />
    //     </div>
    //     <div>
    //       <h2>The Gym</h2>
    //       <p></p>
    //     </div>
    //   </div>
    // </section>
    <div>
      <Facilities />
    </div>
  );
};

export default index;
