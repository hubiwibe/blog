import React from 'react';
import posts from '../../data/posts.json';
import PostCard, { PostCardProps } from '@/components/PostCard';

function PostCards() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {posts.map((post: PostCardProps, idx: number) => (
        <PostCard key={`post${idx + 1}`} {...post} />
      ))}
    </div>
  );
}

export default PostCards;
