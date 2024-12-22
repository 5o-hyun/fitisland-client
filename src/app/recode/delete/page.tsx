'use client';
import useToggle from '@/lib/hooks/useToggle';
import BaseLayout from '@components/Layouts/BaseLayout';
import BodyLayout from '@components/Layouts/BodyLayout';
import Modal from '@components/Modal';
import TabBar from '@components/TabBar';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineMenu, HiOutlineTrash } from 'react-icons/hi';

const RecodeDeletePage = () => {
  const router = useRouter();
  const [isOpenDeleteModal, toggleDeleteModal] = useToggle();

  return (
    <>
      <BaseLayout>
        <TabBar
          name="운동 일지 기록하기"
          rightText="완료"
          onClickBack={() => router.back()}
          onClickRight={() => router.back()}
        />
        <BodyLayout className="mt-5 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 flex gap-4 flex-1">
              <HiOutlineMenu className="w-5 h-5 cursor-grab" />
              <div className="flex font-medium gap-2 items-end">
                <p>벤치프레스</p>
                <p className="text-[14px] text-[#505050]">등,가슴</p>
              </div>
            </div>
            <div
              className="bg-[#FF5D5E] cursor-pointer w-12 h-12 rounded-xl text-black flex justify-center items-center"
              onClick={toggleDeleteModal}
            >
              <HiOutlineTrash className="w-6 h-6" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 flex gap-4 flex-1">
              <HiOutlineMenu className="w-5 h-5 cursor-grab" />
              <div className="flex font-medium gap-2 items-end">
                <p>벤치프레스</p>
                <p className="text-[14px] text-[#505050]">등,가슴</p>
              </div>
            </div>
            <div
              className="bg-[#FF5D5E] cursor-pointer w-12 h-12 rounded-xl text-black flex justify-center items-center"
              onClick={toggleDeleteModal}
            >
              <HiOutlineTrash className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 flex gap-4 flex-1">
              <HiOutlineMenu className="w-5 h-5 cursor-grab" />
              <div className="flex font-medium gap-2 items-end">
                <p>벤치프레스</p>
                <p className="text-[14px] text-[#505050]">등,가슴</p>
              </div>
            </div>
            <div
              className="bg-[#FF5D5E] cursor-pointer w-12 h-12 rounded-xl text-black flex justify-center items-center"
              onClick={toggleDeleteModal}
            >
              <HiOutlineTrash className="w-6 h-6" />
            </div>
          </div>
        </BodyLayout>
        {isOpenDeleteModal && (
          <Modal
            title="운동을 삭제하시겠습니까?"
            type="okCancel"
            okColor="red"
            okText="삭제"
            onCancel={toggleDeleteModal}
          />
        )}
      </BaseLayout>
    </>
  );
};

export default RecodeDeletePage;
