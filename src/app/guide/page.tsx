import SearchInput from '@components/Inputs/SearchInput';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import GuideChipGrid from '@features/guide/GuideChipGrid';
import GuideList from '@features/guide/GuideList';
import React from 'react';

const GuidePage = () => {
  return (
    <div>
      <TabBar name="운동종목가이드" />
      <BodyLayout>
        <SearchInput placeholder="찾으시는 운동을 검색해보세요." className="my-[14px]" />
        <GuideChipGrid />
        <GuideList />
        <GuideList />
        <GuideList />
        <GuideList />
        <GuideList />
        <GuideList />
      </BodyLayout>
    </div>
  );
};

export default GuidePage;
