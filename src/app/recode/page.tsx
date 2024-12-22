'use client';
import BaseLayout from '@components/Layouts/BaseLayout';
import BodyLayout from '@components/Layouts/BodyLayout';
import Navigation from '@components/Navigation';
import TabBar from '@components/TabBar';
import CollapseHome from '@features/adventure/collapse/CollapseHome';
import RecodeAddButton from '@features/recode/RecodeAddButton';
import RecodeCalendar from '@features/recode/RecodeCalendar';
import RecodeTab from '@features/recode/RecodeTab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RecodePage = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const moveWeek = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + direction * 7);
    setSelectedDate(newDate);
  };

  const onClickDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <BaseLayout>
      <TabBar name="운동기록" onClickBack={() => router.back()} />
      <BodyLayout>
        <RecodeCalendar selectedDate={selectedDate} moveWeek={moveWeek} onClick={onClickDate} />
        <RecodeTab selectedDate={selectedDate} />
        <CollapseHome
          title="운동 기록 1"
          subItems={[
            { title: '하위 운동 기록 1', content: '하위x2 항목 1' },
            { title: '하위 운동 기록 2', content: '하위x2 항목 2' },
          ]}
        />
        <CollapseHome
          title="운동 기록 2"
          subItems={[
            { title: '하위 운동 기록 1', content: '하위x2 항목 1' },
            { title: '하위 운동 기록 2', content: '하위x2 항목 2' },
          ]}
        />
        <RecodeAddButton />
      </BodyLayout>
      <Navigation />
    </BaseLayout>
  );
};

export default RecodePage;
