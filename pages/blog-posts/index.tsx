import { GetStaticProps } from 'next';
import BlogPosts from '../../components/blog/BlogPosts';
import Container from '../../components/layouts/Container';
import QuickLinksPanel from '../../components/layouts/QuickLinksPanel';
import Section from '../../components/layouts/Section';
import QuickLinks from '../../components/widgets/QuickLinks';
import { PostData } from '../../data/models/post-data';
import { getAllPosts } from '../../lib/utils/posts-util';
import classes from './BlogPostsPage.module.css';

export default function BlogPostsPage({ posts }: { posts: PostData[] }) {
  return (
    <Section
      title="My Blogs"
      description="Discover New Knowledge To Hone Your Skills As A Developer"
    >
      <Container>
        <div className={classes.container}>
          <div>
            <BlogPosts blogPosts={posts} columns={2} />
          </div>
          <QuickLinksPanel />
        </div>
      </Container>
    </Section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
};
