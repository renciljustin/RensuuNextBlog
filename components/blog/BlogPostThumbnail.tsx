import Image from 'next/image';
import { PostData } from '../../data/models/post-data';
import Pill from '../ui/Pill';
import PillGroup from '../ui/PillGroup';
import classes from './BlogPostThumbnail.module.css';

export default function BlogPostThumbnail({ post }: { post: PostData }) {
  return (
    <div>
      <Image
        src={`/images/blogs/${post.image}`}
        alt={'My profile'}
        height={225}
        width={400}
        className={classes.photo}
      />
      <div className={classes.details}>
        <PillGroup>
          {post.tags.map((tag) => (
            <Pill key={tag} label={'#' + tag} destination={'/'} />
          ))}
        </PillGroup>
        <h3 className={classes.title}>{post.title}</h3>
        <article className={classes.description}>{post.excerpt}</article>
        <footer className={classes.footer}>
          <span className={classes.author}>{post.author}</span>
          <time className={classes.date}>{post.date}</time>
        </footer>
      </div>
    </div>
  );
}
