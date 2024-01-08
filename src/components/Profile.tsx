import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Profile() {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Image className="rounded-full" src="/images/profile.png" alt="프로필 이미지" width={250} height={250} priority />
      <h1 className="text-3xl font-bold">{"Hi, I'm Justin"}</h1>
      <h2 className="text-xl font-semibold">Full-stack Engineer</h2>
      <h3 className="text-lg">DamhwaCompany, Team Leader</h3>
      <Link href="/contact">
        <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Contact Me</button>
      </Link>
    </div>
  );
}

export default Profile;
