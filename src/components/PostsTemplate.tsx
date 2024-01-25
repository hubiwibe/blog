'use client';
import CategoryChanger from '@/components/CategoryChanger';
import PostCards from '@/components/PostCards';
import { Post } from '@/service/posts';
import React from 'react';

type PostsTemplateProps = {
  posts: Post[];
  categories: string[];
};

function PostsTemplate({ posts, categories }: PostsTemplateProps) {
  const [categoryPosts, setCategoryPosts] = React.useState(posts);

  const handleCategory = (category: string) => {
    setCategoryPosts(category === 'All posts' ? posts : posts.filter(post => post.category === category));
  };

  return (
    <>
      <section className="pb-4">
        <PostCards posts={categoryPosts} />
      </section>
      <aside className="mx-3 ">
        <CategoryChanger categories={categories} onChangeCategory={handleCategory} />
      </aside>
    </>
  );
}

export default PostsTemplate;
