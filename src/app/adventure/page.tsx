import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import React from 'react';

const AdventurePage = () => {
  return (
    <div>
      <TabBar name="탐험하기 - 대륙" />
      <BodyLayout className="mt-[18px]">
        <div className="collapse collapse-arrow bg-[#1A1A1A] mb-5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title flex gap-3">
            <p className="font-medium min-w-[150px]">제 1 대륙 (이론)</p>
            <p className="font-medium text-[#505050]">2/6지역</p>
            <p className="font-medium text-[#505050]">Lv. 1</p>
          </div>
          <div className="collapse-content">
            <div className="bg-[#535353] rounded-[10px] w-full h-[375px] cursor-pointer">
              추후img
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#1A1A1A] mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title flex gap-3">
            <p className="font-medium min-w-[150px]">제 2 대륙 (맨몸운동)</p>
            <p className="font-medium text-[#505050]">0/6지역</p>
            <p className="font-medium text-[#505050]">Lv. 0</p>
          </div>
          <div className="collapse-content">
            <div className="bg-[#535353] rounded-[10px] w-full h-[375px] cursor-pointer">
              추후img
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#1A1A1A]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title flex gap-3">
            <p className="font-medium min-w-[150px]">제 3 대륙 (머신운동)</p>
            <p className="font-medium text-[#505050]">0/6지역</p>
            <p className="font-medium text-[#505050]">Lv. 0</p>
          </div>
          <div className="collapse-content">
            <div className="bg-[#535353] rounded-[10px] w-full h-[375px] cursor-pointer">
              추후img
            </div>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default AdventurePage;
