'use client';
import useToggle from '@/lib/hooks/useToggle';
import BodyLayout from '@components/Layouts/BodyLayout';
import Modal from '@components/Modal';
import TabBar from '@components/TabBar';
import MypageContent from '@features/profile/mypage/MypageContent';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Close from 'public/profile/mypage-close.svg';

const MyPage = () => {
  const router = useRouter();
  const [selectName, setSelectName] = useState<string>();
  const [isOpenModal, toggleOpenModal] = useToggle();
  const onClick = (name: string) => {
    setSelectName(name);
    toggleOpenModal();
    console.log('a');
  };

  return (
    <div>
      <TabBar name="내 계정" onClickBack={() => router.back()} />
      <BodyLayout className="mt-[18px]">
        <MypageContent name="이름" info="김아무개" onClick={() => onClick('이름')} />
        <MypageContent name="생년월일" info="1995년 5월 22일" onClick={() => onClick('생년월일')} />
        <MypageContent name="성별" info="여자" onClick={() => onClick('성별')} />
        <MypageContent name="직업" info="??" onClick={() => onClick('직업')} />
      </BodyLayout>
      {isOpenModal && (
        <Modal
          title={`새로운 ${selectName}을 입력해주세요.`}
          type="okCancel"
          okText="변경"
          onCancel={toggleOpenModal}
        >
          <div className="border-2 border-solid border-[#888888] rounded-xl py-3 pl-5 pr-2 flex mb-4">
            <input
              placeholder="최대 10글자"
              className="font-medium text-[18px] placeholder:text-[#666666] bg-transparent outline-none w-full"
            />
            <Close className="flex-shrink-0" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyPage;
