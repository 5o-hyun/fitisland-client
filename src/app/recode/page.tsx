'use client';
import BaseLayout from '@components/Layouts/BaseLayout';
import BodyLayout from '@components/Layouts/BodyLayout';
import Navigation from '@components/Navigation';
import TabBar from '@components/TabBar';
import RecodeAddButton from '@features/recode/RecodeAddButton';
import RecodeCalendar from '@features/recode/RecodeCalendar';
import { useRouter } from 'next/navigation';
import React from 'react';

const RecodePage = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <TabBar name="운동기록" onClickBack={() => router.back()} />
      <BodyLayout>
        <RecodeCalendar />
        <RecodeAddButton />
      </BodyLayout>
      <Navigation />
    </BaseLayout>
  );
};

export default RecodePage;
