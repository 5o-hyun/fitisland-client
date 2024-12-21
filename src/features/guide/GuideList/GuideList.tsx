'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoMdHeart } from 'react-icons/io';

const GuideList = () => {
  const router = useRouter();

  return (
    <div className="my-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-[#1F1F1F] w-[70px] h-[70px] rounded-md">img</div>
        <div>
          <p className="font-medium mb-2">벤치프레스</p>
          <p className="text-[14px] font-medium text-[#505050]">등, 가슴</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* <IoMdHeartEmpty className="w-[24px] h-[24px] text-[#505050] cursor-pointer" /> */}
        <IoMdHeart className="w-[24px] h-[24px] text-primary cursor-pointer" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="cursor-pointer text-[#505050]"
          onClick={() => router.push('/guide/info')}
        >
          <g fill="none" stroke="currentColor" strokeLinejoin="round">
            <circle cx={12} cy={12} r={9} strokeLinecap="round" strokeWidth={2}></circle>
            <path strokeWidth={3} d="M12 8h.01v.01H12z"></path>
            <path strokeLinecap="round" strokeWidth={2} d="M12 12v4"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default GuideList;
