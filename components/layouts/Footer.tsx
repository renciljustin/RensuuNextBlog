import Logo from '../ui/Logo';
import classes from './Footer.module.css';
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';
import Container from './Container';
import SocialIcons from '../ui/SocialIcons';
import QuickLinks from '../widgets/QuickLinks';
import { useState, useEffect } from 'react';
import { QuickLinksType, QuickLinksUI } from '../widgets/QuickLinksUI';

export default function Footer() {
  const [featuredPosts, setFeaturedPosts] = useState<QuickLinksUI>();
  const [latestPosts, setLatestPosts] = useState<QuickLinksUI>();
  const [postCategories, setPostCategories] = useState<QuickLinksUI>();

  const quickLinks: QuickLinksUI = {
    title: 'Quick Links',
    type: QuickLinksType.Link,
    routes: [
      {
        title: 'Home',
        destination: '/',
      },
      {
        title: 'Blog Posts',
        destination: '/blog-posts',
      },
      {
        title: 'About',
        destination: '/about',
      },
      {
        title: 'Contact',
        destination: '/contact',
      },
    ],
  };

  useEffect(() => {
    Promise.all([
      fetch('/api/posts/featured-thumbnails').then((res) => res.json()),
      fetch('/api/posts/latest-thumbnails').then((res) => res.json()),
      fetch('/api/posts/categories').then((res) => res.json()),
    ]).then(([featuredPostsData, latestPostData, postCategoriesData]) => {
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
        routes: latestPostData.map((data: any) => {
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

  function subscribeHandler(event: React.FormEvent) {
    event.preventDefault();

    console.log('subscribed!');
  }

  return (
    <footer className={'bgDark'}>
      <Container>
        <div className={classes.footer}>
          <section>
            <Logo />
            <address>
              <MdLocationPin className={classes.icon} />
              Malolos City, Bulacan, PHILIPPINES
            </address>
            <p>
              <MdPhone className={classes.icon} />
              (+63)905-5157250
            </p>
            <p>
              <MdEmail className={classes.icon} />
              renciljustinevangelista@gmail.com
            </p>
            <SocialIcons />
          </section>
          <section>
            <QuickLinks quickLinks={quickLinks} />
            {postCategories && <QuickLinks quickLinks={postCategories} />}
          </section>
          <section>
            {featuredPosts && <QuickLinks quickLinks={featuredPosts} />}
            {latestPosts && <QuickLinks quickLinks={latestPosts} />}
          </section>
          <section>
            <h4>Get Exclusive Content and Expert Advice</h4>
            <p>
              Subscribe to my newsletter and stay updated to my latest
              programming blogs.
            </p>
            <form onSubmit={subscribeHandler} className={classes.newsletter}>
              <input
                type="text"
                placeholder="enter your email"
                className={classes.txtEmail}
              />
              <button type="submit" className={classes.btnSubscribe}>
                Subscribe
              </button>
            </form>
          </section>
        </div>
        <div className={classes.copyrights}>
          <span>
            Made with 💕 by <strong>RJ</strong>
          </span>
        </div>
      </Container>
    </footer>
  );
}
