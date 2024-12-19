import React from 'react';
import LogoLeft from 'public/home/logo-mini.svg';
import LogoMain from 'public/home/logo-main.svg';
import BodyLayout from '@components/Layouts/BodyLayout/BodyLayout';

const HomePage = () => {
  return (
    <div>
      <div className="h-[60px] flex justify-between items-center border-b-[1px] border-solid border-[#404040]">
        <LogoLeft className="ml-[12px]" />
        <LogoMain />
        <div className="text-[#434343] font-medium w-[48px] h-[48px] flex justify-center items-center cursor-pointer mr-[12px]">
          편집
        </div>
      </div>
      <BodyLayout>
        <div className="my-[16px] flex justify-between items-center">
          <div className="flex items-center gap-[12px]">
            <div className="w-[42px] h-[42px] rounded-full bg-white text-primary">img</div>
            <p className="text-[24px] font-semibold">000 님</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M12.721 5.003L11.255 5c-3.344-.008-6.247 2.709-6.27 6v3.79c0 .79-.1 1.561-.531 2.218l-.287.438C3.73 18.11 4.2 19 4.985 19h14.03c.785 0 1.254-.89.818-1.554l-.287-.438c-.43-.657-.531-1.429-.531-2.219v-3.788c-.04-3.292-2.95-5.99-6.294-5.998M15 19a3 3 0 1 1-6 0"></path>
              <path d="M12 2a2 2 0 0 1 2 2v1h-4V4a2 2 0 0 1 2-2"></path>
            </g>
          </svg>
        </div>
        <div className="w-full aspect-square bg-[#181818] relative mb-[28px]">
          <div className="absolute bottom-[25px] left-[25px]">
            <p className="font-semibold text-[21opx] mb-[14px]">메인이미지</p>
            <p className="font-medium text-[14px]">내용</p>
          </div>
        </div>
        <div className="bg-[#131313] h-[50px] p-[18px] rounded-[6px] flex items-center">
          <input
            placeholder="검색어 입력하기"
            className="flex-1 bg-transparent outline-none placeholder:text-[#444444] font-medium"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="cursor-pointer"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
            ></path>
          </svg>
        </div>
      </BodyLayout>
    </div>
  );
};

export default HomePage;
