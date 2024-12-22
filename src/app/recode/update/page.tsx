'use client';
import BaseLayout from '@components/Layouts/BaseLayout';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import CollapseUpdate from '@features/adventure/collapse/CollapseUpdate';
import RecodeTab from '@features/recode/RecodeTab';
import { useRouter } from 'next/navigation';
import React from 'react';

const RecodeUpdatePage = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <TabBar
        name="운동기록 수정"
        rightText="완료"
        onClickBack={() => router.back()}
        onClickRight={() => router.push('/recode')}
      />
      <RecodeTab selectedDate={new Date()} />
      <BodyLayout className="flex flex-col gap-5 pb-32">
        <CollapseUpdate />
        <CollapseUpdate />
      </BodyLayout>
    </BaseLayout>
  );
};

export default RecodeUpdatePage;
