'use client';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import InfoTobContent from '@features/guide/info/InfoTobContent';
import { useRouter } from 'next/navigation';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const InfoPage = () => {
  const router = useRouter();

  return (
    <div>
      <TabBar name="운동 가이드" onClickBack={() => router.back()} />
      <BodyLayout>
        <InfoTobContent />
        <div className="py-[20px]">
          <p className="font-semibold mb-4">이름의 유래</p>
          <p className="font-medium text-[#B3B3B3]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
            laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam aspernatur.
            Excepturi omnis, quia accusamus consectetur quis maiores magnam reiciendis.
          </p>
        </div>
        <div className="py-[20px]">
          <p className="font-semibold mb-4">운동 방법</p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2">
              <p className="font-medium text-[#0A84FF]">01</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[#0A84FF]">02</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[#0A84FF]">03</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[20px]">
          <p className="font-semibold mb-4">⚠ 주의점</p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2">
              <p className="font-medium text-[#EA402A]">01</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[#EA402A]">02</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[#EA402A]">03</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[20px]">
          <p className="font-semibold mb-4">🍀 꿀팁</p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2">
              <p className="font-medium text-primary">01</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-primary">02</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-primary">03</p>
              <p className="font-medium text-[#B3B3B3]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, delectus totam
                laboriosam aspernatur magni maxime! Harum qui eligendi laudantium numquam
                aspernatur. Excepturi omnis, quia accusamus consectetur quis maiores magnam
                reiciendis.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[20px] pb-[160px]">
          <p className="font-semibold mb-4">운동 영상</p>
          <Swiper slidesPerView="auto" spaceBetween={14}>
            <SwiperSlide className="!w-fit">
              <div>
                <div className="w-[190px] h-[108px] bg-[#262626] rounded-md mb-3">img</div>
                <p className="text-[14px] mb-">유튜브제목</p>
                <p className="text-[#787878] text-[14px]">유튜버이름</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <div>
                <div className="w-[190px] h-[108px] bg-[#262626] rounded-md mb-3">img</div>
                <p className="text-[14px] mb-">유튜브제목</p>
                <p className="text-[#787878] text-[14px]">유튜버이름</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <div>
                <div className="w-[190px] h-[108px] bg-[#262626] rounded-md mb-3">img</div>
                <p className="text-[14px] mb-">유튜브제목</p>
                <p className="text-[#787878] text-[14px]">유튜버이름</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <div>
                <div className="w-[190px] h-[108px] bg-[#262626] rounded-md mb-3">img</div>
                <p className="text-[14px] mb-">유튜브제목</p>
                <p className="text-[#787878] text-[14px]">유튜버이름</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </BodyLayout>
    </div>
  );
};

export default InfoPage;
