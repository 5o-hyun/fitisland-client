'use client';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import MypageContent from '@features/profile/mypage/MypageContent';
import { useRouter } from 'next/navigation';
import React from 'react';

const MyPage = () => {
  const router = useRouter();

  return (
    <div>
      <TabBar name="내 계정" onClickBack={() => router.back()} />
      <BodyLayout className="mt-[18px]">
        <MypageContent name="이름" info="김아무개" />
        <MypageContent name="생년월일" info="1995년 5월 22일" />
        <MypageContent name="성별" info="여자" />
        <MypageContent name="직업" info="??" />
      </BodyLayout>
    </div>
  );
};

export default MyPage;
