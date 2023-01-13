import Container from '../layouts/Container';
import Section from '../layouts/Section';
import BlogPostThumbnail from './BlogPostThumbnail';
import classes from './BlogPosts.module.css';
import { PostData } from '../../data/models/post-data';

export default function BlogPosts({
  title,
  description,
  blogPosts,
}: {
  title: string;
  description: string;
  blogPosts: PostData[];
}) {
  return (
    <Section title={title} description={description}>
      <Container>
        <div className={classes.blogPosts}>
          {blogPosts.map((post) => (
            <div key={post.slug} className={classes.thumbnail}>
              <BlogPostThumbnail post={post} />
              <div className={classes.divider}></div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
