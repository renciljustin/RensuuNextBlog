import Container from '../layouts/Container';
import Section from '../layouts/Section';
import BlogPostThumbnail from './BlogPostThumbnail';
import classes from './BlogPosts.module.css';

export default function BlogPosts() {
  return (
    <Section
      title="My Latest Blog"
      description="Allow me to share you some of my latest discoveries"
    >
      <Container>
        <div className={classes.blogPosts}>
          <BlogPostThumbnail />
          <BlogPostThumbnail />
          <BlogPostThumbnail />
          <BlogPostThumbnail />
        </div>
      </Container>
    </Section>
  );
}
