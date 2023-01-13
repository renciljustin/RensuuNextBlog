import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { PostData } from '../../data/models/post-data';

const postsDirectory = path.join(process.cwd(), 'posts');
const postCategories = [
  'ExpressJS',
  'Info',
  'MongoDB',
  'NextJS',
  'ReactJS',
  'Typescript',
  'Vercel',
];

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(id: string): PostData {
  const postSlug = getPostSlug(id);
  const filePath = getFilePath(postsDirectory, postSlug);
  const fileContent = getFileContent(filePath);
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostData;

  return postData;
}

export function getPartialPostData(id: string): PostData {
  const postSlug = getPostSlug(id);
  const filePath = getFilePath(postsDirectory, postSlug);
  const fileContent = getFileContent(filePath);
  const { data } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
  } as PostData;

  return postData;
}

function getPostSlug(id: string): string {
  const postSlug = id.replace(/\.md$/, ''); // removes the file extension
  return postSlug;
}

function getFilePath(dir: string, fileName: string): string {
  const filePath = path.join(dir, `${fileName}.md`);
  return filePath;
}

function getFileContent(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
}

export function getAllPosts(): PostData[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPartialPostData(postFile);
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

export function getAllCategories(): string[] {
  const sortedPostCategories = postCategories.sort((catA, catB) =>
    catA > catB ? 1 : -1
  );
  return sortedPostCategories;
}
