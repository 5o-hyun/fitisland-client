'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navigationMenus = [
    { id: 1, name: '홈', link: '/' },
    { id: 2, name: '운동기록', link: '/recode' },
    { id: 3, name: '탐험하기', link: '/adventure' },
    { id: 4, name: '운동종목가이드', link: '/guide' },
    { id: 5, name: '프로필', link: '/profile' },
  ];

  return (
    <div className="fixed desktop:w-[393px] w-full bottom-0">
      <nav className="pb-[27px] pt-[10px] w-full bg-[#141517] flex justify-between px-[20px] border-t-[1px] border-solid border-[#404040]">
        {navigationMenus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push(menu.link)}
          >
            <div
              className={`w-[24px] h-[24px] flex-shrink-0 ${menu.link === '/' + pathname.split('/')[1] ? 'bg-primary' : 'bg-[#808080]'}`}
            ></div>
            <h2
              className={`text-center text-[10px] ${menu.link === '/' + pathname.split('/')[1] ? 'text-primary' : 'text-[#808080]'}`}
            >
              {menu.name}
            </h2>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
