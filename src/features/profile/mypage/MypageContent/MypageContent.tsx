import React from 'react';
import Arrow from 'public/common/arrow-gray.svg';

type Props = {
  name: string;
  info: string;
  onClick?: () => void;
};

const MypageContent = ({ name, info, onClick }: Props) => {
  return (
    <div>
      <div
        className="h-[50px] flex justify-between items-center cursor-pointer font-semibold"
        onClick={onClick}
      >
        {name}
        <div className="flex items-center gap-2">
          <p className="text-[#959595] font-semibold">{info}</p>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default MypageContent;
