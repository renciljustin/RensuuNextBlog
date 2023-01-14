import { GetStaticProps } from 'next';
import { Fragment, useEffect, useState } from 'react';
import BlogPosts from '../../components/blog/BlogPosts';
import Container from '../../components/layouts/Container';
import Section from '../../components/layouts/Section';
import QuickLinks from '../../components/widgets/QuickLinks';
import {
  QuickLinksType,
  QuickLinksUI,
} from '../../components/widgets/QuickLinksUI';
import { PostData } from '../../data/models/post-data';
import { getAllPosts } from '../../lib/utils/posts-util';
import classes from './index.module.css';

export default function BlogPostsPage({ posts }: { posts: PostData[] }) {
  const [featuredPosts, setFeaturedPosts] = useState<QuickLinksUI>();
  const [latestPosts, setLatestPosts] = useState<QuickLinksUI>();
  const [postCategories, setPostCategories] = useState<QuickLinksUI>();

  useEffect(() => {
    Promise.all([
      fetch('/api/posts/featured-thumbnails').then((res) => res.json()),
      fetch('/api/posts/latest-thumbnails').then((res) => res.json()),
      fetch('/api/posts/categories').then((res) => res.json()),
    ]).then(([featuredPostsData, latestPostsData, postCategoriesData]) => {
      const _featuredPosts: QuickLinksUI = {
        title: 'Featured Posts',
        type: QuickLinksType.Link,
        routes: featuredPostsData.map((data: any) => {
          return {
            title: data.title,
            destination: `/blog-posts/${data.slug}`,
          };
        }),
      };
      setFeaturedPosts(_featuredPosts);

      const _latestPosts: QuickLinksUI = {
        title: 'Latest Posts',
        type: QuickLinksType.Link,
        routes: latestPostsData.map((data: any) => {
          return {
            title: data.title,
            destination: `/blog-posts/${data.slug}`,
          };
        }),
      };
      setLatestPosts(_latestPosts);

      const _postCategories: QuickLinksUI = {
        title: 'Categories',
        type: QuickLinksType.Pill,
        routes: postCategoriesData.map((data: any) => {
          return {
            title: data,
            destination: `/blog-posts/categories/${data}`,
          };
        }),
      };
      setPostCategories(_postCategories);
    });
  }, []);

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
          <div className={classes.quickLinks}>
            <div className={classes.sticky}>
              {featuredPosts && <QuickLinks quickLinks={featuredPosts} />}
              {latestPosts && <QuickLinks quickLinks={latestPosts} />}
              {postCategories && <QuickLinks quickLinks={postCategories} />}
            </div>
          </div>
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
  };
};
