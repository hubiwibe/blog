import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';
import React from 'react';

function PostContent({ post: { date, title, description, content } }: { post: PostData }) {
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center justify-end gap-1 text-green-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-semibold">{date.toString()}</span>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-semibold">{description}</p>
      <div className="w-48 mt-4 mb-8 border-2 border-green-300" />
      <MarkdownViewer content={content} />
    </section>
  );
}

export default PostContent;
