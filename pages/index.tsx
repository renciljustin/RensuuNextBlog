import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import BlogPosts from '../components/blog/BlogPosts';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import { PostData } from '../data/models/post-data';
import { getFeaturedPosts } from '../lib/utils/posts-util';

export default function HomePage({ posts }: { posts: PostData[] }) {
  return (
    <Fragment>
      <Hero />
      <Introduction />
      <BlogPosts blogPosts={posts} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFeaturedPosts();
  return {
    props: {
      posts,
    },
  };
};
