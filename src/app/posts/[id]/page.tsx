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
          <Link className="relative flex w-full h-56" href={`${prev.path}`}>
            <Image
              className="absolute object-cover w-full h-full"
              src={`/images/posts/${prev.path}.png`}
              alt={title}
              width={760}
              height={420}
            />
            <div className={`z-10 flex items-center justify-around ${next ? 'w-full' : 'w-3/4'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-12 h-12 text-yellow-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-white">{prev.title}</span>
                <span className="font-bold text-white">{prev.description}</span>
              </div>
            </div>
          </Link>
        )}
        {next && (
          <Link className={`relative flex w-full h-56${prev ? '' : ' justify-end'}`} href={`${next.path}`}>
            <Image
              className="absolute object-cover w-full h-full"
              src={`/images/posts/${next.path}.png`}
              alt={title}
              width={760}
              height={420}
            />
            <div className={`z-10 flex items-center justify-around ${prev ? 'w-full' : 'w-3/4'}`}>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-white">{next.title}</span>
                <span className="font-bold text-white">{next.description}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-12 h-12 text-yellow-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        )}
      </section>
    </article>
  );
}

export default PostDetailPage;
