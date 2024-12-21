import React from 'react';

type Props = {
  placeholder: string;
  className?: string;
};

const SearchInput = ({ placeholder, className }: Props) => {
  return (
    <div
      className={`bg-[#131313] h-[50px] p-[18px] rounded-[6px] flex items-center ${className || ''}`}
    >
      <input
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none placeholder:text-[#444444] font-medium"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className="cursor-pointer"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
        ></path>
      </svg>
    </div>
  );
};

export default SearchInput;
