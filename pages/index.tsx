import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import BlogPosts from '../components/blog/BlogPosts';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import Container from '../components/layouts/Container';
import Section from '../components/layouts/Section';
import { PostData } from '../data/models/post-data';
import { getAllPosts } from '../lib/utils/posts-util';
import classes from './HomePage.module.css';

export default function HomePage({ posts }: { posts: PostData[] }) {
  return (
    <Fragment>
      <Section>
        <Container className={classes.noPadding}>
          <Hero />
        </Container>
      </Section>
      <Section>
        <Container className={classes.noPadding}>
          <Introduction />
        </Container>
      </Section>
      <Section
        title="My Latest Blogs"
        description="Allow me to share you some of my latest discoveries"
      >
        <Container className={classes.noPadding}>
          <BlogPosts blogPosts={posts} />
        </Container>
      </Section>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const filteredPosts = posts.splice(0, 4);
  return {
    props: {
      posts: filteredPosts,
    },
    revalidate: 1800,
  };
};
