'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import searchImage from '@/assets/images/layout/search.svg';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Search = () => {
  const router = useRouter();

  const handleSearchProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget as HTMLFormElement;
    const textValue = (
      currentTarget.elements[0] as HTMLInputElement
    ).value.toLowerCase();

    router.replace(`/products?search=${textValue}`);
  };

  return (
    <form onSubmit={handleSearchProduct} className="relative">
      <Image
        className="absolute top-[.4em] left-[.8em]"
        src={searchImage}
        width={16}
        height={16}
        alt="Imagem lupa"
      />
      <input
        className={`border-[1px] border-solid border-[#3282B8] rounded-xl indent-[3.5em] py-[.2em] px-0 ${montserrat.className} max-lg:w-[9em] max-lg:indent-[2.5em] max-md:w-[11em]`}
        type="text"
        placeholder="Pesquisar"
      />
    </form>
  );
};

export default Search;
