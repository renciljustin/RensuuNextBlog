import Image from 'next/image';
import classes from './BlogPostContentHeader.module.css';

export default function BlogPostContentHeader({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <Image
        src={`/images/posts/${image}`}
        alt={title}
        width={1024}
        height={576}
        className={classes.image}
      />
    </section>
  );
}
