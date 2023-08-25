import { Krona_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import facebookImage from '@/assets/images/facebook.svg';
import instagramImage from '@/assets/images/instagram.svg';
import linkedinImage from '@/assets/images/linkedin.svg';
import whatsappImage from '@/assets/images/whatsapp.svg';

const krona_one = Krona_One({
  subsets: ['latin'],
  weight: '400',
});

const Footer = () => {
  return (
    <footer>
      <section className="bg-[#000033] h-[8.75em] flex items-center text-white font-bold text-justify text-[1.5em]">
        <p className="ml-[2em]">Frete grátis em compras acima de R$ 200,00</p>
        <div className="w-[.25em] h-[5.75em] bg-white mx-[2.5em]"></div>
        <p>Envio em até 24 horas após o pagamento</p>
        <div className="w-[.25em] h-[5.75em] bg-white mx-[2.5em]"></div>
        <p>Frete grátis em compras acima de R$ 200,00</p>
        <div className="w-[.25em] h-[5.75em] bg-white mx-[2.5em]"></div>
        <p className="mr-[2em]">Envio em até 24 horas após o pagamento</p>
      </section>
      <section className="my-[2em] flex w-[90%] mx-auto justify-between">
        <div className="self-center">
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
        <div className="flex flex-col font-bold text-[1.5em]">
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
        <div className="flex flex-col font-bold text-[1.5em]">
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
        <div className="flex flex-col font-bold text-[1.5em]">
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
        <span className="text-[1.5em] font-bold">
          Design por Mylena Cardoso da Costa
        </span>
      </section>
    </footer>
  );
};

export default Footer;
