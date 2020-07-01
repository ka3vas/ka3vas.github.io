import img from '../../images/swiecie.png';

import workingHours from '../working-hours/default';

import set from '../dishes/set/default';
import poke from '../dishes/poke/default';
import roll from '../dishes/roll/default';
import tempura from '../dishes/tempura/default';
import snap from '../dishes/snap/default';
import classic from '../dishes/classic/default';
import sauce from '../dishes/sauce/default';

const items = [set, poke, roll, tempura, snap, classic, sauce];

const swiecie = {
  id: 2,
  city: 'świecie',
  url: 'swiecie',
  address: [
    {
      street: 'Wojska Polskiego',
      number: '77C',
    },
  ],
  phone: {
    directional: '48',
    number: '799799875',
  },
  email: 'gastroteampl@gmail.com',
  instagram: 'https://www.instagram.com/sushipokego_swiecie/',
  facebook:
    'https://www.facebook.com/Sushipokego-%C5%9Awiecie-103710677660932/',
  logo: {
    img,
    alt: 'opis loga',
  },
  items,
  workingHours,
};

export default swiecie;
