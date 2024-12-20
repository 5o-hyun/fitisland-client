'use client';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import { useRouter } from 'next/navigation';
import React from 'react';

const ReportPage = () => {
  const router = useRouter();

  return (
    <div>
      <TabBar name="원페이지 리포트" onClickBack={() => router.push('/profile')} />
      <BodyLayout>
        <p className="mt-[36px] font-bold text-[24px]">000님의 건강 리포트</p>
        <p className="font-medium text-[#888888] text-[12px] mb-[26px]">
          건강 정보, 활동, 식사를 고려하여 최적의 정보를 제공합니다.
        </p>
        <p className="text-[#E6E6E6] font-semibold text-[20px]">기본 정보</p>
        <div className="flex flex-col">
          <div className="h-[50px] flex justify-between items-center">
            <p className="font-semibold text-[#dedbe3]">이름</p>
            <p className="font-semibold text-[#959595]">김아무개</p>
          </div>
          <div className="h-[50px] flex justify-between items-center">
            <p className="font-semibold text-[#dedbe3]">성별</p>
            <p className="font-semibold text-[#959595]">여성</p>
          </div>
          <div className="h-[50px] flex justify-between items-center">
            <p className="font-semibold text-[#dedbe3]">키</p>
            <p className="font-semibold text-[#959595]">180cm</p>
          </div>
          <div className="h-[50px] flex justify-between items-center">
            <p className="font-semibold text-[#dedbe3]">몸무게</p>
            <p className="font-semibold text-[#959595]">100kg</p>
          </div>
          <div className="h-[50px] flex justify-between items-center">
            <p className="font-semibold text-[#dedbe3]">체지방률</p>
            <p className="font-semibold text-[#959595]">?</p>
          </div>
          <div className="h-[50px] flex justify-between items-center">
            <p className="font-semibold text-[#dedbe3]">운동 목표</p>
            <p className="font-semibold text-[#959595]">살빼기</p>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default ReportPage;
