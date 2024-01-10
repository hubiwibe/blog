import Image from 'next/image';
import React from 'react';

export interface PostCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

function PostCard({ title, description, date, category, path, featured }: PostCardProps) {
  return (
    <div className="flex flex-col max-w-xs rounded-lg shadow-lg max-h-80">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image src="/images/profile.png" alt="포스트 이미지" fill objectFit="cover" />
      </div>
      <div className="flex flex-col items-center p-2 text-sm gap-y-1">
        <p className="w-full text-right">{date}</p>
        <p className="text-lg font-bold">{title}</p>
        <p className="w-full overflow-hidden break-words text-ellipsis line-clamp-2">
          {description.concat(description).concat(description)}
        </p>
        <div className="px-2 bg-green-100 rounded-md">{category}</div>
      </div>
    </div>
  );
}

export default PostCard;
