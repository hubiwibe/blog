import PostContent from '@/components/PostContent';
import { PostData, getPostDetailByPath } from '@/service/posts';
import Image from 'next/image';

import React from 'react';

async function PostDetailPage({ params: { id } }: { params: { id: string } }) {
  const post: PostData = await getPostDetailByPath(id);
  const { title, path } = post;

  return (
    <article className="m-4 overflow-hidden bg-gray-100 shadow-lg rounded-2xl">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}

export default PostDetailPage;
