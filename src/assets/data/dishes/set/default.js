import imgSrc from '../../../images/sushi.png';

import setNigiri from '../../../images/dishes/set/nigiri_set.png';
import setSashimi from '../../../images/dishes/set/sashimi_set.png';
import setJaki from '../../../images/dishes/set/jaki_set.png';
import setMix from '../../../images/dishes/set/mix_set.png';
import setYakuza from '../../../images/dishes/set/yakuza_set.png';
import setXl from '../../../images/dishes/set/xl_set.png';
import setXxl from '../../../images/dishes/set/xxl_set.png';
import pokemon from '../../../images/dishes/set/pokemon_set.png';
import setSurowychRyb from '../../../images/dishes/set/set_surowych_ryb.png';

const set = {
  category: 'set',
  title: 'set',
  description: '',
  img: {
    src: '',
    alt: 'alt',
  },
  dishes: [
    {
      imgSrc: imgSrc,
      title: 'premium set',
      price: 24000,
      quantity: 70,
      description:
        '3 Fusion roll (24 szt. do wyboru), 8 Nigiri mix, 4 Gunkany mix, Fujiyama roll, Fit Roll z łososiem (6 szt.), Hosomaki z łososiem (6 szt.), Hosomaki z tuńczykiem (6 szt.).',
      featured: true,
    },
    // {
    //   imgSrc: setSashimi,
    //   title: 'set sashimi',
    //   price: 6800,
    //   quantity: 20,
    //   description: 'Mix sashimi (łosoś, tuńczyk, węgorz, krewetka).',
    //   featured: false,
    // },
    {
      imgSrc: pokemon,
      title: 'pokemon set',
      price: 6800,
      quantity: 17,
      description:
        'Futomaki krewetka (6 szt.), Futomaki surimi (6 szt.), Sake Jaki Roll (5 szt.).',
      featured: false,
    },
    {
      imgSrc: setJaki,
      title: 'jaki set',
      price: 7800,
      quantity: 24,
      description:
        'Uramaki z pieczonym łososiem (5 szt.), Uramaki z krewetką i opalanym łososiem (5 szt.), Futomaki z pastą z surimi (6 szt.), Nigiri z krewetkami (2 szt.), Hosomaki z pieczonym łosisiem (6 szt.).',
      featured: false,
    },
    {
      imgSrc: setSurowychRyb,
      title: 'set z surowych ryb',
      price: 9500,
      quantity: 30,
      description:
        'Futomaki z łososiem (6 szt.), Futomaki z tuńczykiem (6 szt.), Fujiyama z tatarem z tuńczyka (5 szt.), Uramaki z tataremz tuńczyka (5 szt.), Hosomaki z łososiem (6 szt.), Nigiri z łososiem (2 szt.).',
      featured: false,
    },
    {
      imgSrc: setMix,
      title: 'set mix',
      price: 11900,
      quantity: 34,
      description:
        'Uramaki z surimi i łososiem (5 szt.), Futomaki z krewetkami w tempurze (6 szt.), Futomaki z węgorzem w tempurze (6 szt.), Fujiyama z tatarem z tuńczyka (5 szt.), Fit roll z pieczonym łososiem (6 szt.), Nigiri z tuńczykiem (2 szt.), Nigiri z łososiem (2 szt.), Gunkany z tuńczykiem (2 szt.).',
      featured: false,
    },
    {
      imgSrc: setYakuza,
      title: 'yakuza set',
      price: 13000,
      quantity: 40,
      description:
        'Inari Gunkan Łosoś (2 szt.), Nigiri mix (4 szt.), Sake roll z migdałami (5 szt.), Futomaki Łosoś (6 szt.), Futomaki Krewetka (6 szt.), Hosomaki Łosoś (6 szt.), Hosomaki Tuńczyk (6 szt.), Sake spicy tatar (5 szt.).',
      featured: false,
    },
    {
      imgSrc: setXl,
      title: 'sumo set xl',
      price: 14900,
      quantity: 44,
      description:
        'Urami z łososiem (5 szt.), Urami z pieczonym łososiem (5 szt.), Futomaki z krewetką w tempurze (6 szt.), Futomaki z surimi (6 szt.), Fujiyama z łososiem i tuńczykiem (10 szt.), Fit roll z krewetką w tempurze (6 szt.), Nigiri z łososia (2 szt.), Nigiri z tuńczyka (2 szt.), Nigiri z krewetkami (2 szt.).',
      featured: false,
    },
    {
      imgSrc: setXxl,
      title: 'sumo set xxl',
      price: 21000,
      quantity: 60,
      description:
        'Futomaki z tuńczykiem w tempurze (6 szt.), Futomaki z łososiem w tempurze (6 szt.), Uramaki z krewetkami w tempurze (5 szt.), Uramaki z łososiem (5 szt.), Kalifornia z surimi i łososiem (5 szt.), Kalifornia z węgorzem i awokado (5 szt.), Fit roll z łososiem (6 szt.), Hosomaki z ogórkiem (6 szt.), Hosomaki z awokado (6 szt.), Nigiri z tuńczykiem (3 szt.), Nigiri z łososiem (3 szt.), Gunkany z tuńczykiem (2 szt.), Gunkany z łososiem (2 szt.).',
      featured: false,
    },
    {
      imgSrc: setNigiri,
      title: 'set nigiri',
      price: 5400,
      quantity: 12,
      description: 'Mix nigiri (łosoś, tuńczyk, węgorz, krewetka).',
      featured: false,
    },
  ],
};

export default set;
