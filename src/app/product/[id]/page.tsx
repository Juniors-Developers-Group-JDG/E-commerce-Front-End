'use client';

import Image from 'next/image';
import { useState } from 'react';

import playstationFive from '@/assets/images/playstationFive.svg';
import star from '@/assets/images/star.svg';
import xbox from '@/assets/images/xbox.jpg';
import xboxDiagonal from '@/assets/images/xboxDiagonal.svg';
import xboxFront from '@/assets/images/xboxFront.svg';
import Footer, { designer_juan } from '@/components/Layout/Footer';
import ProductComponent from '@/components/Product';
import Comments_Products from '@/components/Product/Comments_Product';
import Rating_Product from '@/components/Product/Rating_Product';

const Product = () => {
  const numberOfComments = [
    {
      id: 1,
      comment: 'Ótimo custo, boa imagem,fácil instalação',
      data_comment: '20/09/2021',
      likes: 30,
      deslikes: 2,
      image: xbox,
      nota: 4.3,
    },
    {
      id: 2,
      comment: 'Ótimo custo, boa imagem,fácil instalação',
      data_comment: '20/09/2021',
      likes: 30,
      deslikes: 2,
      image: xbox,
      nota: 4,
    },
    {
      id: 3,
      comment: 'Ótimo custo, boa imagem,fácil instalação',
      data_comment: '20/09/2021',
      likes: 30,
      deslikes: 2,
      image: xbox,
      nota: 5,
    },
  ];

  const [imgSelected, setImgSelected] = useState(1);

  const selectImg = (e: React.MouseEvent<HTMLDivElement>) => {
    const imageId = Number(e.currentTarget.getAttribute('img-id'));
    imageId === 1 ? setImgSelected(1) : setImgSelected(2);
  };

  return (
    <>
      <main className="flex-1 max-w-[75em] mx-auto bg-[#EDEDED] my-5 p-8 rounded-lg shadow-product-container">
        <section className="w-full justify-start items-start inline-flex flex-row max-lg:flex-col">
          <div className="justify-center flex flex-row items-start w-full max-lg:items-center max-lg:flex-col">
            <div className="flex-col justify-start items-start gap-4 inline-flex max-lg:flex-row">
              <div
                onClick={selectImg}
                className={`w-[7.813em] h-[7.813em] p-3 bg-[#CFCFCF] rounded-md border-2 flex-col justify-start items-start flex cursor-pointer transition-all ${
                  imgSelected === 1
                    ? 'border-[#3282B8] shadow-product-miniature cursor-auto'
                    : ''
                }`}
                img-id={1}
              >
                <Image
                  className="self-stretch grow shrink basis-0 w-full h-full"
                  src={xboxFront}
                  alt="imagem de um xbox"
                />
              </div>
              <div
                onClick={selectImg}
                className={`w-[7.813em] h-[7.813em] p-3 bg-[#CFCFCF] rounded-md border-2 flex-col justify-center items-center flex cursor-pointer transition-all ${
                  imgSelected === 2
                    ? 'border-[#3282B8] shadow-product-miniature cursor-auto'
                    : ''
                }`}
                img-id={2}
              >
                <Image
                  className="self-stretch grow shrink basis-0 w-full h-full"
                  src={xboxDiagonal}
                  alt="imagem de um xbox"
                />
              </div>
            </div>
            <div className="w-[31.25em] h-[31.25em] p-8 flex-col justify-center items-center inline-flex mx-[-2em] my-[2em] max-lg:w-auto max-lg:p-0">
              <Image
                className="self-stretch grow shrink basis-0 w-full h-full"
                src={imgSelected === 1 ? xboxFront : xboxDiagonal}
                alt="imagem de um xbox"
              />
            </div>
          </div>
          <div className="w-full h-32 flex-col justify-start items-start gap-2 inline-flex max-lg:h-fit max-xl:mb-[1em]">
            <div className="text-black text-[1.563em] font-bold">
              Xbox Series X
            </div>
            <div className="justify-start items-center gap-2 inline-flex max-lg:flex-col">
              <div className="flex items-center gap-[1em]">
                <div className="text-black text-[1.563em] font-bold">4,6</div>
                <div className="justify-start items-start gap-1.5 flex">
                  <Image src={star} alt="Imagem de uma estrela" />
                  <Image src={star} alt="Imagem de uma estrela" />
                  <Image src={star} alt="Imagem de uma estrela" />
                  <Image src={star} alt="Imagem de uma estrela" />
                  <Image src={star} alt="Imagem de uma estrela" />
                </div>
              </div>
              <div className="w-0.5 self-stretch bg-neutral-400 rounded-full max-lg:opacity-0" />
              <div className="px-1.5 pb-0.5 border-b border-emerald-400 justify-start items-center flex">
                <div className="text-emerald-400 text-base font-semibold">
                  500 avaliações
                </div>
              </div>
            </div>
            <div className="w-96 h-24 justify-start items-end gap-4 inline-flex max-xl:flex-col max-xl:gap-0 max-xl:h-auto max-xl:items-baseline">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start gap-2 inline-flex relative">
                  <div className="w-36 h-0.5 origin-top-left rotate-[-2.80deg] bg-cyan-600 absolute translate-y-5" />
                  <div className="text-black text-base font-medium">R$</div>
                  <div className="text-black text-3xl font-bold">4.999</div>
                  <div className="text-black text-base font-medium">99</div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex text-[#000033]">
                  <div className="text-[1.563em] font-medium">R$</div>
                  <div className="text-[2.5em] font-bold">4.999</div>
                  <div className="text-[1.563em] font-medium">99</div>
                </div>
              </div>
              <div className="justify-start items-center gap-3 flex text-white text-[1.25em] font-medium max-md:flex-col max-lg:flex-row">
                <button className="w-max h-10 px-6 py-2 bg-[#10D03A] rounded-lg justify-center items-center gap-3 inline-flex">
                  Adicionar ao carrinho
                </button>
                <button className="h-10 px-6 py-2 bg-[#2EE356] rounded-lg justify-center items-center gap-3 inline-flex flex-1">
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
        </section>
        <hr className="bg-black rounded-md mx-2 shadow-sm h-[.188em]" />
        <section className="my-[1em]">
          <div className="text-[#000033] flex flex-col">
            <h3 className="font-bold text-[2em]">Outros Produtos</h3>
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
            <div className="contents max-lg:hidden">
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
                <div className="contents max-xl:hidden">
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
          </div>
        </section>
        <hr className="bg-black rounded-md mx-2 shadow-sm h-[.188em]" />
        <article>
          <div className="flex mx-auto w-[90%] py-6">
            <h2 className="mx-auto text-center font-semibold text-[2em] sm:">
              Avaliações
            </h2>
          </div>
          <div className="flex flex-col w-full md:flex-row md:justify-around mx-auto py-6">
            <article>
              <Rating_Product
                nota={4.6}
                quantidadeDeAvaliacoes={500}
                avaliacoes1Estrelas={50}
                avaliacoes2Estrelas={60}
                avaliacoes3Estrelas={80}
                avaliacoes4Estrelas={150}
                avaliacoes5Estrelas={160}
              />
            </article>

            <article className="w-full">
              {numberOfComments.map(commentObj => (
                <Comments_Products
                  id={commentObj.id}
                  nota={commentObj.nota}
                  key={commentObj.id}
                  comment={commentObj.comment}
                  data_comment={commentObj.data_comment}
                  likes={commentObj.likes}
                  deslikes={commentObj.deslikes}
                  caminho={commentObj.image}
                />
              ))}
            </article>
          </div>
        </article>
      </main>
      <Footer name={designer_juan.name} link={designer_juan.link} />
    </>
  );
};

export default Product;
