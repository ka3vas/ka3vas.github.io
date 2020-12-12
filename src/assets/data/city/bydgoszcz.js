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

const bydgoszcz = {
  id: 2,
  city: 'bydgoszcz',
  url: 'bydgoszcz',
  address: [
    {
      street: 'Józefa Twardzickiego',
      number: '56',
    },
  ],
  phone: {
    directional: '48',
    number: '791101112',
  },
  email: 'sushipokego@gmail.com',
  instagram: 'https://www.instagram.com/sushipokego_torun/',
  facebook: '',
  logo: {
    img,
    alt: 'opis loga',
  },
  items,
  workingHours,
};

export default bydgoszcz;
