import Image from 'next/image';
import Pill from '../ui/Pill';
import PillGroup from '../ui/PillGroup';
import classes from './BlogPostThumbnail.module.css';

export default function BlogPostThumbnail() {
  return (
    <div>
      <Image
        src={'/images/blogs/top-5-common-mistakes-of-a-software-developer.jpg'}
        alt={'My profile'}
        height={225}
        width={400}
        className={classes.photo}
      />
      <PillGroup>
        <Pill label="#HTML" />
        <Pill label="#CSS" />
        <Pill label="#JS" />
      </PillGroup>
      <div>
        <h3 className={classes.title}>
          Top 5 Common Mistakes of a Software Developer Should Be Aware Of
        </h3>
        <article className={classes.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          officiis tenetur amet perferendis dolorum, dicta molestiae. Est odit
          ab ducimus porro laboriosam eum reiciendis! Nemo dolor molestias nulla
          necessitatibus ratione?
        </article>
        <footer className={classes.footer}>
          <span className={classes.author}>John Doe</span>
          <time className={classes.date}>January 1, 2023</time>
        </footer>
      </div>
    </div>
  );
}
