import Image from 'next/image';
import Link from 'next/link';

import jblImage from '@/assets/images/home-page/jbl.svg';
import lineImage from '@/assets/images/home-page/line.svg';

import SwiperHome from '../SwiperHome';

const Best_Sellers = () => {
  return (
    <article className="my-[2em]">
      <section className="flex flex-col text-[#000033] text-center my-8 gap-4">
        <h3 className="font-bold text-[2.5em]">Mais Vendidos</h3>
        <p className="text-[1.5em] my-0 mx-[25%] max-md:mx-auto max-md:max-w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <div className="flex gap-4 mx-auto w-[95%] max-md:flex-col">
        <div className="bg-[#000033] rounded-lg flex items-center justify-center w-full">
          <div className="h-[80%] w-[50%]">
            <Image
              src={jblImage}
              alt="Caixinha de som JBL"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-[1em]">
          <div className="relative rounded-lg row-span-2 flex items-center justify-center bg-[#3282B8] text-white">
            <Image src={lineImage} alt="linha" className="max-md:w-[95%]" />
            <Image
              src={lineImage}
              alt="linha"
              className="absolute z-10 rotate-[267deg] max-md:w-[95%]"
            />
          </div>
          <div className="relative rounded-lg row-span-2 flex items-center justify-center bg-[#3282B8] text-white">
            <Image src={lineImage} alt="linha" className="max-md:w-[95%]" />
            <Image
              src={lineImage}
              alt="linha"
              className="absolute z-10 rotate-[267deg] max-md:w-[95%]"
            />
          </div>
          <div className="relative rounded-lg row-span-2 flex items-center justify-center bg-[#3282B8] text-white">
            <Image src={lineImage} alt="linha" className="max-md:w-[95%]" />
            <Image
              src={lineImage}
              alt="linha"
              className="absolute z-10 rotate-[267deg] max-md:w-[95%]"
            />
          </div>
          <div className="relative rounded-lg row-span-2 flex items-center justify-center bg-[#3282B8] text-white">
            <Image src={lineImage} alt="linha" className="max-md:w-[95%]" />
            <Image
              src={lineImage}
              alt="linha"
              className="absolute z-10 rotate-[267deg] max-md:w-[95%]"
            />
          </div>
        </div>
      </div>
      <section className="my-[3em]">
        <div className="text-[#000033] flex flex-col w-[92.5%] mx-auto">
          <h3 className="font-bold text-[2.5em] max-md:text-[2em]">
            Acabaram de chegar
          </h3>
          <div className="flex justify-between max-md:flex-col">
            <p className="text-[1.5em]">Produtos novos em nosso site.</p>
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
      <section className="bg-[#000033] h-[8.75em] flex items-center text-white font-bold text-justify text-[1.5em] max-lg:text-[1em] max-md:items-baseline max-md:flex-col max-md:text-[.85em]">
        <p className="ml-[2em]">Frete grátis em compras acima de R$ 200,00</p>
        <div className="w-[.25em] h-[5.75em] bg-white mx-[2.5em] max-md:opacity-0"></div>
        <p>Envio em até 24 horas após o pagamento</p>
        <div className="w-[.25em] h-[5.75em] bg-white mx-[2.5em] max-md:opacity-0"></div>
        <p>Frete grátis em compras acima de R$ 200,00</p>
        <div className="w-[.25em] h-[5.75em] bg-white mx-[2.5em] max-md:opacity-0"></div>
        <p className="mr-[2em]">Envio em até 24 horas após o pagamento</p>
      </section>
    </article>
  );
};

export default Best_Sellers;
