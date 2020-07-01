import img from '../../images/kwidzyn.png';

import workingHours from '../working-hours/default';

import set from '../dishes/set/default';
import poke from '../dishes/poke/default';
import roll from '../dishes/roll/default';
import tempura from '../dishes/tempura/default';
import snap from '../dishes/snap/default';
import classic from '../dishes/classic/default';
import sauce from '../dishes/sauce/default';

const items = [set, poke, roll, tempura, snap, classic, sauce];

const kwidzynDishes = {
  id: 3,
  city: 'kwidzyn',
  url: 'kwidzyn',
  address: [
    {
      street: 'Braterstwa Narodów',
      number: '40E',
    },
  ],
  phone: {
    directional: '48',
    number: '575753323',
  },
  email: 'gastroteampl@gmail.com',
  instagram: 'https://www.instagram.com/sushipokego_kwidzyn/',
  facebook: 'https://www.facebook.com/Sushipokego_kwidzyn-110008450535199/',
  logo: {
    img,
    alt: 'alt text',
  },
  items,
  workingHours,
};

export default kwidzynDishes;
