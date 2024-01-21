import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <section className="py-5">
      <Profile />
      <div className="h-4" />
      <FeaturedPosts />
      <div className="h-4" />
      <CarouselPosts />
    </section>
  );
}
