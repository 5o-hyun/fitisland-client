import React from 'react';
import Arrow from 'public/home/arrow.svg';

type Props = {
  name: string;
  onClick: () => void;
};

const ProfileContent = ({ name, onClick }: Props) => {
  return (
    <div
      className="h-[50px] flex justify-between items-center cursor-pointer font-semibold"
      onClick={onClick}
    >
      {name}
      <Arrow className="rotate-180" />
    </div>
  );
};

export default ProfileContent;
