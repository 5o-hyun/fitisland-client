'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const RecodeAddButton = ({ ...props }: Props) => {
  const router = useRouter();

  return (
    <div
      className="border-2 border-solid border-primary rounded-[10px] flex items-center justify-center h-[60px] cursor-pointer "
      onClick={() => router.push('/recode/select')}
      {...props}
    >
      <p className="font-medium text-primary">운동 기록 추가하기</p>
    </div>
  );
};

export default RecodeAddButton;
