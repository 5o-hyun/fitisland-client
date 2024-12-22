'use client';
import React from 'react';
import Arrow from 'public/home/arrow.svg';

type TabBarProps = {
  name: string;
  rightText?: string;
  onClickBack?: () => void;
  onClickRight?: () => void;
};

const TabBar = ({ name, rightText, onClickBack, onClickRight }: TabBarProps) => {
  return (
    <div className="h-[60px] border-b-[1px] border-solid border-[#404040] flex items-center relative">
      {onClickBack && (
        <div
          className="w-[48px] h-[48px] flex justify-center items-center absolute"
          onClick={onClickBack}
        >
          <Arrow className="cursor-pointer" />
        </div>
      )}
      <p className="w-full text-center">{name}</p>
      {rightText && (
        <div
          className="w-[48px] h-[48px] flex justify-center items-center absolute right-0 cursor-pointer text-primary"
          onClick={onClickRight}
        >
          {rightText}
        </div>
      )}
    </div>
  );
};

export default TabBar;
