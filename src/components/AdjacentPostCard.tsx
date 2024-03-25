import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

function AdjacentPostCard({ post: { path, title, description }, type }: Props) {
  return (
    <Link className="relative flex w-full h-56" href={`${path}`}>
      <Image
        className="absolute object-cover w-full h-full opacity-75"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <div className={`z-10 flex items-center justify-around ${type === 'next' ? 'w-full' : 'w-3/4'}`}>
        {type === 'prev' && (
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
        )}
        <div className="flex flex-col">
          <span className="text-3xl font-extrabold text-white">{title}</span>
          <span className="font-bold text-white">{description}</span>
        </div>
        {type === 'next' && (
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
        )}
      </div>
    </Link>
  );
}

export default AdjacentPostCard;
