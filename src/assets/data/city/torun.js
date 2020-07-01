import img from '../../images/torun.png';

import workingHours from '../working-hours/default';

import set from '../dishes/set/default';
import poke from '../dishes/poke/default';
import roll from '../dishes/roll/default';
import tempura from '../dishes/tempura/default';
import snap from '../dishes/snap/default';
import classic from '../dishes/classic/default';
import sauce from '../dishes/sauce/default';

const items = [set, poke, roll, tempura, snap, classic, sauce];

const torun = {
  id: 1,
  city: 'toruń',
  url: 'torun',
  address: [
    {
      street: 'Jamontta',
      number: '2B',
    },
  ],
  phone: {
    directional: '48',
    number: '512777730',
  },
  email: 'sushipokego@gmail.com',
  instagram: 'https://www.instagram.com/sushipokego_torun/',
  facebook: 'https://www.facebook.com/sushipokego/',
  logo: {
    img,
    alt: 'opis loga',
  },
  items,
  workingHours,
};

export default torun;
