'use client';

import { Krona_One, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import arrowImage from '@/assets/images/arrow.svg';
import cartImage from '@/assets/images/cart.svg';
import searchImage from '@/assets/images/search.svg';
import userImage from '@/assets/images/user.svg';

const krona_one = Krona_One({
  subsets: ['latin'],
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`flex items-center justify-between max-w-[90%] mt-[1em] mx-auto ${montserrat.className} max-md:flex-col`}
    >
      <Link href="/">
        <span
          className={`text-[2.8em] ${krona_one.className} block transition-all cursor-pointer hover:scale-[1.2] max-xl:text-[2.4em] max-lg:text-[1.5em] max-md:text-[2.5em]`}
        >
          Logo
        </span>
      </Link>
      <nav className="max-md:my-[1em]">
        <ul className="flex text-[1.375em] max-xl:text-[1.175em] max-lg:text-[1em] max-md:text-[.8em]">
          <Link
            className={`mx-[1em] ${
              montserrat.className
            } transition-all cursor-pointer hover:scale-[1.1] ${
              pathname == '/'
                ? 'font-bold border-b-[.1em] border-b- border-b-solid border-b-black'
                : ''
            }`}
            href="/"
          >
            Início
          </Link>
          <Link
            href="/products"
            className={`mx-[1em] ${
              montserrat.className
            } transition-all cursor-pointer hover:scale-[1.1] ${
              pathname == '/products'
                ? 'font-bold border-b-[.1em] border-b- border-b-solid border-b-black'
                : ''
            }`}
          >
            Produtos
          </Link>
          <Link
            href="/promotions"
            className={`mx-[1em] ${
              montserrat.className
            } transition-all cursor-pointer hover:scale-[1.1] ${
              pathname == '/promotions'
                ? 'font-bold border-b-[.1em] border-b- border-b-solid border-b-black'
                : ''
            }`}
          >
            Promoções
          </Link>
          <Link
            href="/contact"
            className={`mx-[1em] ${
              montserrat.className
            } transition-all cursor-pointer hover:scale-[1.1] ${
              pathname == '/contact'
                ? 'font-bold border-b-[.1em] border-b- border-b-solid border-b-black'
                : ''
            }`}
          >
            Contato
          </Link>
        </ul>
      </nav>
      <div className="relative">
        <Image
          className="absolute top-[.4em] left-[.8em]"
          src={searchImage}
          width={16}
          alt="Imagem lupa"
        />
        <input
          className={`border-[1px] border-solid border-[#3282B8] rounded-xl indent-[3.5em] py-[.2em] px-0 ${montserrat.className} max-lg:w-[9em] max-lg:indent-[2.5em] max-md:w-[11em]`}
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      <div className="flex max-md:mt-[1em]">
        <Link href="/cart" className="contents">
          <Image
            className="transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full"
            src={cartImage}
            width={30}
            alt="Imagem carrinho de compras"
          />
        </Link>
        <Image
          className="ml-[1.5em] transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full"
          src={userImage}
          width={30}
          alt="Imagem usuário"
        />
        <Image
          className="transition-all cursor-pointer hover:scale-[1.3] max-lg:w-[35%]"
          src={arrowImage}
          width={30}
          alt="Imagem seta para baixo"
        />
      </div>
    </header>
  );
};

export default Header;
