'use client';
import Button from '@components/Button';
import BaseLayout from '@components/Layouts/BaseLayout';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import CollapseCreate from '@features/adventure/collapse/CollapseCreate';
import { useRouter } from 'next/navigation';
import React from 'react';

const RecodeCreatePage = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <TabBar
        name="운동 일지 기록하기"
        rightText="편집"
        onClickBack={() => router.back()}
        onClickRight={() => router.push('/recode/delete')}
      />
      <BodyLayout className="mt-[18px]">
        <CollapseCreate />
        <CollapseCreate />
      </BodyLayout>
      <Button name="운동 일지 저장" buttonType="fixed" onClick={() => router.push('/recode')} />
    </BaseLayout>
  );
};

export default RecodeCreatePage;
