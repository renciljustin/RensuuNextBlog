import Card, { CardProps } from '../layouts/Card';
import classes from './MyLife.module.css';

export default function MyLife() {
  const imgRootPath = '/images/';
  const cardsCol1: CardProps[] = [
    {
      title: 'Jogging',
      description:
        'My first routine to start my day is by doing a 30 minutes jogging session everyday starting 5:30 AM.',
      image: {
        src: imgRootPath + 'me-jogging.jpg',
        height: 768,
        width: 480,
        alt: 'A photo of me doing jogging in front of the municipal.',
        isTall: true,
      },
    },
    {
      title: 'Clean and Simple',
      description: `I like things to be clean and simple as much as possible that's why I'm a great fan of Nordic theme home setup.`,
      image: {
        src: imgRootPath + 'desktop.jpg',
        height: 360,
        width: 480,
        alt: 'A photo of my nordic theme desktop setup.',
        isTall: false,
      },
    },

    {
      title: 'Mechanical Keyboards',
      description: `The pressing sound of premium mechanical keyboard is one of the major reason why I'm productive in work of all the time.`,
      image: {
        src: imgRootPath + 'mechanical-keyboard.jpg',
        height: 360,
        width: 480,
        alt: 'A photo of my first customized mechanical keyboard.',
        isTall: false,
      },
    },
  ];
  const cardsCol2: CardProps[] = [
    {
      title: 'Baron',
      description: `This is Baron. I met her in a pet shop near my place. She is a cute, sweet and gentle little bunny.`,
      image: {
        src: imgRootPath + 'baron.jpg',
        height: 360,
        width: 480,
        alt: 'A photo of my bet bunny sitting besides the grass.',
        isTall: false,
      },
    },
    {
      title: 'Anime Figures',
      description: `I love to collect figures and nendoroids from my favorite anime series and computer games.`,
      image: {
        src: imgRootPath + 'anime-figure.jpg',
        height: 768,
        width: 480,
        alt: 'A photo of one of my Anime figure collection named Majin Buu from Dragon Ball Z series.',
        isTall: true,
      },
    },
    {
      title: 'Jessie and James',
      description: `Meet my bestfriends, Jessie and James. They are so lively and loves to hangout together.`,
      image: {
        src: imgRootPath + 'jessie-and-james.jpg',
        height: 360,
        width: 480,
        alt: 'A photo of my two pet dogs running on the middle of a country road.',
        isTall: false,
      },
    },
  ];
  const cardsCol3: CardProps[] = [
    {
      title: 'Riku',
      description: `A dirty stray cat approached me while I was on my way going home. She was so clingy and circling around my feet while brushing her body. I can't resist her cuteness and I decided to adopt her and named her Riku.`,
      image: {
        src: imgRootPath + 'riku.jpg',
        height: 768,
        width: 480,
        alt: 'A photo of my pet cat named Riku.',
        isTall: true,
      },
    },

    {
      title: 'Artisan Keycaps',
      description: `I collect Mechanical Keyboards as part of my hobby. I got more enthusiastic and started my Artisan Keycaps collection too.`,
      image: {
        src: imgRootPath + 'artisan-keycaps.jpg',
        height: 360,
        width: 480,
        alt: 'A photo of one of my first artisan keycaps works.',
        isTall: false,
      },
    },
    {
      title: 'Watching Anime',
      description: `I love watching Anime since I was I kid. As an adult, it's a great relief watching a good Anime series after a long tiring day.`,
      image: {
        src: imgRootPath + 'anime.jpg',
        height: 360,
        width: 480,
        alt: 'A photo of random anime series.',
        isTall: false,
      },
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        {cardsCol1.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
      <div className={classes.flex}>
        {cardsCol2.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
      <div className={classes.flex}>
        {cardsCol3.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}
