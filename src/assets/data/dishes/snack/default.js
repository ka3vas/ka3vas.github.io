import imgSrc from '../../../images/dishes/snack/salatka_z_glonow.png';

const snack = {
  category: 'snack',
  title: 'snack',
  description: '--- OPIS ---',
  img: {
    src: imgSrc,
    alt: 'alt',
  },
  dishes: [
    {
      title: 'sałatka z glonów',
      price: 1300,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      title: 'tatar z łososia',
      price: 2800,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      title: 'tatar z tuńczyka',
      price: 3100,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      title: 'małże nowozelandzkie',
      price: 2600,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['swiecie'],
    },
  ],
};

export default snack;
