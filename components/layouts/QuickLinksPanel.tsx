import { useEffect, useState } from 'react';
import QuickLinks from '../widgets/QuickLinks';
import { QuickLinksType, QuickLinksUI } from '../widgets/QuickLinksUI';
import classes from './QuickLinksPanel.module.css';

export default function QuickLinksPanel() {
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
    <section className={classes.quickLinks}>
      <div className={classes.sticky}>
        {featuredPosts && <QuickLinks quickLinks={featuredPosts} />}
        {latestPosts && <QuickLinks quickLinks={latestPosts} />}
        {postCategories && <QuickLinks quickLinks={postCategories} />}
      </div>
    </section>
  );
}
