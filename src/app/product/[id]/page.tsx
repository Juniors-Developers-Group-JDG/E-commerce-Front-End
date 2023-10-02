'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import arrowImage from '@/assets/images/arrow.svg';
import headsetImage from '@/assets/images/headset.svg';
import microphoneImage from '@/assets/images/microphone.svg';
import mouseImage from '@/assets/images/mouse.svg';
import projectorImage from '@/assets/images/projector.svg';
import windowsImage from '@/assets/images/windows.svg';
import ProductComponent from '@/components/Product';

const Product = () => {
  const params = useParams();

  return (
    <main>
      <h1>Product {params.id}</h1>
      <div className="bg-gray-400/60 mx-5 my-5 rounded-lg shadow-md">
        hsdbjsdv
        <hr className="bg-gray-500 rounded-md mx-4 shadow-sm h-1" />
        <section className="my-[1em]">
          <div className="text-[#000033] flex flex-col w-[92.5%] mx-auto">
            <h3 className="font-bold text-[2.5em] max-md:text-[2em]">
              Outros Produtos
            </h3>
          </div>
          <div className="flex justify-around mt-[2em]">
            <Image
              src={arrowImage}
              alt="Imagem seta para lado"
              className="rotate-90 transition-all cursor-pointer hover:scale-[1.3]"
            />
            <ProductComponent
              image={mouseImage}
              title="Mouse Sem Fio 2.4GHZ USB Preto - MO285"
              price="24.00"
              division="4"
              discount="20"
              olderPrice="30.00"
            />
            <div className="contents max-md:hidden">
              <ProductComponent
                image={windowsImage}
                title="Microsoft Windows 11 Pro 32/64 Bits ESD - Digital para Download - FQC-10572"
                price="1000.00"
                division="4"
                discount="50"
                olderPrice="2000.00"
              />
              <ProductComponent
                image={headsetImage}
                title="Fortrek H2 - Headset Gamer Pro Microfones e Fones de Ouvido, Preto (Leds Azul)"
                price="150.00"
                division="10"
                discount="20"
                olderPrice="180.00"
              />
              <div className="contents max-lg:hidden">
                <ProductComponent
                  image={microphoneImage}
                  title="HyperX Microfone Gamer QuadCast"
                  price="375.00"
                  division="3"
                  discount="25"
                  olderPrice="500.00"
                />
                <ProductComponent
                  image={projectorImage}
                  title="Mini Projetor Portatil 5G Wifi 6 Bluetooth 5.0 Android 11, Projetor 4K 1080P Full HD Suporte 8000 Lumens, "
                  price="300.00"
                  division="3"
                  discount="20"
                  olderPrice="400.00"
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
        <hr className="bg-gray-500 rounded-md mx-4 shadow-sm h-1" />
      </div>
    </main>
  );
};

export default Product;
