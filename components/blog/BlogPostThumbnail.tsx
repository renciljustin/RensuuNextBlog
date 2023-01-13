import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '../../data/models/post-data';
import Pill from '../ui/Pill';
import PillGroup from '../ui/PillGroup';
import classes from './BlogPostThumbnail.module.css';

export default function BlogPostThumbnail({ post }: { post: PostData }) {
  return (
    <div className={classes.container}>
      <Link href={`/blog-posts/${post.slug}`}>
        <Image
          src={`/images/blogs/${post.image}`}
          alt={'My profile'}
          height={225}
          width={400}
          className={classes.photo}
        />
      </Link>
      <div className={classes.details}>
        <PillGroup>
          {post.tags.map((tag) => (
            <Pill
              key={tag}
              label={'#' + tag}
              destination={'/blog-posts/categories/' + tag}
            />
          ))}
        </PillGroup>
        <Link href={`/blog-posts/${post.slug}`} className={classes.link}>
          <h3 className={classes.title}>{post.title}</h3>
        </Link>
        <article className={classes.description}>{post.excerpt}</article>
        <footer className={classes.footer}>
          <span className={classes.author}>{post.author}</span>
          <time className={classes.date}>{post.date}</time>
        </footer>
      </div>
    </div>
  );
}
