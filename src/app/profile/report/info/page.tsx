'use client';
import Button from '@components/Button';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import ReportInfoInput from '@features/profile/report/ReportInfoInput';
import ReportInfoRadio from '@features/profile/report/ReportInfoRadio';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useToggle from '@/lib/hooks/useToggle';
import Modal from '@components/Modal';

const ReportInfoPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isOpenConfirmModal, toggleConfirmModal] = useToggle();
  const genders = ['남자', '여자'];
  const weights = [
    '마른형',
    '근육 없고 배나온 보통',
    '보통',
    '근육형',
    '초근육형',
    '근돼형',
    '비만형',
  ];
  const purposes = ['살빼기', '근력증가', '살찌우기', '근육증가'];

  return (
    <>
      {step === 1 && (
        <>
          <TabBar name="기본정보 작성" onClickBack={() => router.back()} />
          <BodyLayout>
            <p className="mt-[30px] font-bold text-[20px]">기본 정보를 입력해주세요</p>
            <p className="text-[#888888] font-medium text-[12px] mb-[45px]">
              추후에 스펙을 변경할 수 있습니다.
            </p>
            <div className="flex flex-col gap-[30px] pb-[140px]">
              <ReportInfoInput label="이름" placeholder="이름" />
              <ReportInfoRadio label="성별" datas={genders} size="small" />
              <ReportInfoInput label="나이" placeholder="만 나이를 입력하세요." rightText="세" />
              <ReportInfoInput label="키" placeholder="키를 입력하세요." rightText="cm" />
              <ReportInfoInput label="몸무게" placeholder="몸무게를 입력하세요." rightText="cm" />
              <ReportInfoRadio label="체지방" datas={weights} />
            </div>
            <Button name="다음" buttonType="fixed" onClick={() => setStep(2)} />
          </BodyLayout>
        </>
      )}
      {step === 2 && (
        <>
          <TabBar name="운동목적 설정" onClickBack={() => setStep(1)} />
          <BodyLayout>
            <p className="mt-[30px] font-bold text-[20px]">운동 목적을 설정해주세요.</p>
            <p className="text-[#888888] font-medium text-[12px] mb-[45px]">
              추후에 스펙을 변경할 수 있습니다.
            </p>
            <ReportInfoRadio datas={purposes} />
            <Button name="스펙 작성 완료" buttonType="fixed" onClick={toggleConfirmModal} />
          </BodyLayout>
        </>
      )}
      {isOpenConfirmModal && (
        <Modal
          title="스펙 정보가 입력되었습니다!"
          onOk={() => {
            toggleConfirmModal();
            setStep(1);
            router.push('/profile/report');
          }}
        />
      )}
    </>
  );
};

export default ReportInfoPage;
