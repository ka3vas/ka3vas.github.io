const defaultClassicSushi = [
  {
    title: 'niguri/gunkany/inari',
    quantity: 2,
    dish: [
      {
        title: 'łosoś',
        priceDiffers: true,
        priceMin: 1100,
        priceMax: 1500,
      },
      {
        title: 'tuńczyk',
        priceDiffers: true,
        priceMin: 1400,
        priceMax: 1700,
      },
      {
        title: 'węgorz',
        priceDiffers: true,
        priceMin: 1500,
        priceMax: 1800,
      },
      {
        title: 'krewetka',
        priceDiffers: true,
        priceMin: 1000,
        priceMax: 1400,
      },
    ],
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    title: 'hosomaki',
    quantity: 6,
    dish: [
      {
        title: 'łosoś',
        priceDiffers: false,
        price: 1300,
      },
      {
        title: 'tuńczyk',
        priceDiffers: false,
        price: 1600,
      },
      {
        title: 'węgorz',
        priceDiffers: false,
        price: 1700,
      },
      {
        title: 'krewetka',
        priceDiffers: false,
        price: 1300,
      },
    ],
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    title: 'futomaki',
    quantity: 6,
    dish: [
      {
        title: 'łosoś',
        priceDiffers: false,
        price: 1700,
      },
      {
        title: 'tuńczyk',
        priceDiffers: false,
        price: 2000,
      },
      {
        title: 'węgorz',
        priceDiffers: false,
        price: 2100,
      },
      {
        title: 'krewetka',
        priceDiffers: false,
        price: 1900,
      },
    ],
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
];

export default defaultClassicSushi;
