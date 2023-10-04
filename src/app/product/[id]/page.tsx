'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import playstationFive from '@/assets/images/playstationFive.svg';
import star from '@/assets/images/star.svg';
import xboxDiagonal from '@/assets/images/xboxDiagonal.svg';
import xboxFront from '@/assets/images/xboxFront.svg';
import xboxFrontTwo from '@/assets/images/xboxFrontTwo.svg';
import ProductComponent from '@/components/Product';

const Product = () => {
  const params = useParams();

  return (
    <main>
      <h1>Product {params.id}</h1>
      <div className="bg-gray-200 mx-5 my-5 px-4 py-4 rounded-lg shadow-md">
        <div className="w-full h-[33.25em] justify-start items-start gap-7 inline-flex">
          <div className="justify-center items-start gap-7 flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[7.813em] h-[7.813em] p-3 bg-stone-300 rounded-md shadow border-2 border-cyan-600 flex-col justify-start items-start flex">
                <Image
                  className="self-stretch grow shrink basis-0 w-full h-full"
                  src={xboxFront}
                  alt="imagem de um projetor"
                />
              </div>
              <div className="w-[7.813em] h-[7.813em] p-3 bg-stone-300 rounded-md flex-col justify-center items-center flex">
                <Image
                  className="self-stretch grow shrink basis-0 w-full h-full"
                  src={xboxDiagonal}
                  alt="imagem de um mouse"
                />
              </div>
            </div>
            <div className="w-[31.25em] h-[31.25em] p-8 flex-col justify-center items-center inline-flex">
              <Image
                className="self-stretch grow shrink basis-0 w-full h-full"
                src={xboxFrontTwo}
                alt="imagem de um microfone"
              />
            </div>
          </div>
          <div className="w-96 h-32 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-black text-2xl font-bold">Xbox Series X</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-black text-2xl font-bold">4,6</div>
              <div className="justify-start items-start gap-1.5 flex">
                <Image src={star} alt="Imagem de uma estrela" />
                <Image src={star} alt="Imagem de uma estrela" />
                <Image src={star} alt="Imagem de uma estrela" />
                <Image src={star} alt="Imagem de uma estrela" />
                <Image src={star} alt="Imagem de uma estrela" />
              </div>
              <div className="w-0.5 self-stretch bg-neutral-400 rounded-full" />
              <div className="px-1.5 pb-0.5 border-b border-emerald-400 justify-start items-center flex">
                <div className="text-emerald-400 text-base font-semibold">
                  500 avaliações
                </div>
              </div>
            </div>
            <div className="w-96 h-24 justify-start items-end gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start gap-2 inline-flex relative">
                  <div className="w-36 h-0.5 origin-top-left rotate-[-2.80deg] bg-cyan-600 absolute translate-y-5" />
                  <div className="text-black text-base font-medium">R$</div>
                  <div className="text-black text-3xl font-bold">4.999</div>
                  <div className="text-black text-base font-medium">99</div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="text-slate-950 text-2xl font-medium">R$</div>
                  <div className="text-slate-950 text-4xl font-bold">4.999</div>
                  <div className="text-slate-950 text-2xl font-medium">99</div>
                </div>
              </div>
              <div className="justify-start items-center gap-3 flex">
                <button className="w-60 h-10 px-6 py-2 bg-green-500 rounded-lg justify-center items-center gap-3 inline-flex">
                  Adicionar ao carrinho
                </button>
                <button className="h-10 px-6 py-2 bg-green-500/70 rounded-lg justify-center items-center gap-3 inline-flex flex-1">
                  Comprar
                </button>
              </div>
            </div>
            <div className="w-full text-black text-base font-normal flex alig">
              O Xbox Series X é o mais recente console de videogame da
              Microsoft, oferecendo gráficos impressionantes, desempenho de
              última geração e tempos de carregamento rápidos. Com uma ampla
              biblioteca de jogos exclusivos, suporte para jogos em 4K e HDR,
              além da compatibilidade com versões anteriores, o Xbox Series X
              proporciona uma experiência de jogo imersiva e envolvente.
              Desfrute de uma nova geração de jogos com o poderoso Xbox Series
              X.
            </div>
          </div>
        </div>
        <hr className="bg-black rounded-md mx-2 shadow-sm h-1" />
        <section className="my-[1em]">
          <div className="text-[#000033] flex flex-col w-[92.5%] mx-auto">
            <h3 className="font-bold text-[2.5em] max-md:text-[2em]">
              Outros Produtos
            </h3>
          </div>
          <div className="flex justify-around mt-[2em]">
            <ProductComponent
              image={playstationFive}
              title="Playstation 5"
              price="24.00"
              division="4"
              discount="20"
              olderPrice="30.00"
            />
            <div className="contents max-md:hidden">
              <ProductComponent
                image={playstationFive}
                title="Playstation 5"
                price="1000.00"
                division="4"
                discount="50"
                olderPrice="2000.00"
              />
              <ProductComponent
                image={playstationFive}
                title="Playstation 5"
                price="150.00"
                division="10"
                discount="20"
                olderPrice="180.00"
              />
              <div className="contents max-lg:hidden">
                <ProductComponent
                  image={playstationFive}
                  title="Playstation 5"
                  price="375.00"
                  division="3"
                  discount="25"
                  olderPrice="500.00"
                />
                <ProductComponent
                  image={playstationFive}
                  title="Playstation 5"
                  price="300.00"
                  division="3"
                  discount="20"
                  olderPrice="400.00"
                />
              </div>
            </div>
          </div>
        </section>
        <hr className="bg-black rounded-md mx-2 shadow-sm h-1" />
      </div>
    </main>
  );
};

export default Product;
