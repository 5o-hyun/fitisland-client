import React from 'react';

const InfoTobContent = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#535353] rounded-[10px] my-5 h-[223px]">이미지</div>
      <div className="flex items-end gap-[14px] mb-[18px]">
        <p className="text-[20px] font-medium text-[#e9e9e9]">벤치프레스</p>
        <p className="font-medium text-[#818181]">BenchPress</p>
      </div>
      <div className="flex gap-2 pb-[18px]">
        <div className="w-fit border-solid rounded-[10px] px-[14px] py-2 border-[#0A84FF] text-[#0A84FF] border-[1.5px]">
          근력
        </div>
        <div className="w-fit border-solid rounded-[10px] px-[14px] py-2 border-primary text-primary border-[1.5px]">
          가슴
        </div>
        <div className="w-fit border-solid rounded-[10px] px-[14px] py-2 border-primary text-primary border-[1.5px]">
          가슴
        </div>
      </div>
    </div>
  );
};

export default InfoTobContent;
