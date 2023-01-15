import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import BlogPosts from '../../../components/blog/BlogPosts';
import Container from '../../../components/layouts/Container';
import QuickLinksPanel from '../../../components/layouts/QuickLinksPanel';
import Section from '../../../components/layouts/Section';
import { PostData } from '../../../data/models/post-data';
import {
  getAllCategories,
  getPostsByCategory,
} from '../../../lib/utils/posts-util';
import classes from './PostCategoriesPage.module.css';

export default function PostCategoriesPage({ posts }: { posts: PostData[] }) {
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  if (!params) return { notFound: true };

  const id = params.id as string;

  const posts = getPostsByCategory(id);
  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postCategories = getAllCategories();
  return {
    paths: postCategories.map((category) => ({ params: { id: category } })),
    fallback: false,
  };
};
