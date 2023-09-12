import Image from 'next/image';
import Link from 'next/link';

import googlestore from '@/assets/images/googleplay_download.svg';
import appstore from '@/assets/images/appstore_download.svg';
import iphone from '@/assets/images/iphone.svg';
import arrowImage from '@/assets/images/arrow.svg';
import Product from './Product';
import headsetImage from '@/assets/images/headset.svg';
import microphoneImage from '@/assets/images/microphone.svg';
import mouseImage from '@/assets/images/mouse.svg';
import projectorImage from '@/assets/images/projector.svg';
import windowsImage from '@/assets/images/windows.svg';

const Home = () => {
  return (
    <main className='mt-[100px]'>
        <section className="my-[2em] w-[95%]  mx-auto flex  relative">

            <div className='flex flex-col w-full bg-blue-200 mt-10 pb-[60px] pt-[60px] rounded-md'>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-[2.0em] w-[50%] p-5 text-center'>Baixe nosso aplicativo e use o cupom JDG para 20% de desconto na primeira compra</h2>
                    <p className="text-[1.5em] w-[50%] p-5 text-center">Apresse-se! Este cupom é válido até o final do mês e só pode ser usado uma vez por usuário.</p>
                </div>
                <figure className='flex  w-[50%] justify-evenly'>
                    <Image
                        className=""
                        src={googlestore}
                        alt="Imagem do aplicativo na google store"
                    />
                    <Image
                        className=""
                        src={appstore}
                        alt="Imagem do aplicativo na app store"
                    />

                </figure>
            </div>

            <div className='absolute z-10 top-0 right-[200px]'>
                <figure>
                    <Image
                            className="h-[550px]"
                            src={iphone}
                            alt="Imagem de um smartphone"
                    />
                </figure>
            </div>

        </section> {/*Section informartivo*/}
        
        <section className="my-[2em] w-[95%]  mx-auto mt-[100px] mb-[100px]">
            <div className="flex flex-col  mx-auto">
                <div className='w-[92.5%] text-[#000033]'>
                    <h3 className="font-bold text-[2.5em]">Para seu computador</h3>
                </div>
                <div className='w-[92.5%] text-[#000033]'>
                    <p className="text-[1.5em]">Descubra os melhores itens no mercado e dê o upgrade que seu setup merece!</p>
                </div>
            </div>
            
            <div className="flex justify-around mt-[2em] mb-[2em]">
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
                />
                <Product
                    image={windowsImage}
                    title="Microsoft Windows 11 Pro 32/64 Bits ESD - Digital para Download - FQC-10572"
                    price="1000.00"
                    division="4"
                    discount="50"
                    olderPrice="2000.00"
                />
                <Product
                    image={headsetImage}
                    title="Fortrek H2 - Headset Gamer Pro Microfones e Fones de Ouvido, Preto (Leds Azul)"
                    price="150.00"
                    division="10"
                    discount="20"
                    olderPrice="180.00"
                />
                <Product
                    image={microphoneImage}
                    title="HyperX Microfone Gamer QuadCast"
                    price="375.00"
                    division="3"
                    discount="25"
                    olderPrice="500.00"
                />
                <Product
                    image={projectorImage}
                    title="Mini Projetor Portatil 5G Wifi 6 Bluetooth 5.0 Android 11, Projetor 4K 1080P Full HD Suporte 8000 Lumens, "
                    price="300.00"
                    division="3"
                    discount="20"
                    olderPrice="400.00"
                />
                <Image
                    src={arrowImage}
                    alt="Imagem seta para lado"
                    className="rotate-[270deg] transition-all cursor-pointer hover:scale-[1.3]"
                />
            </div>
        </section>{/*Section Seu computador*/}
    </main>
  );
};

export default Home;