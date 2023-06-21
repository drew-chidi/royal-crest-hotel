import CoffeeMaker from '../assets/images/tea-cup-coffee.svg';
import Wardrobe from '../assets/images/wardrobe.svg';
import Wifi from '../assets/images/wifi.svg';
import Desk from '../assets/images/desk.svg';
import AC from '../assets/images/air-conditioner-svgrepo-com.svg';
import Safe from '../assets/images/safe.svg';
import HairDryer from '../assets/images/hairdryer.svg';
import Mirror from '../assets/images/mirror.svg';
import Studio from '../assets/images/studio-room.jpg';
import Classic from '../assets/images/deluxe-room-1.jpeg';
import Deluxe from '../assets/images/deluxe-room.jpeg';
import Premium from '../assets/images/premium-room.jpg';
import Suite from '../assets/images/deluxe-room-2.jpeg';

export const homepageContents = {};

export const roomContents = {
  amenities: [
    {
      id: '1',
      type: 'AC',
      description: 'Air conditioning unit',
      icon: AC,
    },
    {
      id: '2',
      type: 'Desk',
      description: 'Writing desk and chair',
      icon: Desk,
    },
    {
      id: '3',
      type: 'Wardrobe',
      description: 'Closet for organizing and protecting the garments',
      icon: Wardrobe,
    },
    {
      id: '4',
      type: 'Realiable Internet',
      description: '24/7 access to the internet',
      icon: Wifi,
      alt: 'internet wifi',
    },
    {
      id: '5',
      type: 'Coffee Maker',
      description: 'Coffee and tea-making facility',
      icon: CoffeeMaker,
    },
    {
      id: '6',
      type: 'Mirror',
      description: 'Powered bathroom mirror',
      icon: Mirror,
    },
    {
      id: '7',
      type: 'Hair Dryer',
      description: 'Hair drying appliance',
      icon: HairDryer,
    },
    {
      id: '8',
      type: 'Safe',
      description: 'Store valuables confidently',
      icon: Safe,
    },
  ],
  details: [
    {
      id: '1',
      image: Studio,
      title: 'Studio Room',
      maxGuests: '2 adults',
      checkin: '2pm',
      checkout: '12noon',
      description:
        'Our studio room is a cozy and functional space perfect for solo travelers or couples. This compact unit features a combined living and sleeping area, a private bathroom, and essential amenities. Experience comfortable and cost-effective accommodation with all the essentials you need for a pleasant stay.',
    },
    {
      id: '2',
      image: Classic,
      title: 'Classic Room',
      maxGuests: '2 adults',
      checkin: '2pm',
      checkout: '12noon',
      description:
        'Our classic room is a traditional, comfortable accommodation option that is budget-friendly and cozy accommodation for solo travelers or couples seeking comfort and convenience. It offers a traditional, relaxed atmosphere with basic amenities, making it an ideal base for your travels.',
    },
    {
      id: '3',
      image: Deluxe,
      title: 'Deluxe Room',
      maxGuests: '2 adults',
      checkin: '2pm',
      checkout: '12noon',
      description:
        'The Royal Crest Deluxe Room offers luxurious comfort and amenities, with spacious and elegant accommodations. Features include comfortable beds, sitting area, flat-screen TV, Wi-Fi, mini-fridge, and private bathroom with premium toiletries. The Deluxe Room provides ultimate comfort and style in a larger space for families, couples, or those seeking an upscale experience.',
    },
    {
      id: '4',
      image: Premium,
      title: 'Premium Room',
      maxGuests: '2 adults',
      checkin: '2pm',
      checkout: '12noon',
      description:
        'Our premium room offers luxury and comfort with spacious,  elegantly designed interiors featuring a king-size bed and separate seating area. Enjoy extras such as a minibar, fast Wi-Fi, flat-screen TV, and coffee/tea maker. Experience a memorable stay with our focus on comfort and convenience.',
    },
    {
      id: '5',
      image: Suite,
      title: 'Diplomatic Suites',
      maxGuests: '2 adults & 2 children',
      checkin: '2pm',
      checkout: '12noon',
      description:
        'Our diplomatic suite offers luxurious and spacious accommodations with separate living and bedroom areas, private bathroom, elegant decor and high-end furnishings. Ideal for business travelers, families, or those seeking a luxurious stay experience.',
    },
  ],
};
