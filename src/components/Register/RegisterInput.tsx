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
  const [showValue, setShowValue] = useState(false);

  const handleTogglePasswordValueClick = () => {
    setShowValue(state => !state);
  };
  return (
    <div className="mb-4 relative">
      <label htmlFor={id}></label>
      <input
        type={isPassword && showValue ? 'text' : type}
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
          {showValue ? (
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
