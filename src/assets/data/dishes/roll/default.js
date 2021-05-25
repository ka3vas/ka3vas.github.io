import rollEbi from '../../../images/dishes/roll/ebi_sake_roll.jpg';
import rollTataki from '../../../images/dishes/roll/tataki_tuna_mexiko_roll.jpg';
import rollKalifornia from '../../../images/dishes/roll/kalifornia_z_krewetkami.jpg';
import rollFujiyama from '../../../images/dishes/roll/fujiyama_roll.jpg';
import rollMandarin from '../../../images/dishes/roll/mandarin_roll.jpg';
import rollGreenDragon from '../../../images/dishes/roll/green_dragon.jpg';
import rollBlackDragon from '../../../images/dishes/roll/black_dragon.jpg';
import rollMigdal from '../../../images/dishes/roll/sake_roll_z_migdalami.jpg';
import rollInari from '../../../images/dishes/roll/inari_salmon_roll.jpg';
import rollFreshSalmon from '../../../images/dishes/roll/fresh_salmon_roll.jpg';
import rollRainbow from '../../../images/dishes/roll/rainbow_roll.jpg';
import rollCrab from '../../../images/dishes/roll/krab_soft_shell_roll.jpg';
import rollSakeJaki from '../../../images/dishes/roll/sake_jaki_roll.jpg';
import rollBbq from '../../../images/dishes/roll/bbq_grenade_roll.jpg';
import spiceSalmonRoll from '../../../images/dishes/roll/spice_salmon_roll.jpg';
import sweetTempuraRoll from '../../../images/dishes/roll/sweet_tempura_roll.jpg';
import unagiTempuraRoll from '../../../images/dishes/roll/unagi_tempura_roll.jpg';

const roll = {
  category: 'roll',
  title: 'roll',
  description: '',
  img: {
    src: '',
    alt: 'alt',
  },
  dishes: [
    {
      imgSrc: rollEbi,
      title: 'ebi sake roll',
      price: {
        five: 2600,
        eight: 3500,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z krewetką w tempurze w środku, otulona łososiem ugory.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollTataki,
      title: 'tataki tuna mexico roll',
      price: {
        five: 2700,
        eight: 3700,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z warzywami w tempurze i serkiem kremowym w środku, z tuńczykiem i ostrym sosem.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollKalifornia,
      title: 'kalifornia z krewetkami',
      price: {
        five: 2600,
        eight: 3500,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z chrupiącą krewetką panko i warzywami w środku, kawiorem i sosem spicy majo.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollFujiyama,
      title: 'fujiyama roll',
      price: {
        five: 2800,
        eight: 3800,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka na ciepło, w środku z warzywami i serkiem kremowym, tatarem z łososia i tuńczykiem.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollBbq,
      title: 'bbq grenade roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z krewetką, serkiem, kawiorem w środku, tuńczykiem, BBQ, grenade na zewnątrz.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: spiceSalmonRoll,
      title: 'spice salmon roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka w płatkach migdałów z łososiem, krewetką, serkiem, warzywami w środku, tatarem z łososia i sosem mango na zewnątrz.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: sweetTempuraRoll,
      title: 'sweet tempura roll',
      price: {
        five: 2900,
        eight: 4200,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka w tempurze z łososiem, warzywami, krewetkami i serkiem.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: unagiTempuraRoll,
      title: 'unagi tempura roll',
      price: {
        five: 2900,
        eight: 4200,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z awokado, kawiorem, tempurą w środku, węgorzem i sosem kabajaki na zewnątrz.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollMandarin,
      title: 'mango shrimp roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z krewetką, serkiem, mango w środku, łososiem, sosem mango, kawiorem na zewnątrz.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollGreenDragon,
      title: 'green dragon roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z grillowanym węgorzem i warzywami w środku oraz awokado na zewnątrz.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollBlackDragon,
      title: 'black dragon roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z krewetką w tempurze i tatarem surimi w środku, węgorz z awokado na zewnątrz.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollMigdal,
      title: 'sake roll z migdałami',
      price: {
        five: 2600,
        eight: 3500,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description: 'Rolka z łososiem i serkiem kremowym posypana migdałami.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollInari,
      title: 'inari salmon roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z łososia w tempurze, glonami wakame i warzywami w środku, otulona łososiem i inari.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollFreshSalmon,
      title: 'fresh salmon roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z łososiem i warzywami w środku, otulona awokado i tatarem z łososia.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollRainbow,
      title: 'rainbow roll',
      price: {
        five: 2900,
        eight: 3900,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description:
        'Rolka z pikantnym surimi, kawiorem masago i ogórkiem w środku, otulona łososiem, tuńczykiem, awokado i krewetką.',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollSakeJaki,
      title: 'sake jaki roll',
      price: {
        five: 2600,
        eight: 3600,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description: 'Rolka z opalonym łososiem, serkiem kremowym i warzywami',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
    {
      imgSrc: rollCrab,
      title: 'krab soft shell roll',
      price: {
        five: 2900,
        eight: 4000,
      },
      quantity: {
        five: 5,
        eight: 8,
      },
      description: 'Rolka na ciepło, w środku z warzywami i krabem',
      featured: false,
      avaiableFor: ['torun', 'swiecie'],
    },
  ],
};

export default roll;
