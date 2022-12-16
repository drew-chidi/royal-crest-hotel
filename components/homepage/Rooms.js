import Image from "next/image";
import Link from "next/link";
import React from "react";
import Room from "../../assets/images/room-home.svg";
import Card from "../ui/Card";

const Rooms = () => {
  return (
    <Card>
      <h2>Royal Crest Rooms</h2>
      <p>All our room types are including complementary breakfast</p>
      <div>
        <div>
          <Image src={Room} alt='room' />
        </div>
      </div>

      <h3>Luxury redefined</h3>
      <p>
        Our rooms are designed to transport you into an environment made for
        leisure. Take your mind off the day-to-day of home life and find a
        private paradise for yourself.
      </p>
      <button>
        <Link href='/rooms'>EXPLORE</Link>
      </button>
    </Card>
  );
};

export default Rooms;
