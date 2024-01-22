import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Hello world',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <section className="flex flex-col mx-auto max-w-screen-2xl">
          <Header />
          <main className="grow min-h-[calc(100vh-116px)] px-5">{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
