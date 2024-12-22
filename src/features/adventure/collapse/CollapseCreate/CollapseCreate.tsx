import React from 'react';
import Arrow from 'public/home/arrow.svg';
import useToggle from '@/lib/hooks/useToggle';
import CollapseSet from './CollapseSet';

const CollapseCreate = () => {
  const [isChecked, toggleChecked] = useToggle();

  return (
    <div className="collapse bg-[#1A1A1A] mb-5" onClick={toggleChecked}>
      <input type="checkbox" />
      <div className="collapse-title flex justify-between px-5">
        <div className="flex items-center gap-2 font-medium">
          <p>운동이름</p>
          <div className="flex items-center gap-5 text-[#505050] text-[14px]">등,가슴</div>
        </div>
        <Arrow className={isChecked ? 'rotate-90' : 'rotate-[270deg]'} />
      </div>
      <div className="collapse-content px-5">
        <div className="bg-[#535353] rounded-[10px] h-[165px] mb-[14px]">img</div>
        <div className="mb-[14px] flex flex-col gap-1">
          <CollapseSet />
          <CollapseSet />
          <CollapseSet />
        </div>
        <button className="rounded-[10px] w-full border-2 border-solid text-[#999] border-[#434343] h-[54px] leading-[54px] text-center">
          세트 추가
        </button>
      </div>
    </div>
  );
};

export default CollapseCreate;
