import pokeTunczyk from '../../../images/dishes/poke/poke_tunczyk.png';
import pokeLosos from '../../../images/dishes/poke/poke_losos.png';
import pokeTatarLosos from '../../../images/dishes/poke/poke_tatar_losos.png';
import pokeMix from '../../../images/dishes/poke/poke_mix_fish.png';
import pokeKrewetka from '../../../images/dishes/poke/poke_krewetka.png';
// import pokeSurimi from '../../../images/dishes/poke/poke.png';
import pokeWege from '../../../images/dishes/poke/poke_wege_tofu.png';

const poke = {
  category: 'poke',
  title: 'poke',
  description:
    'Pokebowl, czytane jak w słowie "Pokemon", to miska z gorącym ryżem i zimną, surową rybą z wyrazistymi przyprawami i warzywami lub owocami. Danie wywodzi się z Hawajów i traktowane jest jako jedna z potraw narodowych.',
  img: {
    src: '',
    alt: 'alt',
  },
  dishes: [
    {
      imgSrc: pokeTunczyk,
      title: 'poke z tuńczyka',
      price: 3500,
      quantity: null,
      description:
        'Miska z kawałkami surowego tuńczyka serwowana z ryżem, świeżymi warzywami (fasolka edamame, świeży ogórekm, prażona cebulka, pepperoni, sałatka z glonów, nachos, awokado) + sos do wyboru.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: pokeLosos,
      title: 'poke z łososia',
      price: 3100,
      quantity: null,
      description:
        'Miska z kawałkami surowego łososia serwowana z ryżem, świerzymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: pokeTatarLosos,
      title: 'poke tatar łosoś',
      price: 3300,
      quantity: null,
      description:
        'Miska z tatarem z łososia serwowana z ryżem, świeżymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: pokeMix,
      title: 'poke mix fish',
      price: 3400,
      quantity: null,
      description:
        'Miska z kawałkami surowego tuńczyka i łososia serwowana z ryżem, świerzymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, nachos, awokado) + sos do wyboru.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: pokeKrewetka,
      title: 'poke z krewetkami',
      price: 3100,
      quantity: null,
      description:
        'Miska z krewetkami serwowana z ryżem, świeżymi warzywami (fasolka edamame, świeży ogórek, czerwona cebula, pomidory, sałata z glonów, rzodkiewka, awokado) + sos do wyboru.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    // {
    //   imgSrc: pokeSurimi,
    //   title: 'poke z surimi',
    //   price: 2500,
    //   quantity: null,
    //   description:
    //     'Miska z firmową werjsą surimi serwiwana z ryżem, świeżymi warzywami (fasola edamame, świeży ogórek, czerwona cebula, pomidory, sałatka z glonów, rzodkiewka, awokado) + sos do wyboru.',
    //   featured: false,
    //   avaiableFor: ['swiecie'],
    // },
    {
      imgSrc: pokeWege,
      title: 'wege poke tofu',
      price: 2600,
      quantity: null,
      description:
        'Miska wegetariańska ze smażonym tofu serwowana z ryżem, świeżymi warzywami i owocami (fasolka edamame, świeży ogórek, pomidory, sałata z glonów, awokado) + sos do wyboru.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
  ],
};

export default poke;
