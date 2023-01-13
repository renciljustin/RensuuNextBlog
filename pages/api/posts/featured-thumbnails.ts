import { NextApiRequest, NextApiResponse } from 'next';
import { getFeaturedPosts } from '../../../lib/utils/posts-util';

export default async function FeaturedThumbnails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const featuredPosts = getFeaturedPosts();
    const data = featuredPosts.slice(0, 5).map((post) => {
      return { slug: post.slug, title: post.title };
    });
    res.status(200).json(data);
  }
}
