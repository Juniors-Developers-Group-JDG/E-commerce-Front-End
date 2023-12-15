'use client';

import { Krona_One, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import arrowImage from '@/assets/images/layout/arrow.svg';
import cartImage from '@/assets/images/layout/cart.svg';
import userImage from '@/assets/images/layout/user.svg';
import Search from '@/components/Layout/Search';

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

  const handleNavBar = (changePage: boolean = false) => {
    const menu = document.querySelector('#menu') as HTMLDivElement;
    const sidebar = document.querySelector('#sidebar') as HTMLDivElement;
    const menuChilds = Array.from(menu.children);
    if (menu && sidebar) {
      if (changePage) {
        sidebar.classList.remove('display-flex'),
          sidebar.classList.add('display-none'),
          menuChilds.forEach(divChild => {
            (divChild as HTMLDivElement).classList.remove('styled-menu');
          });
      } else {
        sidebar.classList.contains('display-none')
          ? (sidebar.classList.remove('display-none'),
            sidebar.classList.add('display-flex'),
            menuChilds.forEach(divChild => {
              (divChild as HTMLDivElement).classList.add('styled-menu');
            }))
          : (sidebar.classList.remove('display-flex'),
            sidebar.classList.add('display-none'),
            menuChilds.forEach(divChild => {
              (divChild as HTMLDivElement).classList.remove('styled-menu');
            }));
      }
    }
  };

  useEffect(() => {
    handleNavBar(true);
  }, [pathname]);

  return (
    <header
      className={`flex items-center justify-between w-full max-w-[95%] mt-[1em] mx-auto ${montserrat.className} max-md:flex-col max-md:fixed max-md:z-50 max-md:bg-white max-md:mt-0 max-md:top-0 max-md:max-w-full max-md:py-[1em] max-md:justify-center border-solid border-[.2em] border-transparent max-md:border-b-[#000033]`}
    >
      <Link href="/">
        <span
          className={`text-[2.8em] ${krona_one.className} block transition-all cursor-pointer hover:scale-[1.2] max-xl:text-[2.4em] max-lg:text-[1.5em] max-md:text-[2.5em]`}
        >
          Logo
        </span>
      </Link>
      <nav className="max-md:hidden">
        <ul className="flex text-[1.375em] max-xl:text-[1.175em] max-lg:text-[1em]">
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
      <div className="flex gap-[4em] items-center max-md:hidden max-lg:gap-[1em]">
        <Search />
        <div className="flex w-full justify-evenly">
          <Link href="/cart" className="contents">
            <Image
              className="transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full"
              src={cartImage}
              width={30}
              height={30}
              alt="Imagem carrinho de compras"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <div className="flex">
            <Link href={'/login'} className="contents">
              <Image
                className="lg:ml-[1.5em] transition-all cursor-pointer hover:scale-[1.1] max-lg:w-[35%] max-md:w-full"
                src={userImage}
                width={30}
                height={30}
                alt="Imagem usuário"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <Image
              className="transition-all cursor-pointer hover:scale-[1.3] max-lg:w-[35%]"
              src={arrowImage}
              width={30}
              height={30}
              alt="Imagem seta para baixo"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      <button
        id="menu"
        onClick={() => handleNavBar()}
        className="md:hidden w-[3.5em] h-[2.5em] absolute right-[5%] flex flex-col justify-between cursor-pointer"
      >
        <div className="w-full border-solid border-[.25em] border-[#000033] rounded-[1em] transition-all"></div>
        <div className="w-full border-solid border-[.25em] border-[#000033] rounded-[1em] transition-all"></div>
        <div className="w-full border-solid border-[.25em] border-[#000033] rounded-[1em] transition-all"></div>
      </button>
      <section
        id="sidebar"
        className="display-none absolute right-0 top-[5.75em] flex-col p-[1em] animate-sidebar text-[#FFFFFF] max-md:gap-[1em] border-solid border-[.313em] border-[#FFF8F0] border-r-0 bg-[#000033] rounded-tl-[.5em] rounded-bl-[1em] z-10 uppercase tracking-[.25em] font-bold"
      >
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
      </section>
    </header>
  );
};

export default Header;
