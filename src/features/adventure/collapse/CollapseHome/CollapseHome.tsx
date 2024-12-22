import React, { useState } from 'react';
import Arrow from 'public/home/arrow.svg';

interface CollapseProps {
  title: string;
  subItems?: { title: string; content: string }[];
}

const Collapse: React.FC<CollapseProps> = ({ title, subItems }) => {
  const [isMainChecked, setIsMainChecked] = useState(false);
  const [openSubItems, setOpenSubItems] = useState<boolean[]>(subItems?.map(() => false) || []);

  const toggleMainCollapse = () => {
    setIsMainChecked((prev) => !prev);
  };

  const toggleSubItem = (index: number) => {
    setOpenSubItems((prev) => prev.map((item, idx) => (idx === index ? !item : item)));
  };

  return (
    <div className="collapse bg-[#1A1A1A] mb-5">
      <input
        type="checkbox"
        checked={isMainChecked}
        onChange={toggleMainCollapse}
        className="hidden"
      />
      <div
        className="collapse-title font-medium flex justify-between w-full px-5 cursor-pointer"
        onClick={toggleMainCollapse}
      >
        <div className="flex flex-col gap-2">
          <p>{title}</p>
          <div className="flex items-center gap-5 text-[#505050] text-[14px]">
            <p>총 볼륨 : ?</p>
            <p>획득 포인트 : ?</p>
            <p>운동 시각 : ?</p>
          </div>
        </div>
        <Arrow className={isMainChecked ? 'rotate-90' : 'rotate-[270deg]'} />
      </div>
      <div
        className={`collapse-content border-t-[1px] border-solid border-[#00783E] px-5 ${
          isMainChecked ? 'block' : 'hidden'
        }`}
      >
        <div className="pt-4">
          {subItems?.map((item, index) => (
            <div
              key={index}
              className="collapse rounded-none bg-[#1A1A1A] border-b-[1px] border-solid border-[#343434] mb-3"
            >
              <input
                type="checkbox"
                checked={openSubItems[index]}
                onChange={() => toggleSubItem(index)}
                hidden
              />
              <div
                className="collapse-title font-medium flex justify-between w-full p-0"
                onClick={() => toggleSubItem(index)}
              >
                <div className="flex flex-col gap-2">
                  <p>{item.title}</p>
                  <div className="flex items-center gap-5 text-[#505050] text-[14px]">
                    <p>총 볼륨 : ?</p>
                    <p>획득 포인트 : ?</p>
                    <p>운동 시각 : ?</p>
                  </div>
                </div>
                <Arrow className={openSubItems[index] ? 'rotate-90' : 'rotate-[270deg]'} />
              </div>
              <div className={`collapse-content ${openSubItems[index] ? 'block' : 'hidden'}`}>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
