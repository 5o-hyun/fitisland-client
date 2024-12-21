'use client';
import BodyLayout from '@components/Layouts/BodyLayout';
import TabBar from '@components/TabBar';
import React, { useState } from 'react';
import Avatar from 'public/profile/avatar.svg';
import { useRouter } from 'next/navigation';
import ProfileContent from '@features/profile/ProfileContent';
import useToggle from '@/lib/hooks/useToggle';
import Modal from '@components/Modal';
import BaseLayout from '@components/Layouts/BaseLayout';
import Navigation from '@components/Navigation';

const ProfilePage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [onePageReport, setOnePageReport] = useState(null);
  const [isOpenReportModal, toggleReportModal] = useToggle();
  const [isOpenLogoutModal, toggleLogoutModal] = useToggle();
  const [isOpenDeleteModal, toggleDeleteModal] = useToggle();

  const onClickOnePageReport = () => {
    // 한번도등록안했을때 -> 모달후, 수정후, 원페이지리포트 진입
    if (!onePageReport) {
      return toggleReportModal();
    }
    // 수정일때 -> 원페이지리포트 진입
    console.log('a');
  };
  return (
    <BaseLayout>
      <TabBar name="프로필" />
      <BodyLayout>
        <div className="my-[12px] flex items-center gap-[16px]">
          <Avatar className="w-[84px] h-[84px]" />
          <div>
            <p className="mb-[8px] text-[#505050] font-medium text-[14px]">???</p>
            <p className="font-medium">닉네임</p>
          </div>
        </div>
        <ProfileContent name="내 계정" onClick={() => router.push('/profile/mypage')} />
        <ProfileContent name="원페이지 리포트" onClick={onClickOnePageReport} />
        <ProfileContent name="레벨" onClick={() => console.log('a')} />
        <ProfileContent name="뱃지" onClick={() => console.log('a')} />
      </BodyLayout>
      <div className="bg-[#1e1e1e] h-[8px] w-full"></div>
      <BodyLayout>
        <ProfileContent name="로그아웃" onClick={toggleLogoutModal} />
        <ProfileContent name="회원탈퇴" onClick={toggleDeleteModal} />
      </BodyLayout>

      {isOpenReportModal && (
        <Modal
          type="okCancel"
          title="스펙을 입력하시겠습니까?"
          onCancel={toggleReportModal}
          onOk={() => {
            toggleReportModal();
            router.push('/profile/report/info');
          }}
          okText="입력"
        />
      )}
      {isOpenLogoutModal && (
        <Modal
          type="okCancel"
          title="로그아웃을 하시겠습니까?"
          okColor="red"
          onCancel={toggleLogoutModal}
          okText="로그아웃"
        />
      )}
      {isOpenDeleteModal && (
        <Modal
          type="okCancel"
          title="회원을 탈퇴하겠습니까?"
          okColor="red"
          onCancel={toggleDeleteModal}
          okText="탈퇴"
        />
      )}
      <Navigation />
    </BaseLayout>
  );
};

export default ProfilePage;
