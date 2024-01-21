'use client';

import PostCard from '@/components/PostCard';
import { Post } from '@/service/posts';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PostsSwiper({ posts }: { posts: Post[] }) {
  return (
    <Swiper
      loop={true}
      spaceBetween={16}
      slidesPerView={3.5}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {posts.map(post => (
        <SwiperSlide key={post.path}>
          <PostCard post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PostsSwiper;
