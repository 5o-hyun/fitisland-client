import React from 'react';

type Props = {
  label?: string;
  datas: string[];
  size?: 'small' | 'large';
  name?: string;
};

const ReportInfoRadio = ({ label, datas, size = 'large', name }: Props) => {
  const uniqueName = name || `radio-group-${Math.random().toString(36).substr(2, 9)}`;

  if (!datas) return;
  return (
    <div className="flex flex-col gap-[6px]">
      {label && <label className="font-semibold text-[18px]">{label}</label>}
      <div className="grid grid-cols-2 gap-[6px]">
        {datas.map((data, index) => (
          <div
            key={index}
            className={`w-full ${size === 'large' ? 'leading-[68px] h-[68px]' : 'leading-[48px] h-[48px]'}`}
          >
            <input
              type="radio"
              id={`radio-${index}`}
              value={data}
              name={uniqueName}
              className="peer"
              hidden
            />
            <label
              htmlFor={`radio-${index}`}
              className="block bg-[#282828] rounded-xl text-[#5C5C5C] w-full h-full font-bold text-center cursor-pointer border-2 border-solid border-transparent hover:bg-[#3a3a3a] peer-checked:border-primary peer-checked:text-primary peer-checked:bg-transparent"
            >
              {data}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportInfoRadio;
