import imgSrc from '../../../images/dishes/tempura/krewetki_w_tempurze.png';

const tempura = {
  category: 'tempura',
  title: 'tempura',
  description: '',
  img: {
    src: imgSrc,
    alt: 'alt',
  },
  dishes: [
    {
      title: 'krewetki w tempurze',
      price: 3100,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      title: 'łosoś w tempurze',
      price: 2800,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      title: 'warzywa w tempurze',
      price: 1900,
      quantity: null,
      description: '',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
  ],
};

export default tempura;
