import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import BlogPostContent from '../../components/blog/BlogPostContent';
import SharePost from '../../components/blog/SharePost';
import Container from '../../components/layouts/Container';
import QuickLinksPanel from '../../components/layouts/QuickLinksPanel';
import Section from '../../components/layouts/Section';
import { PostData } from '../../data/models/post-data';
import { getAllPostIds, getPostData } from '../../lib/utils/posts-util';
import classes from './BlogPostDetail.module.css';

export default function BlogPostDetail({ post }: { post: PostData }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Section>
        <Container>
          <div className={classes.container}>
            <div>
              <BlogPostContent post={post} />
              <SharePost />
            </div>
            <QuickLinksPanel />
          </div>
        </Container>
      </Section>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  if (!params)
    return {
      notFound: true,
    };

  const id = params.id as string;

  const post = await getPostData(id);

  return {
    props: {
      post,
    },
    revalidate: 1800,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllPostIds();

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
};
