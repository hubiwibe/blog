import React from 'react';
import PostCard from '@/components/PostCard';
import { Post } from '@/service/posts';

type Props = {
  posts: Post[];
};

function PostCards({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post: Post, idx: number) => (
        <PostCard key={`post${idx + 1}`} post={post} />
      ))}
    </div>
  );
}

export default PostCards;
