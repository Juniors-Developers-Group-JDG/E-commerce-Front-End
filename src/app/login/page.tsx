'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Footer, { designer_thaissa } from '@/components/Layout/Footer';

const isValidEmail = (e: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(e);
};

const Login = () => {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!isValidEmail(email)) {
      console.error('invalid email format');
      return;
    }

    if (!email || !password) {
      console.error('Enter your email and password to proceed');
      return;
    }

    const response = await fetch(
      'https://e-commerce-backend-am7w.onrender.com/api/users/login/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );

    if (response.status === 200) {
      console.log('Logged in');
      router.push('/');
    } else {
      console.error('Invalid login credentials');
    }
  };

  return (
    <>
      <section className="flex-1 min-h-[70%] flex items-center  max-md:mt-[6em]">
        <div className="flex justify-around w-full max-md:flex-col max-md:items-center max-md:text-[.8em] max-md:gap-[4em] max-md:my-[4em]">
          <div>
            <h4 className="text-[3em] font-calibri leading-[.8em]">
              Possui uma conta?
            </h4>
            <span className="text-[#3282B8] font-calibri">
              Informe os dados para acessa-la
            </span>
            <form className="flex flex-col mb-[1em]" onSubmit={handleLogin}>
              <input
                name="email"
                className="w-[21.875em] h-[3.669em] bg-[#000000] text-[#ffffff] rounded-[.25em] mt-[1.313em] mb-[1.875em] p-[1em] outline-none hover:ring hover:ring-[#3282B8] focus:ring focus:ring-[#BBE1FA]"
                type="text"
                placeholder="Login"
              />
              <input
                name="password"
                className="w-[21.875em] h-[3.669em] bg-[#000000] text-[#ffffff] rounded-[.25em] p-[1em] outline-none hover:ring hover:ring-[#3282B8] focus:ring focus:ring-[#BBE1FA]"
                type="text"
                placeholder="Senha"
              />
              <div className="my-[1em]">
                <label className="flex gap-[.5em]">
                  <input type="checkbox" name="user-data" />
                  Lembrar meus dados
                </label>
              </div>
              <input
                type="submit"
                value="Acessar"
                className="bg-[#3282B8] font-bold text-[2.25em] text-[#ffffff] uppercase rounded-[.25em] cursor-pointer transition-all hover:bg-[#276690]"
              />
            </form>
            <Link
              className="font-calibri text-[1.125em] text-[#000033] transition-all hover:text-[#3D95D0] hover:underline"
              href={'/forgot'}
            >
              Esqueci a minha senha
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-calibri text-[2.5em] text-[#000033] leading-[.8em]">
              Não tem uma conta?
            </h4>
            <span className="font-calibri text-[#3282B8]">Criar agora.</span>
            <Link
              className="font-calibri bg-[#BBE1FA] font-bold text-[#000033] text-[2.25em] rounded-[.25em] text-center uppercase mt-[1.5em] transition-all hover:bg-[#3282B8]"
              href={'/register'}
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </section>
      <Footer name={designer_thaissa.name} link={designer_thaissa.link} />
    </>
  );
};

export default Login;
