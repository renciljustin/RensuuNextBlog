import { NextApiRequest, NextApiResponse } from 'next';

export default function Post(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Ok!' });
  }
}
