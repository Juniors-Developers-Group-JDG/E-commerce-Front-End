import Image from 'next/image';
import Link from 'next/link';

import XImage from '@/assets/images/X.svg';

import SwiperHome from './SwiperHome';

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
          <div className="flex w-full justify-evenly max-h-[25em]">
            <SwiperHome />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Banner;
