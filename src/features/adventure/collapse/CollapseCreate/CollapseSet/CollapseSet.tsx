import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const CollapseSet = () => {
  return (
    <div className="bg-[#242424] rounded-[10px] px-4 py-2 flex items-center justify-between">
      <p className="text-[#888888] font-medium">1 세트</p>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <input className="rounded-xl text-center border-[1px] border-solid border-white outline-none bg-transparent px-4 py-3 max-w-[60px] focus:border-primary focus:text-primary" />
          <span className="text-[#888888] font-medium">kg</span>
        </div>
        <div className="flex items-center gap-1">
          <input className="rounded-xl text-center border-[1px] border-solid border-white outline-none bg-transparent px-4 py-3 max-w-[60px] focus:border-primary focus:text-primary" />
          <span className="text-[#888888] font-medium">회</span>
        </div>
      </div>
      <HiOutlineTrash className="w-6 h-6 text-[#888888] cursor-pointer" />
    </div>
  );
};

export default CollapseSet;
