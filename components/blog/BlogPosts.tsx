import Container from '../layouts/Container';
import Section from '../layouts/Section';
import BlogPostThumbnail from './BlogPostThumbnail';
import classes from './BlogPosts.module.css';
import { PostData } from '../../data/models/post-data';

export default function BlogPosts({ blogPosts }: { blogPosts: PostData[] }) {
  return (
    <Section
      title="My Latest Blog"
      description="Allow me to share you some of my latest discoveries"
    >
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
