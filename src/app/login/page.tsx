import React from 'react';
import Symbol from 'public/login/symbol.svg';
import BodyLayout from '@components/Layouts/BodyLayout';
import GoogleiIcon from 'public/login/google.svg';
const LoginPage = () => {
  return (
    <BodyLayout>
      <div className="pt-[170px] flex justify-center">
        <Symbol />
        <a
          href="#none"
          className="w-[calc(100%-40px)] desktop:w-[353px] h-[58px] leading-[58px] rounded-[100px] bg-[#F5F5F5] fixed bottom-40"
        >
          <GoogleiIcon className="absolute left-[16px] top-[50%] translate-y-[-50%]" />
          <p className="flex-1 text-center text-black font-semibold">구글로 시작하기</p>
        </a>
      </div>
    </BodyLayout>
  );
};

export default LoginPage;
