import PostsTemplate from '@/components/PostsTemplate';
import { getAllPosts } from '@/service/posts';
import React from 'react';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = new Set(posts?.map(({ category }) => category));

  return (
    <div className="flex pb-4">
      <PostsTemplate posts={posts} categories={['All posts', ...categories.values()]} />
    </div>
  );
}
