'use client';
import Button from '@components/Button';
import SearchInput from '@components/Inputs/SearchInput';
import BaseLayout from '@components/Layouts/BaseLayout';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import GuideChipGrid from '@features/guide/GuideChipGrid';
import GuideList from '@features/guide/GuideList';
import RecodeChip from '@features/recode/RecodeChip';
import { useRouter } from 'next/navigation';
import React from 'react';

const RecodeSelectPage = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <TabBar name="운동 선택하기" onClickBack={() => router.back()} />
      <BodyLayout>
        <SearchInput placeholder="찾으시는 운동을 검색해보세요." className="my-[14px]" />
        <GuideChipGrid />
        <GuideList checked />
        <GuideList checked />
        <GuideList checked />
        <GuideList checked />
      </BodyLayout>
      <div className="fixed bottom-8 desktop:w-[353px] w-[calc(100%-40px)] translate-x-[-50%] left-[50%]">
        <div className="flex flex-wrap gap-2 mb-5">
          <RecodeChip name="운동이름" />
          <RecodeChip name="운동이름" />
          <RecodeChip name="운동이름" />
          <RecodeChip name="운동이름" />
        </div>
        <Button name="운동 선택하기" />
      </div>
    </BaseLayout>
  );
};

export default RecodeSelectPage;
