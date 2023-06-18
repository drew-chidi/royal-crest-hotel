import CoffeeMaker from '../assets/images/tea-cup-coffee.svg';
import Wardrobe from '../assets/images/wardrobe.svg';
import Wifi from '../assets/images/wifi.svg';
import Desk from '../assets/images/desk.svg';
import AC from '../assets/images/air-conditioner-svgrepo-com.svg';
import Safe from '../assets/images/safe.svg';
import HairDryer from '../assets/images/hairdryer.svg';
import Mirror from '../assets/images/mirror.svg';

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
      description: 'Hair drying appliance',
      icon: Safe,
    },
  ],
};
