'use client';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import React from 'react';
import Avatar from 'public/profile/avatar.svg';
import { useRouter } from 'next/navigation';
import ProfileContent from '@features/profile/ProfileContent';

const ProfilePage = () => {
  const router = useRouter();

  return (
    <>
      <TabBar name="프로필" />
      <BodyLayout>
        <div className="my-[12px] flex items-center gap-[16px]">
          <Avatar />
          <div>
            <p className="mb-[8px] text-[#505050] font-medium text-[14px]">???</p>
            <p className="font-medium">닉네임</p>
          </div>
        </div>
        <ProfileContent name="내 계정" onClick={() => router.push('/profile/mypage')} />
        <ProfileContent name="원페이지 리포트" onClick={() => console.log('a')} />
        <ProfileContent name="레벨" onClick={() => console.log('a')} />
        <ProfileContent name="뱃지" onClick={() => console.log('a')} />
      </BodyLayout>
      <div className="bg-[#1e1e1e] h-[8px] w-full"></div>
      <BodyLayout>
        <ProfileContent name="로그아웃" onClick={() => console.log('a')} />
        <ProfileContent name="회원탈퇴" onClick={() => console.log('a')} />
      </BodyLayout>
    </>
  );
};

export default ProfilePage;
