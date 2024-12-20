import React from 'react';

type Props = {
  type?: 'ok' | 'okCancel';
  title: string;
  okColor?: 'blue' | 'red';
  okText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onOk?: () => void;
};

const Modal = ({
  type = 'ok',
  title,
  okColor = 'blue',
  okText,
  cancelText,
  onCancel,
  onOk,
}: Props) => {
  return (
    <div className="fixed top-0 left-[50%] translate-x-[-50%] w-full desktop:w-[393px] h-full z-50">
      <div className="bg-[rgba(0,0,0,.6)] w-full h-full absolute"></div>
      <div className="w-[335px] bg-[#313131] rounded-[12px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[20px] py-[18px]">
        <p className="text-[18px] text-center py-[10px] mb-4">{title}</p>
        <div className="w-full h-[50px] flex gap-2">
          {type === 'okCancel' && (
            <button
              className="bg-[#888888] font-bold w-full h-full rounded-[8px] text-black"
              onClick={onCancel}
            >
              {cancelText ? cancelText : '취소'}
            </button>
          )}
          <button
            className={`${okColor === 'blue' ? 'bg-[#3281DF]' : 'bg-[#FF5D5E]'} font-bold w-full h-full rounded-[8px] text-black`}
            onClick={onOk}
          >
            {okText ? okText : '확인'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
