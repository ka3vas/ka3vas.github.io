// LOGO
import swiecie from '../images/swiecie.png';
import torunLogo from '../images/torun.png';
import kwidzyn from '../images/kwidzyn.png';
import brodnica from '../images/brodnica.png';
import chojnice from '../images/chojnice.png';

import workingHours from './working-hours/default';

// DISHES
import torunDishes from './dishes/city/torun/torun';
import swiecieDishes from './dishes/city/swiecie/swiecie';

const restaurants = [
  {
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
    workingHours,
    email: 'sushipokego@gmail.com',
    instagram: 'https://www.instagram.com/sushipokego_torun/',
    facebook: 'https://www.facebook.com/sushipokego/',
    img: torunLogo,
    dishes: torunDishes,
    categoryImage: '',
    categoryDescription: [
      { type: 'set', description: '--- OPIS ---' },
      { type: 'poke', description: '--- OPIS ---' },
    ],
  },
  {
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
    workingHours,
    email: 'gastroteampl@gmail.com',
    instagram: 'https://www.instagram.com/sushipokego_swiecie/',
    facebook:
      'https://www.facebook.com/Sushipokego-%C5%9Awiecie-103710677660932/',
    img: swiecie,
    dishes: swiecieDishes,
    categoryImage: '',
    categoryDescription: [
      { type: 'set', description: '--- OPIS ---' },
      { type: 'poke', description: '--- OPIS ---' },
    ],
  },
  {
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
    workingHours,
    email: 'gastroteampl@gmail.com',
    instagram: 'https://www.instagram.com/sushipokego_kwidzyn/',
    facebook: 'https://www.facebook.com/Sushipokego_kwidzyn-110008450535199/',
    img: kwidzyn,
    dishes: [],
    categoryImage: '',
    categoryDescription: [],
  },
  {
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
    workingHours,
    email: 'sushipokegobrodnica@gmail.com',
    instagram: 'https://www.instagram.com/sushipokego_brodnica/',
    facebook: 'https://www.facebook.com/sushipokegobrodnica/',
    img: brodnica,
    dishes: [],
    categoryImage: '',
    categoryDescription: [],
  },
  {
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
    workingHours,
    email: 'gastroteampl@gmail.com',
    instagram: 'https://www.instagram.com/sushipokego_chojnice/',
    facebook: 'https://www.facebook.com/Sushipokego-Chojnice-109810790707623/',
    img: chojnice,
    dishes: [],
    categoryImage: '',
    categoryDescription: [],
  },
];

export default restaurants;
