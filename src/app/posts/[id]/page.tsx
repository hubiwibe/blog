import PostContent from '@/components/PostContent';
import { PostData, getPostDetailByPath } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

async function PostDetailPage({ params: { id } }: { params: { id: string } }) {
  const post: PostData = await getPostDetailByPath(id);
  const { title, path, prev, next } = post;

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
      <section className="flex justify-between">
        {prev && (
          <Link className="w-full bg-red-400" href={`${prev.path}`}>
            이전 포스트
          </Link>
        )}
        {next && (
          <Link className="w-full bg-green-400" href={`${next.path}`}>
            다음 포스트
          </Link>
        )}
      </section>
    </article>
  );
}

export default PostDetailPage;
