import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import BlogPosts from '../components/blog/BlogPosts';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import { PostData } from '../data/models/post-data';
import { getAllPosts, getFeaturedPosts } from '../lib/utils/posts-util';

export default function HomePage({ posts }: { posts: PostData[] }) {
  return (
    <Fragment>
      <Hero />
      <Introduction />
      <BlogPosts
        title="My Latest Blogs"
        description="Allow me to share you some of my latest discoveries"
        blogPosts={posts}
      />
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
  };
};
