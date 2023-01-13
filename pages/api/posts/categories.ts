import { NextApiRequest, NextApiResponse } from 'next';
import { getAllCategories, getAllPosts } from '../../../lib/utils/posts-util';

export default async function LatestThumbnails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const categories = getAllCategories();
    res.status(200).json(categories);
  }
}
