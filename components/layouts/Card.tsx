import Image from 'next/image';
import classes from './Card.module.css';

export type CardProps = {
  title: string;
  description: string;
  image: {
    height: number;
    width: number;
    src: string;
    alt: string;
    isTall: boolean;
  };
};

export default function Card({ card }: { card: CardProps }) {
  const imageClass = [classes.image];

  if (card.image.isTall) imageClass.push(classes.tall);

  return (
    <article className={classes.card}>
      <Image
        src={card.image.src}
        height={card.image.height}
        width={card.image.width}
        alt={card.image.alt}
        className={imageClass.join(' ')}
      />
      <div className={classes.overlay} unselectable="on">
        <h3 className={classes.title} unselectable="on">
          {card.title}
        </h3>
        <p className={classes.description} unselectable="on">
          {card.description}
        </p>
      </div>
    </article>
  );
}
