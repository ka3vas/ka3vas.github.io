import imgSrc from '../images/sushi.png';

const dishes = [
  {
    title: 'zestawy sushi',
    subtitle: '',
    description: '',
    set: [
      {
        imgSrc: imgSrc,
        title: 'premium set',
        price: 22000,
        quantity: 65,
        description:
          '3 Fusion roll (24 szt. do wyboru), 8 Nigiri mix, 4 Gunkany mix, Fujiyama z łososiem, Fit Roll z łososiem (6 szt.), Hosomaki z łososiem (6 szt.), Hosomaki z tuńczykiem (6 szt.).',
        featured: true,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'set nigiri',
        price: 4900,
        quantity: 12,
        description: 'Mix nigiri (łosoś, tuńczyk, węgorz, krewetka).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'set sashimi',
        price: 6800,
        quantity: 20,
        description: 'Mix sashimi (łosoś, tuńczyk, węgorz, krewetka).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'pokemon set',
        price: 6800,
        quantity: 17,
        description:
          'Futomaki krewetka (6 szt.), Futomaki surimi (6 szt.), Sake Jaki Roll (5 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'jaki set',
        price: 7800,
        quantity: 24,
        description:
          'Uramaki z pieczonym łososiem (5 szt.), Uramaki z krewetką i opalanym łososiem (5 szt.), Futomaki z pastą z surimi (6 szt.), Nigiri z krewetkami (2 szt.), Hosomaki z pieczonym łosisiem (6 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'set z surowych ryb',
        price: 9100,
        quantity: 30,
        description:
          'Futomaki z łososiem (6 szt.), Futomaki z tuńczykiem (6 szt.), Fujiyama z tatarem z tuńczyka (5 szt.), Uramaki z tataremz tuńczyka (5 szt.), Hosomaki z łososiem (6 szt.), Nigiri z łososiem (2 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'set mix',
        price: 11900,
        quantity: 34,
        description:
          'Uramaki z surimi i łososiem (5 szt.), Futomaki z krewetkami w tempurze (6 szt.), Futomaki z węgorzem w tempurze (6 szt.), Fujiyama z tatarem z tuńczyka (5 szt.), Fit roll z pieczonym łososiem (6 szt.), Nigiri z tuńczykiem (2 szt.), Nigiri z łososiem (2 szt.), Gunkany z tuńczykiem (2 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'yakuza set',
        price: 12300,
        quantity: 40,
        description:
          'Inari Gunkan Łosoś (2 szt.), Nigiri mix (4 szt.), Sake roll z migdałami (5 szt.), Futomaki Łosoś (6 szt.), Futomaki Krewetka (6 szt.), Hosomaki Łosoś (6 szt.), Hosomaki Tuńczyk (6 szt.), Sake spicy tatar (5 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'sumo set xl',
        price: 14900,
        quantity: 44,
        description:
          'Urami z łososiem (5 szt.), Urami z pieczonym łososiem (5 szt.), Futomaki z krewetką w tempurze (6 szt.), Futomaki z surimi (6 szt.), Fujiyama z łososiem i tuńczykiem (10 szt.), Fit roll z krewetką w tempurze (6 szt.), Nigiri z łososia (2 szt.), Nigiri z tuńczyka (2 szt.), Nigiri z krewetkami (2 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        imgSrc: imgSrc,
        title: 'sumo set xxl',
        price: 21000,
        quantity: 60,
        description:
          'Futomaki z tuńczykiem w tempurze (6 szt.), Futomaki z łososiem w tempurze (6 szt.), Uramaki z krewetkami w tempurze (5 szt.), Uramaki z łososiem (5 szt.), Kalifornia z surimi i łososiem (5 szt.), Kalifornia z węgorzem i awokado (5 szt.), Fit roll z łososiem (6 szt.), Hosomaki z ogórkiem (6 szt.), Hosomaki z awokado (6 szt.), Nigiri z tuńczykiem (3 szt.), Nigiri z łososiem (3 szt.), Gunkany z tuńczykiem (2 szt.), Gunkany z łososiem (2 szt.).',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
    ],
  },
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
    title: 'poke',
    subtitle: '',
    description:
      'Pokebowl, czytane jak w słowie "pokemon", to miska z gorącym ryżem i zimną, surową rybą z wyrazistymi przyprawami i warzywami lub owocami. Danie wywodzi się z Hawajów i traktowane jest jako jedna z potraw narodowych.',
    set: [
      {
        title: 'poke z tuńczyka',
        price: 3200,
        quantity: null,
        description:
          'Miska z kawałkami surowego tuńczyka serwowana z ryżem lub quinoa, świeżymi warzywami (fasolka edamame, świeży ogórekm, prażona cebulka, pepperoni, sałatka z glonów, nachos, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'poke z łososia',
        price: 2800,
        quantity: null,
        description:
          'Miska z kawałkami surowego łososia serwowana z ryżem lub quinoa, świerzymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'poke tatar łosoś',
        price: 3000,
        quantity: null,
        description:
          'Miska z tatarem z łososia serwowana z ryżem lub quinoa, świeżymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'poke mix fish',
        price: 3100,
        quantity: null,
        description:
          'Miska z kawałkami surowego tuńczyka i łososia serwowana z ryżem lub quinoa, świerzymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, nachos, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'poke z krewetkami',
        price: 2800,
        quantity: null,
        description:
          'Miska z krewetkami serwowana z ryżem, świeżymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'poke z surimi',
        price: 2500,
        quantity: null,
        description:
          'Miska z firmową werjsą surimi serwiwana z ryżem, świeżymi warzywami (fasola edamame, świeży ogórek, czerwona cebula, pomidory, sałatka z glonów, rzodkiewka, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'wege poke tofu',
        price: 2400,
        quantity: null,
        description:
          'Miska wegetariańska ze smażonym tofu serwowana z ryżem, świeżymi warzywami i owocami (fasolka edamame, świeży ogórek, pomidory, sałata z glonów, awokado) + sos do wyboru.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
    ],
  },
  {
    title: 'fusion roll',
    subtitle: '(zawsze 8 szt.)',
    description: '',
    set: [
      {
        title: 'ebi sake roll',
        price: 3100,
        quantity: 8,
        description:
          'Rolka z krewetką w tempurze w środku, otulona łososiem ugory.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'tataki tuna mexico roll',
        price: 3400,
        quantity: 8,
        description:
          'Rolka z warzywami w tempurze i serkiem kremowym w środku, z tuńczykiem i ostrym sosem.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'kalifornia z krewetkami',
        price: 3000,
        quantity: 8,
        description:
          'Rolka z chrupiącą krewetką panko i warzywami w środku, kawiorem i sosem spicy majo.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'fujiyama roll',
        price: 3300,
        quantity: 8,
        description:
          'Rolka na ciepło, w środku z warzywami i serkiem kremowym, tatarem z łososia i tuńczykiem.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'mandarin roll',
        price: 3800,
        quantity: 8,
        description:
          'Rolka z grillowanym węgorzem i glonami wakame w środku, otulona łososiem i kawiorem.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'green dragon roll',
        price: 3600,
        quantity: 8,
        description:
          'Rolka z grillowanym węgorzem i warzywami w środku oraz awokado na zewnątrz.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'black dragon roll',
        price: 3600,
        quantity: 8,
        description:
          'Rolka z krewetką w tempurze i tatarem surimi w środku, węgorz z awokado na zewnątrz.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'sake roll z migdałami',
        price: 3200,
        quantity: 8,
        description: 'Rolka z łososiem i serkiem kremowym posypana migdałami.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'inari salmon roll',
        price: 3600,
        quantity: 8,
        description:
          'Rolka z łososia w tempurze, glonami wakame i warzywami w środku, otulona łososiem i inari.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'fresh salmon roll',
        price: 3600,
        quantity: 8,
        description:
          'Rolka z łososiem i warzywami w środku, otulona awokado i tatarem z łososia.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
      },
      {
        title: 'rainbow roll',
        price: 3600,
        quantity: 8,
        description:
          'Rolka z pikantnym surimi, kawiorem masago i orórkiem w środku, otulona łososiem, tuńczykiem, awokado i krewetką.',
        featured: false,
        avaiableFor: ['torun', 'swiecie'],
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
];

export default dishes;
