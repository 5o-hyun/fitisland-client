'use client';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  title: string;
  datas: string[];
  selectedData?: string[];
  activeColor?: 'primary' | 'blue';
  onclick: (name: string) => void;
};

const GuideChipList = ({ title, datas, selectedData, activeColor = 'primary', onclick }: Props) => {
  return (
    <div className="my-2 flex items-center">
      <p className="font-bold text-[#e9e9e9] min-w-[100px]">{title}</p>
      <div className="overflow-auto">
        <Swiper slidesPerView="auto" spaceBetween={10}>
          {datas.map((data: string, index: number) => (
            <SwiperSlide key={index} className="!w-fit">
              <button
                className={`w-fit border-solid rounded-[10px] px-[14px] py-2 ${
                  selectedData?.includes(data)
                    ? activeColor === 'primary'
                      ? 'border-primary text-primary border-[1.5px]' // acviteColor green 일떄
                      : 'border-[#0A84FF] text-[#0A84FF] border-[1.5px]' // activeColor blue 일떄
                    : 'border-[#181818] text-[#787878] border-[1px] ' // 기본
                }`}
                onClick={() => onclick(data)}
              >
                {data}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GuideChipList;
