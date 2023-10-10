import Image from 'next/image';
import Link from 'next/link';

import arrowImage from '@/assets/images/arrow.svg';
import headsetImage from '@/assets/images/headset.svg';
import microphoneImage from '@/assets/images/microphone.svg';
import mouseImage from '@/assets/images/mouse.svg';
import projectorImage from '@/assets/images/projector.svg';
import windowsImage from '@/assets/images/windows.svg';
import XImage from '@/assets/images/X.svg';

import Product from '../Product';

const Banner = () => {
  return (
    <article className="my-[2em]">
      <section className="bg-[#000033] rounded-[0.625em] w-[95%] h-[35em] mx-auto text-white font-bold flex justify-around items-center max-md:h-auto max-md:flex-col-reverse">
        <div className="w-[40%] flex flex-col justify-evenly h-full max-lg:mx-[4em] max-lg:w-[65%] max-md:mb-[5em] max-md:gap-[1em]">
          <h3 className="text-[3em] max-lg:text-[2em]">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-[2em] max-lg:text-[1.5em]">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua
          </p>
          <Link
            href="/promotions"
            className="text-[#000033] bg-white rounded-[0.625em] text-[1.875em] py-[.4em] px-[2em] w-fit transition-all cursor-pointer hover:scale-[1.1] max-lg:text-[1.375em]"
          >
            Call to action
          </Link>
        </div>
        <div className="w-[27.625em] h-[30em] max-lg:h-auto max-md:w-auto">
          <Image src={XImage} alt="X" />
        </div>
      </section>
      <section className="mt-[3em]">
        <div className="text-[#000033] flex flex-col w-[92.5%] mx-auto">
          <h3 className="font-bold text-[2.5em] max-md:text-[2em]">
            Queima de estoque
          </h3>
          <div className="flex justify-between max-md:flex-col">
            <p className="text-[1.5em]">Produtos com 20 a 60% de desconto</p>
            <Link
              href="/promotions"
              className="text-[#3282B8] text-[1.5em] font-semibold self-end transition-all cursor-pointer hover:scale-[1.1]"
            >
              Ver todos
            </Link>
          </div>
        </div>
        <div className="flex justify-around mt-[2em]">
          <Image
            src={arrowImage}
            alt="Imagem seta para lado"
            className="rotate-90 transition-all cursor-pointer hover:scale-[1.3]"
          />
          <Product
            image={mouseImage}
            title="Mouse Sem Fio 2.4GHZ USB Preto - MO285"
            price="24.00"
            division="4"
            discount="20"
            olderPrice="30.00"
            page="home"
          />
          <div className="contents max-md:hidden">
            <Product
              image={windowsImage}
              title="Microsoft Windows 11 Pro 32/64 Bits ESD - Digital para Download - FQC-10572"
              price="1000.00"
              division="4"
              discount="50"
              olderPrice="2000.00"
              page="home"
            />
            <Product
              image={headsetImage}
              title="Fortrek H2 - Headset Gamer Pro Microfones e Fones de Ouvido, Preto (Leds Azul)"
              price="150.00"
              division="10"
              discount="20"
              olderPrice="180.00"
              page="home"
            />
            <div className="contents max-lg:hidden">
              <Product
                image={microphoneImage}
                title="HyperX Microfone Gamer QuadCast"
                price="375.00"
                division="3"
                discount="25"
                olderPrice="500.00"
                page="home"
              />
              <Product
                image={projectorImage}
                title="Mini Projetor Portatil 5G Wifi 6 Bluetooth 5.0 Android 11, Projetor 4K 1080P Full HD Suporte 8000 Lumens, "
                price="300.00"
                division="3"
                discount="20"
                olderPrice="400.00"
                page="home"
              />
            </div>
          </div>
          <Image
            src={arrowImage}
            alt="Imagem seta para lado"
            className="rotate-[270deg] transition-all cursor-pointer hover:scale-[1.3]"
          />
        </div>
      </section>
    </article>
  );
};

export default Banner;
