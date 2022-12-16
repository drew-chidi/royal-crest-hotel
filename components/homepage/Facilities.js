import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../ui/Card";
import Gym from "../../assets/images/gym.svg";
import Pool from "../../assets/images/pool.svg";
import Spa from "../../assets/images/spa.svg";
import Restaurant from "../../assets/images/restaurant.svg";
import Laundry from "../../assets/images/laundry.svg";

import "@splidejs/react-splide/css";
const Facilities = () => {
  return (
    <Card>
      <Splide options={{ rewind: true }} aria-label='facilities slide'>
        <SplideSlide>
          <Image src={Restaurant} alt='restaurant' />
        </SplideSlide>
        <SplideSlide>
          <Image src={Gym} alt='gym' />
        </SplideSlide>
        <SplideSlide>
          <Image src={Pool} alt='pool' />
        </SplideSlide>
        <SplideSlide>
          <Image src={Laundry} alt='dry cleaning' />
        </SplideSlide>
        <SplideSlide>
          <Image src={Spa} alt='spa' />
        </SplideSlide>
      </Splide>
    </Card>
  );
};

export default Facilities;
