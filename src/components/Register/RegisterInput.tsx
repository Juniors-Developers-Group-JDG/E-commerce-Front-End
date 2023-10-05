'use client';

import { useState } from 'react';
import Image from 'next/image';

import showPassword from '@/assets/images/show-password.svg';
import hidePassword from '@/assets/images/hide-password.svg';

type RegisterInputProps = React.ComponentProps<'input'> & {
  label: string;
  id: string;
  type: string;
  isPassword?: boolean;
};

const RegisterInput = ({
  label,
  id,
  isPassword,
  type,
  ...props
}: RegisterInputProps) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  const handleTogglePasswordValueClick = () => {
    setIsPasswordShowing(state => !state);
  };
  return (
    <div className="mb-4 relative">
      <span className="absolute top-[-7px] left-2 px-1 bg-white text-[.625rem] font-bold">
        {label}
      </span>
      <label htmlFor={id} />
      <input
        type={isPassword && isPasswordShowing ? 'text' : type}
        name={id}
        id={id}
        {...props}
        className="border-2 border-[#BBE1FA] rounded p-2 text-[.875em] w-full outline-[#3282B8] transition-all hover:border-[#3282B8]"
      />
      {isPassword && (
        <div
          onClick={handleTogglePasswordValueClick}
          className="absolute flex justify-end items-center top-0 right-2 h-full"
        >
          {isPasswordShowing ? (
            <Image
              alt="Hide password button"
              src={hidePassword}
              className="cursor-pointer"
              title="Esconder senha"
            />
          ) : (
            <Image
              alt="Show password button"
              src={showPassword}
              className="cursor-pointer"
              title="Mostrar senha"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterInput;
