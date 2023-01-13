import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '../../../lib/utils/posts-util';

export default async function LatestThumbnails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const latestPosts = getAllPosts();
    const data = latestPosts.slice(0, 5).map((post) => {
      return { slug: post.slug, title: post.title };
    });
    res.status(200).json(data);
  }
}
