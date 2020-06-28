import defaultSet from '../../set/default';
import defaultPoke from '../../poke/default';
import defaultRoll from '../../roll/deafault';

const torun = {
  id: '1',
  dishes: [
    defaultSet,
    defaultPoke,
    defaultRoll,
    {
      title: 'tempura',
      subtitle: 'sos do wyboru',
      description: '',
      set: [
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
    },
    {
      title: 'przystawiki',
      subtitle: '',
      description: '',
      set: [
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
    },
    {
      title: 'classic sushi',
      subtitle: '',
      description: '',
      set: [
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
      ],
    },
    {
      title: 'dodatki - sosy',
      subtitle: '',
      description: '',
      set: [
        {
          quantity: 1,
          title: 'spicy majo',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
        {
          quantity: 1,
          title: 'kabajaki',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
        {
          quantity: 1,
          title: 'sriracha',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
        {
          quantity: 1,
          title: 'sweet chilli',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
        {
          quantity: 1,
          title: 'sos sojowy',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
        {
          quantity: 1,
          title: 'sos sojowy bezglutenowy',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
        {
          quantity: 1,
          title: 'sos kimchi',
          price: 300,
          featured: false,
          avaiableFor: ['torun', 'swiecie'],
        },
      ],
    },
  ],
};

export default torun;
