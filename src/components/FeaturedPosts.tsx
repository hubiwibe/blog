import PostCards from '@/components/PostCards';
import { getFeaturedPosts } from '@/service/posts';
import React from 'react';

async function FeaturedPosts() {
  // 1. 모든 데이터를 읽어와야 함
  const posts = await getFeaturedPosts();
  // 2. 모든 데이터를 보여줌
  return (
    <section>
      <h2 className="mb-1 text-2xl font-bold">Featured Posts</h2>
      <PostCards posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
