import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then(posts => posts.sort((a: Post, b: Post) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => !post.featured);
}

export async function getPostDetailByPath(pathname: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${pathname}.md`);
  const metadata = await getAllPosts().then(posts => posts.find(post => post.path === pathname));
  if (!metadata) {
    throw new Error('Post not found');
  }
  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}
