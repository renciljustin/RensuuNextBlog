import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { PostData } from '../../data/models/post-data';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostData;

  return postData;
}

export function getAllPosts(): PostData[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts(): PostData[] {
  const allPosts = getAllPosts();

  const filteredPosts = allPosts.filter((post) => post.isFeatured);

  return filteredPosts;
}
