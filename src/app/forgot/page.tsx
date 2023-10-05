import Image from 'next/image';

// redirect pra login

import padlockImage from '@/assets/images/padlock.svg';

const Forgot = () => {
  return (
    <section className="min-h-[70%] bg-[#000033] flex justify-center items-center mt-[1em]">
      <div className="bg-[#ffffff] w-[31.25em] h-[18.75em] flex flex-col items-center max-md:text-[.9em]">
        <Image
          className="mt-[2em] mb-[.5em]"
          src={padlockImage}
          alt="Imagem cadeado"
          width={70}
          height={70}
        />
        <h4 className="font-calibri text-[1.5em] font-bold leading-[.8em]">
          Esqueceu a senha?
        </h4>
        <p className="font-calibri text-[#5F5F5F]">
          Insira o seu email para resetar a sua senha.
        </p>
        <form className="">
          <div className="relative mt-[1em] mb-[1em]">
            <label className="font-calibri absolute bg-[#ffffff] text-[.8em] font-bold left-[3%] bottom-[80%] px-[.5em]">
              Email
            </label>
            <input
              className="font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
              type="text"
              placeholder="exemplo@yourDomain.com"
            />
          </div>
          <input
            className="font-calibri font-bold text-[1.25em] text-[#ffffff] text-center bg-[#3282B8] px-[5em] py-[.5em] rounded-[.25em] cursor-pointer transition-all hover:bg-[#276690] max-md:px-[3em]"
            type="submit"
            value="Receber email"
          />
        </form>
      </div>
    </section>
  );
};

export default Forgot;
