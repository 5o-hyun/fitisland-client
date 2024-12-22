import useToggle from '@/lib/hooks/useToggle';
import Modal from '@components/Modal';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const CollapseUpdate = () => {
  const [isOpenDeleteModal, toggleDeleteModal] = useToggle();

  return (
    <>
      <div className="bg-[#131313] rounded-2xl pt-5">
        <div className="flex items-center justify-between border-b-2 border-solid border-[#00783E] px-5 pb-5">
          <div className="flex flex-col">
            <p>운동 기록</p>
            <div className="flex items-center gap-5 text-[#505050] text-[14px]">
              <p>총 볼륨 : ?</p>
              <p>획득 포인트 : ?</p>
              <p>운동 시각 : ?</p>
            </div>
          </div>
          <HiOutlineTrash
            className="w-6 h-6 text-[#FF5D5E] cursor-pointer"
            onClick={toggleDeleteModal}
          />
        </div>
        <div className="p-5">
          <div>
            <div className="flex items-center justify-between border-b-[1px] border-solid border-[#343434] pb-3 mb-3">
              <div className="flex flex-col">
                <p>운동 기록</p>
                <div className="flex items-center gap-5 text-[#505050] text-[14px]">
                  <p>총 볼륨 : 2500kg</p>
                  <p>획득 포인트 : 78pt</p>
                </div>
              </div>
              <HiOutlineTrash
                className="w-6 h-6 text-[#FF5D5E] cursor-pointer"
                onClick={toggleDeleteModal}
              />
            </div>
            <div className="grid grid-cols-6 gap-1 text-[#B8B8B8] text-center">
              <p>번호</p>
              <p>무게</p>
              <p>횟수</p>
              <p>볼륨</p>
              <p>포인트</p>
              <p></p>
              <p className="leading-[48px]">1</p>
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <div className="flex justify-end items-center">
                <HiOutlineTrash
                  className="w-6 h-6 text-[#FF5D5E] cursor-pointer"
                  onClick={toggleDeleteModal}
                />
              </div>
              <p className="leading-[48px]">2</p>
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <div className="flex justify-end items-center">
                <HiOutlineTrash
                  className="w-6 h-6 text-[#FF5D5E] cursor-pointer"
                  onClick={toggleDeleteModal}
                />
              </div>
              <p className="leading-[48px]">3</p>
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <input className="rounded-xl outline-none py-3 text-center bg-[#242424]" />
              <div className="flex justify-end items-center">
                <HiOutlineTrash
                  className="w-6 h-6 text-[#FF5D5E] cursor-pointer"
                  onClick={toggleDeleteModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenDeleteModal && (
        <Modal
          title="운동 기록을 제거하시겠습니까?"
          type="okCancel"
          okText="삭제"
          okColor="red"
          onCancel={toggleDeleteModal}
        />
      )}
    </>
  );
};

export default CollapseUpdate;
