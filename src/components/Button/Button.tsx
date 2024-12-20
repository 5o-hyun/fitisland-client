import React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  buttonType?: 'default' | 'fixed';
};

const Button = ({ name, buttonType = 'default', className, ...props }: Props) => {
  return (
    <button
      className={clsx(
        `h-[58px] bg-primary text-black rounded-[100px] font-bold ${buttonType === 'fixed' ? 'fixed bottom-[55px] w-[calc(100%-40px)] desktop:w-[353px] left-[50%] translate-x-[-50%]' : 'w-full'}`,
        className,
      )}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
