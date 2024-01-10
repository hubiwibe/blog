import PostCards from '@/components/PostCards';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <section className="py-5">
      <Profile />
      <div className="h-8" />
      <PostCards />
    </section>
  );
}
