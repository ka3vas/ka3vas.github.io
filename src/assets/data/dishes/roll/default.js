import rollEbi from '../../../images/dishes/roll/ebi_sake_roll.png';
import rollTataki from '../../../images/dishes/roll/tataki_tuna_mexiko_roll.png';
import rollKalifornia from '../../../images/dishes/roll/kalifornia_z_krewetkami.png';
import rollFujiyama from '../../../images/dishes/roll/fujiyama_roll.png';
import rollMandarin from '../../../images/dishes/roll/mandarin_roll.png';
import rollGreenDragon from '../../../images/dishes/roll/green_dragon.png';
import rollBlackDragon from '../../../images/dishes/roll/black_dragon.png';
import rollMigdal from '../../../images/dishes/roll/sake_roll_z_migdalami.png';
import rollInari from '../../../images/dishes/roll/inari_salmon_roll.png';
import rollFreshSalmon from '../../../images/dishes/roll/fresh_salmon_roll.png';
import rollRainbow from '../../../images/dishes/roll/rainbow_roll.png';

const defaultRoll = [
  {
    imgSrc: rollEbi,
    category: 'roll',
    title: 'ebi sake roll',
    price: 3100,
    quantity: 8,
    description:
      'Rolka z krewetką w tempurze w środku, otulona łososiem ugory.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollTataki,
    category: 'roll',
    title: 'tataki tuna mexico roll',
    price: 3400,
    quantity: 8,
    description:
      'Rolka z warzywami w tempurze i serkiem kremowym w środku, z tuńczykiem i ostrym sosem.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollKalifornia,
    category: 'roll',
    title: 'kalifornia z krewetkami',
    price: 3000,
    quantity: 8,
    description:
      'Rolka z chrupiącą krewetką panko i warzywami w środku, kawiorem i sosem spicy majo.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollFujiyama,
    category: 'roll',
    title: 'fujiyama roll',
    price: 3300,
    quantity: 8,
    description:
      'Rolka na ciepło, w środku z warzywami i serkiem kremowym, tatarem z łososia i tuńczykiem.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollMandarin,
    category: 'roll',
    title: 'mandarin roll',
    price: 3800,
    quantity: 8,
    description:
      'Rolka z grillowanym węgorzem i glonami wakame w środku, otulona łososiem i kawiorem.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollGreenDragon,
    category: 'roll',
    title: 'green dragon roll',
    price: 3600,
    quantity: 8,
    description:
      'Rolka z grillowanym węgorzem i warzywami w środku oraz awokado na zewnątrz.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollBlackDragon,
    category: 'roll',
    title: 'black dragon roll',
    price: 3600,
    quantity: 8,
    description:
      'Rolka z krewetką w tempurze i tatarem surimi w środku, węgorz z awokado na zewnątrz.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollMigdal,
    category: 'roll',
    title: 'sake roll z migdałami',
    price: 3200,
    quantity: 8,
    description: 'Rolka z łososiem i serkiem kremowym posypana migdałami.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollInari,
    category: 'roll',
    title: 'inari salmon roll',
    price: 3600,
    quantity: 8,
    description:
      'Rolka z łososia w tempurze, glonami wakame i warzywami w środku, otulona łososiem i inari.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollFreshSalmon,
    category: 'roll',
    title: 'fresh salmon roll',
    price: 3600,
    quantity: 8,
    description:
      'Rolka z łososiem i warzywami w środku, otulona awokado i tatarem z łososia.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
  {
    imgSrc: rollRainbow,
    category: 'roll',
    title: 'rainbow roll',
    price: 3600,
    quantity: 8,
    description:
      'Rolka z pikantnym surimi, kawiorem masago i orórkiem w środku, otulona łososiem, tuńczykiem, awokado i krewetką.',
    featured: false,
    avaiableFor: ['torun', 'swiecie'],
  },
];

export default defaultRoll;
