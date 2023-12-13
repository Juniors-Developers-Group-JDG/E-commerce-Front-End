import Image from 'next/image';
import Link from 'next/link';

import appstoreImage from '@/assets/images/home-page/appstore_download.svg';
import googlestoreImage from '@/assets/images/home-page/googleplay_download.svg';
import iphoneImage from '@/assets/images/home-page/iphone.svg';

import SwiperHome from '../SwiperHome';

const AppStore = () => {
  return (
    <article className="mt-[9em]">
      <section className="flex relative bg-[#DDF0FD]">
        <div className="flex flex-col pt-[2em] pb-[4em] w-[45vw] mx-[5em] max-md:w-full max-md:mx-0">
          <div className="flex flex-col">
            <h2 className="font-[900] text-[2.5em] p-5 max-md:text-[1.5em]">
              Baixe nosso aplicativo e use o cupom JDG para 20% de desconto na
              primeira compra
            </h2>
            <p className="text-[1.5em] p-5 max-md:text-[1.2em]">
              Apresse-se! Este cupom é válido até o final do mês e só pode ser
              usado uma vez por usuário.
            </p>
          </div>
          <div className="flex mt-[2em] max-md:mx-auto">
            <Image
              className="max-xl:w-[15em] max-md:w-[7em]"
              src={appstoreImage}
              alt="Imagem do aplicativo na app store"
            />
            <Image
              className="max-xl:w-[17em] max-md:w-[8em]"
              src={googlestoreImage}
              alt="Imagem do aplicativo na google store"
            />
          </div>
        </div>
        <div className="absolute z-10 top-[-6em] right-[8em] max-xl:top-[-4em] max-lg:top-[4em] max-lg:right-0">
          <Image
            className="h-[75vh] max-lg:h-[50vh] max-md:h-0"
            src={iphoneImage}
            alt="Imagem de um smartphone"
          />
        </div>
      </section>
      <section className="mt-[3em]">
        <div className="text-[#000033] flex flex-col w-[92.5%] mx-auto">
          <h3 className="font-bold text-[2.5em] max-md:text-[2em]">
            Para seu computador
          </h3>
          <div className="flex justify-between max-md:flex-col">
            <p className="text-[1.5em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <Link
              href="/promotions"
              className="text-[#3282B8] text-[1.5em] font-semibold self-end transition-all cursor-pointer hover:scale-[1.1]"
            >
              Ver todos
            </Link>
          </div>
        </div>
        <div className="flex justify-around mt-[2em]">
          <SwiperHome />
        </div>
      </section>
    </article>
  );
};

export default AppStore;
