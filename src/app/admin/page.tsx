'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

import Footer, { designer_thaissa } from '@/components/Layout/Footer';

const Admin = () => {
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push('/');
  };

  return (
    <>
      <section className="min-h-[70%] bg-[#000033] flex justify-center items-center mt-[1em]">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ffffff] w-[41.25em] h-[31.25em] flex flex-col items-center max-md:text-[.9em]"
        >
          <div className="mt-[1.8em] max-md:mt-0">
            <div className="flex gap-[4em] mb-[2.5em] max-md:gap-0 max-md:mb-0 max-md:flex-col">
              <div className="w-[22em] flex flex-col gap-[0.5em] max-md:gap-0">
                <label className="font-calibri font-bold text-[1.25em]">
                  Nome
                </label>
                <input
                  className="h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                  type="text"
                />
              </div>
              <div className="w-[9.375em] flex flex-col gap-[0.5em] max-md:gap-0">
                <label className="font-calibri font-bold text-[1.25em]">
                  Preço
                </label>
                <input
                  className="placeholder:text-[#000000] h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                  type="number"
                  placeholder="R$ 0,00"
                />
              </div>
            </div>
            <div className="flex justify-between mb-[2.5em] max-md:mb-0 max-md:flex-col">
              <div className="w-[15.625em] flex flex-col gap-[0.5em] max-md:gap-0">
                <label className="font-calibri font-bold text-[1.25em]">
                  Categoria
                </label>
                <select
                  defaultValue={'default'}
                  className="text-[#000000] h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                >
                  <option value="default" disabled>
                    Selecione a categoria
                  </option>
                  <option value="mouse">Mouse</option>
                  <option value="teclado">Teclado</option>
                  <option value="microfone">Microfone</option>
                </select>
              </div>
              <div className="w-[15.625em] flex flex-col gap-[0.5em] max-md:gap-0">
                <label className="font-calibri font-bold text-[1.25em]">
                  Quantidade
                </label>
                <input
                  className="placeholder:text-[#000000] h-[2.5em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full"
                  type="number"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[0.5em] max-md:gap-0">
              <label className="font-calibri font-bold text-[1.25em]">
                Descrição
              </label>
              <textarea className="resize-none h-[5.75em] font-calibri border-solid border-[#000000] border-[.125em] rounded-[.25em] px-[1em] py-[.5em] w-full" />
            </div>
            <input
              className="mt-[1em] h-[2.813em] w-full bg-[#3282B8] font-bold text-[1.15em] text-[#ffffff] uppercase cursor-pointer transition-all hover:bg-[#276690]"
              type="submit"
              value="Adicionar Produto"
            />
          </div>
        </form>
      </section>
      <Footer name={designer_thaissa.name} link={designer_thaissa.link} />
    </>
  );
};

export default Admin;
