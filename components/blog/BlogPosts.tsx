import Container from '../layouts/Container';
import Section from '../layouts/Section';
import BlogPostThumbnail from './BlogPostThumbnail';
import classes from './BlogPosts.module.css';
import { PostData } from '../../data/models/post-data';

export default function BlogPosts({
  blogPosts,
  columns = 4,
}: {
  blogPosts: PostData[];
  columns?: number;
}) {
  return (
    <div
      className={[
        classes.blogPosts,
        columns == 2 ? classes.col2 : classes.col4,
      ].join(' ')}
    >
      {blogPosts.map((post) => (
        <div key={post.slug} className={classes.thumbnail}>
          <BlogPostThumbnail post={post} />
          <div className={classes.divider}></div>
        </div>
      ))}
    </div>
  );
}
