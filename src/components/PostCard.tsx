import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: Post;
};

function PostCard({ post: { title, description, date, category, path, featured } }: Props) {
  return (
    <Link href={`posts/${path}`}>
      <article className="flex flex-col rounded-lg shadow-lg hover:shadow-2xl">
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image src={`/images/posts/${path}.png`} alt="포스트 이미지" fill objectFit="cover" />
        </div>
        <div className="flex flex-col items-center p-2 text-sm gap-y-1">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full overflow-hidden break-words text-ellipsis line-clamp-2">
            {description.concat(description).concat(description)}
          </p>
          <span className="px-2 bg-green-100 rounded-md">{category}</span>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;
