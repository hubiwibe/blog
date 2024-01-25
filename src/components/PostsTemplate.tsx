'use client';
import CategoryChanger from '@/components/CategoryChanger';
import PostCards from '@/components/PostCards';
import { Post } from '@/service/posts';
import React from 'react';

type PostsTemplateProps = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All posts';

function PostsTemplate({ posts, categories }: PostsTemplateProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(ALL_POSTS);
  const [categoryPosts, setCategoryPosts] = React.useState(posts);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setCategoryPosts(category === ALL_POSTS ? posts : posts.filter(post => post.category === category));
  };

  return (
    <>
      <section className="pb-4">
        <PostCards posts={categoryPosts} />
      </section>
      <aside className="mx-3 ">
        <CategoryChanger
          categories={[ALL_POSTS, ...categories]}
          selectedCategory={selectedCategory}
          onChangeCategory={handleCategory}
        />
      </aside>
    </>
  );
}

export default PostsTemplate;
