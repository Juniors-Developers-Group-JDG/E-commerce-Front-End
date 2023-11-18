'use client';

import { Krona_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import facebookImage from '@/assets/images/facebook.svg';
import instagramImage from '@/assets/images/instagram.svg';
import linkedinImage from '@/assets/images/linkedin.svg';
import whatsappImage from '@/assets/images/whatsapp.svg';

const krona_one = Krona_One({
  subsets: ['latin'],
  weight: '400',
});

interface designerType {
  name: string;
  link: string;
}

export const designer_mylena: designerType = {
  name: 'Mylena Cardoso da Costa',
  link: 'https://www.linkedin.com/in/mylena-costa-748160254/',
};

export const designer_thaissa: designerType = {
  name: 'Thaissa Carvalho',
  link: 'https://www.linkedin.com/in/thaissa-carvalho-dos-santos/',
};

export const designer_juan: designerType = {
  name: 'Juan Garcia',
  link: 'https://www.linkedin.com/in/juan-garcia-5b8951214/',
};

export const designer_rafael: designerType = {
  name: 'Rafael Lopes',
  link: 'https://www.linkedin.com/in/rafalopesdev/',
};

const Footer = ({ name, link }: designerType) => {
  const [designer] = useState<designerType>({ name, link });

  return (
    <footer className="mt-[2em] relative bottom-0">
      <section className="my-[2em] flex w-[90%] mx-auto justify-between max-md:flex-col">
        <div className="self-center max-md:self-auto">
          <Link href="/">
            <span
              className={`text-[2.8em] ${krona_one.className} block transition-all cursor-pointer hover:scale-[1.2]`}
            >
              Logo
            </span>
          </Link>
          <div className="flex gap-[.8em]">
            <Image
              src={instagramImage}
              alt="Logo Instagram"
              className="transition-all cursor-pointer hover:scale-[1.2]"
            />
            <Image
              src={linkedinImage}
              alt="Logo Linkedin"
              className="transition-all cursor-pointer hover:scale-[1.2]"
            />
            <Image
              src={facebookImage}
              alt="Logo Facebook"
              className="transition-all cursor-pointer hover:scale-[1.2]"
            />
            <Image
              src={whatsappImage}
              alt="Logo Whatsapp"
              className="transition-all cursor-pointer hover:scale-[1.2]"
            />
          </div>
        </div>
        <div className="flex flex-col font-bold text-[1.5em] max-lg:text-[1em] max-md:mt-[1em]">
          <Link
            href="/"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Início
          </Link>
          <Link
            href="/products"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Produtos
          </Link>
          <Link
            href="/promotions"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Promoções
          </Link>
        </div>
        <div className="flex flex-col font-bold text-[1.5em] max-lg:text-[1em] max-md:mt-[1em]">
          <Link
            href="/"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Sobre nós
          </Link>
          <Link
            href="/"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            FAQ
          </Link>
          <Link
            href="/"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Termos e condições
          </Link>
        </div>
        <div className="flex flex-col font-bold text-[1.5em] max-lg:text-[1em] max-md:mt-[1em]">
          <Link
            href="/"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Devolução e frete
          </Link>
          <Link
            href="/contact"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Contato
          </Link>
          <Link
            href="/"
            className="transition-all cursor-pointer hover:scale-[1.1] mb-[.5em]"
          >
            Formas de pagamento
          </Link>
        </div>
      </section>
      <section className="border-t-black border-t-[1px] border-t-solid flex justify-center p-[2em]">
        <span className="text-[1.5em] font-bold max-lg:text-[1em]">
          Design por{' '}
          <Link
            href={designer.link}
            target="_blank"
            className="transition-all cursor-pointer inline-block hover:scale-[1.01]"
          >
            {designer.name}
          </Link>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
