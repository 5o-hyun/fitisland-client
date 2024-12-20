import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const RecodeAddButton = ({ onClick, ...props }: Props) => {
  return (
    <div
      className="border-2 border-solid border-primary rounded-[10px] flex items-center justify-center h-[60px] cursor-pointer "
      onClick={onClick}
      {...props}
    >
      <p className="font-medium text-primary">운동 기록 추가하기</p>
    </div>
  );
};

export default RecodeAddButton;
