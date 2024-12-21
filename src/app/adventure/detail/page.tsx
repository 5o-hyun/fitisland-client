'use client';
import TabBar from '@components/TabBar';
import React from 'react';
import { useRouter } from 'next/navigation';
import AdvertureTopContent from '@features/adventure/AdvertureTopContent';
import BodyLayout from '@components/Layouts/BodyLayout';
import AdvertureComment from '@features/adventure/AdvertureComment';

const AdvertureDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <TabBar name="탐험하기 - 지역" onClickBack={() => router.back()} />
      <AdvertureTopContent />
      <BodyLayout>
        <AdvertureComment />
        <AdvertureComment />
      </BodyLayout>
    </div>
  );
};

export default AdvertureDetailPage;
