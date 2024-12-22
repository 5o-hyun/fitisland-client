import React from 'react';
import { IoClose } from 'react-icons/io5';

type Props = {
  name: string;
};

const RecodeChip = ({ name }: Props) => {
  return (
    <div className="flex items-center gap-2 rounded-[100px] bg-[#333] py-2 px-3 cursor-pointer">
      <p className="font-medium text-[14px]">{name}</p>
      <IoClose className="w-5 h-5" />
    </div>
  );
};

export default RecodeChip;
