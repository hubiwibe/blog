import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Profile() {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Image className="rounded-full" src="/images/profile.png" alt="프로필 이미지" width={250} height={250} priority />
      <h2 className="text-3xl font-bold">Yungi Jung</h2>
      <span className="text-xl font-semibold">Full-stack Engineer</span>
      <div className="flex gap-1 text-lg">
        <span>Habitat is</span>
        <a className="font-semibold text-green-400" href="https://sooldamhwa.com" target="_blank">
          술담화
        </a>
      </div>
      <Link href="/contact">
        <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Contact Me</button>
      </Link>
    </div>
  );
}

export default Profile;
