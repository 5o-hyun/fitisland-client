import '@styles/css/tailwind.css';
import Avatar from 'public/profile/avatar.svg';
import React from 'react';
import { GoThumbsup } from 'react-icons/go';

const AdvertureComment = () => {
  return (
    <div className="my-4 flex gap-3">
      <div className="w-[50px] h-[50px] rounded-full">
        <Avatar className="w-[50px] h-[50px]" />
      </div>
      <div>
        <span className="font-semibold mr-3">닉네임</span>
        <span className="font-medium text-[#696969] text-[14px]">Lv.10</span>
        <p className="font-medium text-[#b3b3b3] leading-5 mt-2 mb-5 text-overflow">
          좋은 컨텐츠 감사합니다.좋은 컨텐츠 감사합니다.좋은 컨텐츠 감사합니다.좋은 컨텐츠
          감사합니다.좋은 컨텐츠 감사합니다.좋은 컨텐츠 감사합니다.
        </p>
        <div className="text-medium text-[14px] flex items-center gap-[14px]">
          <p>
            <span className="text-[#4B4B4B]">10분 전</span>
            <span> · 답글쓰기</span>
          </p>
          <GoThumbsup className="w-[20px] h-[20px] text-[#5C5C5C]" />
        </div>
      </div>
    </div>
  );
};

export default AdvertureComment;
