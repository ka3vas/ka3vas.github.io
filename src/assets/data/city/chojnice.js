import img from '../../images/chojnice.png';

import workingHours from '../working-hours/default';

import set from '../dishes/set/default';
import poke from '../dishes/poke/default';
import roll from '../dishes/roll/default';
import tempura from '../dishes/tempura/default';
import snack from '../dishes/snack/default';
import classic from '../dishes/classic/default';
import sauce from '../dishes/sauce/default';

const items = [set, poke, roll, tempura, snack, classic, sauce];

const chojniceDishes = {
  id: 5,
  city: 'Chojnice',
  url: 'chojnice',
  address: [
    {
      street: 'Bayeux',
      number: '8',
    },
  ],
  phone: {
    directional: '48',
    number: '575757626',
  },
  email: 'gastroteampl@gmail.com',
  instagram: 'https://www.instagram.com/sushipokego_chojnice/',
  facebook: 'https://www.facebook.com/Sushipokego-Chojnice-109810790707623/',
  logo: {
    img,
    alt: 'alt',
  },
  items,
  workingHours,
};

export default chojniceDishes;
