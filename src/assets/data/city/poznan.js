import img from '../../images/torun.png';

import workingHours from '../working-hours/default';

import set from '../dishes/set/default';
import poke from '../dishes/poke/default';
import roll from '../dishes/roll/default';
import tempura from '../dishes/tempura/default';
import snack from '../dishes/snack/default';
import classic from '../dishes/classic/default';
import sauce from '../dishes/sauce/default';

const items = [set, poke, roll, tempura, snack, classic, sauce];

const torun = {
  id: 3,
  city: 'poznań',
  url: 'poznan',
  address: [
    {
      street: 'Wierzbięcice',
      number: '18',
    },
  ],
  phone: {
    directional: '48',
    number: '512 7777 50',
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
