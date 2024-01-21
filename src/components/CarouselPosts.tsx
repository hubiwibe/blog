import PostsSwiper from '@/components/PostsSwiper';
import { getNonFeaturedPosts } from '@/service/posts';
import React from 'react';

async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <div>
      <h2 className="mb-1 text-2xl font-bold">You May Like</h2>
      <PostsSwiper posts={posts} />
    </div>
  );
}

export default CarouselPosts;
