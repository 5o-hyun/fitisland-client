'use client';
import React from 'react';
import Arrow from 'public/home/arrow.svg';
import dayjs from 'dayjs';

type Props = {
  selectedDate: Date;
  moveWeek: (direction: number) => void;
  onClick: (date: Date) => void;
};

const RecodeCalendar = ({ selectedDate, moveWeek, onClick }: Props) => {
  const getWeekRange = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };

  const currentWeek = getWeekRange(selectedDate);

  return (
    <div className="bg-[#1A1A1A] rounded-2xl py-[20px] my-[20px] border-[1px] border-solid border-primary">
      <div className="mb-4 pb-4 border-solid border-b-[1px] border-[#2F2F2F] mx-[20px] flex items-center justify-between">
        <h2 className="text-[18px] font-medium">{dayjs(selectedDate).format('YYYY년 MM월')}</h2>
        <p className="text-[12px] text-[#888888]">
          오늘 <span className="text-primary">{dayjs(new Date()).format('YYYY년 MM월 DD일')}</span>
        </p>
      </div>
      <div className="flex">
        <button onClick={() => moveWeek(-1)}>
          <Arrow />
        </button>
        <div className="grid grid-cols-7 gap-2 flex-1">
          {currentWeek.map((date, index) => (
            <div
              key={index}
              className={`rounded-[100px] cursor-pointer text-center py-2 ${
                date.toDateString() === selectedDate.toDateString()
                  ? 'bg-primary text-black font-semibold'
                  : 'text-[#8C8C8C]'
              }`}
              onClick={() => onClick(date)}
            >
              <p className="text-[14px]">
                {date.toLocaleDateString('ko-KR', { weekday: 'short' })}
              </p>
              <p className="text-[14px]">{date.getDate()}</p>
            </div>
          ))}
        </div>
        <button onClick={() => moveWeek(1)}>
          <Arrow className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default RecodeCalendar;
