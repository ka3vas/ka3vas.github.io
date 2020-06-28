import pokeTunczyk from '../../../images/dishes/poke/poke_tunczyk.png';
import pokeLosos from '../../../images/dishes/poke/poke_losos.png';
import pokeTatarLosos from '../../../images/dishes/poke/poke_tatar_losos.png';
import pokeMix from '../../../images/dishes/poke/poke_mix_fish.png';
import pokeKrewetka from '../../../images/dishes/poke/poke_krewetka.png';
import pokeSurimi from '../../../images/dishes/poke/poke.png';
import pokeWege from '../../../images/dishes/poke/poke_wege_tofu.png';

const defaultPoke = [
  {
    imgSrc: pokeTunczyk,
    category: 'poke',
    title: 'poke z tuńczyka',
    price: 3200,
    quantity: null,
    description:
      'Miska z kawałkami surowego tuńczyka serwowana z ryżem lub quinoa, świeżymi warzywami (fasolka edamame, świeży ogórekm, prażona cebulka, pepperoni, sałatka z glonów, nachos, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: pokeLosos,
    category: 'poke',
    title: 'poke z łososia',
    price: 2800,
    quantity: null,
    description:
      'Miska z kawałkami surowego łososia serwowana z ryżem lub quinoa, świerzymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: pokeTatarLosos,
    category: 'poke',
    title: 'poke tatar łosoś',
    price: 3000,
    quantity: null,
    description:
      'Miska z tatarem z łososia serwowana z ryżem lub quinoa, świeżymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: pokeMix,
    category: 'poke',
    title: 'poke mix fish',
    price: 3100,
    quantity: null,
    description:
      'Miska z kawałkami surowego tuńczyka i łososia serwowana z ryżem lub quinoa, świerzymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, nachos, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: pokeKrewetka,
    category: 'poke',
    title: 'poke z krewetkami',
    price: 2800,
    quantity: null,
    description:
      'Miska z krewetkami serwowana z ryżem, świeżymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: pokeSurimi,
    category: 'poke',
    title: 'poke z surimi',
    price: 2500,
    quantity: null,
    description:
      'Miska z firmową werjsą surimi serwiwana z ryżem, świeżymi warzywami (fasola edamame, świeży ogórek, czerwona cebula, pomidory, sałatka z glonów, rzodkiewka, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: pokeWege,
    category: 'poke',
    title: 'wege poke tofu',
    price: 2400,
    quantity: null,
    description:
      'Miska wegetariańska ze smażonym tofu serwowana z ryżem, świeżymi warzywami i owocami (fasolka edamame, świeży ogórek, pomidory, sałata z glonów, awokado) + sos do wyboru.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
];

export default defaultPoke;
