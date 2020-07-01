import img from '../../images/brodnica.png';

import workingHours from '../working-hours/default';

import set from '../dishes/set/default';
import poke from '../dishes/poke/default';
import roll from '../dishes/roll/default';
import tempura from '../dishes/tempura/default';
import snap from '../dishes/snap/default';
import classic from '../dishes/classic/default';
import sauce from '../dishes/sauce/default';

const items = [set, poke, roll, tempura, snap, classic, sauce];

const brodnica = {
  id: 4,
  city: 'Brodnica',
  url: 'brodnica',
  address: [
    {
      street: 'Kamionka',
      number: '11',
    },
  ],
  phone: {
    directional: '48',
    number: '666689244',
  },
  email: 'sushipokegobrodnica@gmail.com',
  instagram: 'https://www.instagram.com/sushipokego_brodnica/',
  facebook: 'https://www.facebook.com/sushipokegobrodnica/',
  logo: {
    img,
    alt: 'alt',
  },
  items,
  workingHours,
};

export default brodnica;
