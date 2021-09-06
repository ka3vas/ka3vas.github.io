import imgSrc from '../../../images/dishes/snack/salatka_z_glonow.jpg';

const snack = {
  category: 'snack',
  title: 'przekąska',
  description: '',
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
      price: 2900,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      title: 'tatar z tuńczyka',
      price: 3200,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
  ],
};

export default snack;
