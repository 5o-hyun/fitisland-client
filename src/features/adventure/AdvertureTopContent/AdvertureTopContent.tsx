import React from 'react';

const AdvertureTopContent = () => {
  return (
    <div className="border-b-[1px] border-solid border-[#404040] mt-[18px] px-5">
      <div className="flex gap-4 mb-5">
        <p className="font-medium text-[20px] min-w-[122px]">맵이름</p>
        <div className="font-medium text-[#505050] flex flex-col gap-[10px]">
          <p>2/6지역</p>
          <p>지역이름</p>
        </div>
      </div>
      <div className="bg-[#535353] rounded-[10px] w-full h-[232px] cursor-pointer mb-2">
        추후img
      </div>
      <div className="flex justify-between my-5">
        <p className="font-semibold">해당지역 마을게시판</p>
        <div className="flex gap-1 font-semibold text-[#BDBDBD]">
          <p className="text-[#2D2D2D]">등록순</p> | <p>인기순</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertureTopContent;
