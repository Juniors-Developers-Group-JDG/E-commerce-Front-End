'use client';

import Link from 'next/link';

import Footer, { designer_thaissa } from '@/components/Layout/Footer';
import RegisterForm from '@/components/Register/RegisterForm';

const Register = () => {
  return (
    <>
      <section className="bg-[#000033] flex-1 flex max-md:flex-col-reverse justify-evenly max-md:items-center max-md:justify-normal py-32 max-md:py-20 mt-4">
        <RegisterForm />
        <div className="max-md:mb-16">
          <h1 className="text-[2.25em] max-md:text-[1.5em] text-[#ffffff] uppercase">
            Possui uma conta?
          </h1>
          <span className="text-[#3282B8] max-md:text-[.875em]">
            Conecte-se
          </span>
          <Link
            href={'/login'}
            className="block text-center mt-10 w-full font-bold uppercase text-[2em] max-md:text-[1.5em] text-[#000033] bg-[#BBE1FA] rounded transition-all hover:scale-105"
          >
            Login
          </Link>
        </div>
      </section>
      <Footer name={designer_thaissa.name} link={designer_thaissa.link} />
    </>
  );
};

export default Register;
