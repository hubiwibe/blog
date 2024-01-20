import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <section className="py-5">
      <Profile />
      <div className="h-8" />
      <FeaturedPosts />
    </section>
  );
}
