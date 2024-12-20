import React from 'react';
import Plus from 'public/common/plus.svg';

type Props = React.HTMLAttributes<HTMLDivElement>;

const RecodeAddButton = ({ onClick, ...props }: Props) => {
  return (
    <div
      className="bg-[#1A1A1A] rounded-2xl px-6 flex items-center justify-between h-[60px] cursor-pointer hover:bg-[#333]"
      onClick={onClick}
      {...props}
    >
      <p className="font-medium text-[18px]">운동추가</p>
      <Plus />
    </div>
  );
};

export default RecodeAddButton;
