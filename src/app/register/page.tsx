'use client';

import RegisterForm from '@/components/Register/RegisterForm';
import Link from 'next/link';

const Register = () => {
  return (
    <div className="bg-[#000033] flex max-md:flex-col-reverse justify-evenly max-md:items-center max-md:justify-normal py-32 max-md:py-20 mt-4">
      <RegisterForm />
      <div className="max-md:mb-16">
        <h1 className="text-[2.25em] max-md:text-[1.5em] text-[#ffffff] uppercase">
          Possui uma conta?
        </h1>
        <span className="text-[#3282B8] max-md:text-[.875em]">Conecte-se</span>
        <Link
          href={'/login'}
          className="block text-center mt-10 w-full font-bold uppercase text-[2em] max-md:text-[1.5em] text-[#000033] bg-[#BBE1FA] rounded transition-all hover:scale-105"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
