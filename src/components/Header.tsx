import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 px-5">
      <Link className="text-2xl font-bold" href="/">
        사탕공방
      </Link>
      <nav className="flex gap-x-5">
        <Link href="/">home</Link>
        {/* <Link href="/about">about</Link> */}
        <Link href="/posts">posts</Link>
        {/* <Link href="/contact">contact</Link> */}
      </nav>
    </header>
  );
}
