'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

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
        <div className="w-[1256px] h-[532px] mx-4 my-4 justify-start items-start gap-7 inline-flex">
          <div className="justify-start items-start gap-7 flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[125px] h-[125px] p-3 bg-gray-500 rounded-md shadow border-2 border-cyan-600 flex-col justify-start items-start flex">
                <Image
                  className="self-stretch grow shrink basis-0 w-full h-full"
                  src={projectorImage}
                  alt="imagem de um projetor"
                />
              </div>
              <div className="w-[125px] h-[125px] p-3 bg-gray-500 rounded-md flex-col justify-center items-center flex">
                <Image
                  className="self-stretch grow shrink basis-0 w-full h-full"
                  src={mouseImage}
                  alt="imagem de um mouse"
                />
              </div>
            </div>
            <div className="w-[500px] h-[500px] p-8 flex-col justify-center items-center inline-flex">
              <Image
                className="self-stretch grow shrink basis-0 w-full h-full"
                src={microphoneImage}
                alt="imagem de um microfone"
              />
            </div>
          </div>
        </div>
        <hr className="bg-gray-500 rounded-md mx-4 shadow-sm h-1" />
        <section className="my-[1em]">
          <div className="text-[#000033] flex flex-col w-[92.5%] ml-8 text-left">
            <h3 className="font-bold text-[2.5em] max-md:text-[2em]">
              Outros Produtos
            </h3>
          </div>
          <div className="flex justify-around mt-[2em]">
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
          </div>
        </section>
        <hr className="bg-gray-500 rounded-md mx-4 shadow-sm h-1" />
      </div>
    </main>
  );
};

export default Product;
