'use client';
import React, { useState } from 'react';
import GuideChipList from './GuideChipList';
import { IoCloseOutline } from 'react-icons/io5';

const GuideChipGrid = () => {
  const [selectDatas, setSelectDatas] = useState<string[]>([]);
  const exerciseTypes = ['근력', '유산소', '스포츠', '스트레칭'];
  const exerciseAreas = ['가슴', '복근', '허벅지', '이두', '어깨', '등', '엉덩이', '종아리'];

  const onClickTab = (name: string) => {
    setSelectDatas((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  return (
    <div>
      <GuideChipList
        title="운동 종류"
        datas={exerciseTypes}
        selectedData={selectDatas}
        activeColor="blue"
        onclick={onClickTab}
      />
      <GuideChipList
        title="운동 부위"
        datas={exerciseAreas}
        selectedData={selectDatas}
        onclick={onClickTab}
      />

      {selectDatas && (
        <div className="flex flex-wrap gap-[10px] my-[14px]">
          {selectDatas.map((data, index) => (
            <button
              key={index}
              className={`flex items-center border-solid rounded-[10px] px-[14px] py-2 border-[1px] ${exerciseTypes.includes(data) ? 'border-[#0A84FF] text-[#0A84FF]' : 'border-primary text-primary'}`}
            >
              <p>{data}</p>
              <IoCloseOutline className="w-5 h-5" onClick={() => onClickTab(data)} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuideChipGrid;
