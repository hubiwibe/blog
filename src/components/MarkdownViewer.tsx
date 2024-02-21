/* eslint-disable react/no-children-prop */
'use client';

import React from 'react';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Markdown from 'react-markdown';
import Image from 'next/image';

type Props = {
  content: string;
};

function MarkdownViewer({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className="w-full prose max-w-none"
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={materialDark}
              ref={undefined}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: image => (
          <Image
            className="object-cover w-full max-h-60"
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownViewer;
