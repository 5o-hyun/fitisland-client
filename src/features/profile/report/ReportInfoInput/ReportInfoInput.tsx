import React from 'react';

type Props = {
  label: string;
  placeholder: string;
  rightText?: string;
};

const ReportInfoInput = ({ label, placeholder, rightText }: Props) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="font-semibold text-[18px]">{label}</label>
      <div className="flex items-center">
        <input
          placeholder={placeholder}
          className="flex-1 border-2 border-solid border-[#434343] rounded-xl px-5 py-[14px] bg-transparent outline-none font-medium text-[18px] placeholder:text-[#434343]"
        />
        {rightText && (
          <p className="text-[#959595] font-semibold w-[40px] text-right">{rightText}</p>
        )}
      </div>
    </div>
  );
};

export default ReportInfoInput;
