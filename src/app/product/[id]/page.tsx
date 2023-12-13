'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import defaultImage from '@/assets/images/default.png';
import star from '@/assets/images/product-page/star.svg';
import Footer, { designer_juan } from '@/components/Layout/Footer';
import { ProductPageData } from '@/components/Product/page/ProductPageData';
import SwiperProduct from '@/components/Product/SwiperProduct';
// import Comments_Products from '@/components/Product/Comments_Product';
// import Rating_Product from '@/components/Product/Rating_Product';

const Product = () => {
  // const numberOfComments = [
  //   {
  //     id: 1,
  //     comment: 'Ótimo custo, boa imagem,fácil instalação',
  //     data_comment: '20/09/2021',
  //     likes: 30,
  //     deslikes: 2,
  //     image: xbox,
  //     nota: 4.3,
  //   },
  //   {
  //     id: 2,
  //     comment: 'Ótimo custo, boa imagem,fácil instalação',
  //     data_comment: '20/09/2021',
  //     likes: 30,
  //     deslikes: 2,
  //     image: xbox,
  //     nota: 4,
  //   },
  //   {
  //     id: 3,
  //     comment: 'Ótimo custo, boa imagem,fácil instalação',
  //     data_comment: '20/09/2021',
  //     likes: 30,
  //     deslikes: 2,
  //     image: xbox,
  //     nota: 5,
  //   },
  // ];

  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const { productData, isFetching, isError, redirect } = ProductPageData(id);
  const [imgSelectedIndex, setImgSelectedIndex] = useState(0);

  const selectImg = (e: React.MouseEvent<HTMLDivElement>) => {
    const imageIdIndex = Number(e.currentTarget.getAttribute('img-id'));
    setImgSelectedIndex(imageIdIndex);
  };

  if (redirect === true) {
    router.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="flex-1 max-w-[80%] max-sm:max-w-[100%] mx-auto bg-[#EDEDED] my-5 p-8 rounded-lg shadow-product-container max-md:mt-[6em]">
        <section className="w-full justify-evenly items-start inline-flex flex-row max-lg:flex-col">
          <div className="justify-center flex flex-row items-start w-full max-lg:items-center max-lg:flex-col">
            <div className="flex-col justify-start items-start gap-4 inline-flex max-lg:flex-row">
              {productData[0] &&
                productData.map((prod, index) => (
                  <div
                    key={index}
                    onClick={selectImg}
                    className={`w-[7.813em] h-[7.813em] bg-[#CFCFCF] rounded-md border-2 flex-col justify-start items-start flex cursor-pointer transition-all ${
                      imgSelectedIndex === index
                        ? 'border-[#3282B8] shadow-product-miniature cursor-auto'
                        : ''
                    } max-md:w-[4.5em] max-md:h-[4.5em]`}
                    img-id={index}
                  >
                    <Image
                      className="max-md:w-[4.5em] max-md:h-[4em] bg-white self-stretch grow shrink basis-0 w-full h-full object-contain rounded-md"
                      src={prod.images[index]}
                      alt={prod.name + index}
                      width={384}
                      height={384}
                    />
                  </div>
                ))}
              {isFetching &&
                !productData[0] &&
                [1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    onClick={selectImg}
                    className={`w-[7.813em] h-[7.813em] bg-[#CFCFCF] rounded-md border-2 flex-col justify-start items-start flex cursor-pointer transition-all ${
                      imgSelectedIndex === index
                        ? 'border-[#3282B8] shadow-product-miniature cursor-auto'
                        : ''
                    } max-md:w-[4.5em] max-md:h-[4.5em]`}
                  >
                    <Image
                      className="max-md:w-[4.5em] max-md:h-[4em] self-stretch grow shrink basis-0 w-full h-full object-contain rounded-md"
                      src={defaultImage}
                      alt="default"
                      width={384}
                      height={384}
                    />
                  </div>
                ))}
              {isError && <p>Recarregue a página</p>}
            </div>
            <div className="w-[-webkit-fill-available] h-fit my-[3em] mx-auto p-8 flex-col justify-center items-center inline-flex max-lg:w-auto max-lg:p-0">
              {productData[0] && (
                <Image
                  className="mix-blend-multiply self-stretch grow shrink basis-0"
                  src={productData[0].images[imgSelectedIndex]}
                  alt={productData[0].name}
                  width={384}
                  height={384}
                  style={{
                    maxHeight: '24em',
                    objectFit: 'contain',
                  }}
                />
              )}
              {isFetching && !productData[0] && (
                <Image
                  className="self-stretch grow shrink basis-0"
                  src={defaultImage}
                  alt="default"
                  width={384}
                  height={384}
                  style={{
                    maxHeight: '24em',
                  }}
                />
              )}
              {isError && <p>Recarregue a página</p>}
            </div>
          </div>
          <div className="w-full h-32 flex-col justify-start items-start gap-2 inline-flex max-lg:h-fit max-xl:mb-[1em]">
            <div className="text-black text-[1.563em] font-bold">
              {productData[0] && productData[0].name}
              {isFetching && !productData[0] && <p>Carregando...</p>}
              {isError && <p>Recarregue a página</p>}
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
            <div className="w-fit h-24 justify-start items-end gap-4 inline-flex max-xl:flex-col max-xl:gap-0 max-xl:h-auto max-xl:items-baseline">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                {/* // if product has discount, add later */}
                {/* <div className="justify-start items-start gap-2 inline-flex relative">
                  <div className="w-36 h-0.5 origin-top-left rotate-[-2.80deg] bg-cyan-600 absolute translate-y-5" />
                  <div className="text-black text-base font-medium">R$</div>
                  {productData[0] && (
                    <>
                      <div className="text-black text-3xl font-bold">
                        {productData[0].price.toFixed(2)}
                      </div>
                    </>
                  )}
                </div> */}
                <div className="justify-start items-start gap-2 inline-flex text-[#000033]">
                  <div className="text-[1.563em] font-medium">R$</div>
                  {productData[0] && (
                    <div className="text-[2.5em] font-bold">
                      {productData[0].discount
                        ? (
                            Number(productData[0].price) -
                            (Number(productData[0].price) / 100) *
                              Number(productData[0].discount)
                          ).toFixed(2)
                        : productData[0].price.toFixed(2)}
                    </div>
                  )}
                  {isFetching && !productData[0] && <div>Carregando...</div>}
                  {isError && <p>Recarregue a página</p>}
                </div>
              </div>
              <div className="justify-start items-center gap-3 flex text-white text-[1.25em] font-medium max-md:flex-col max-lg:flex-row">
                <button className="w-max h-10 px-6 py-2 bg-[#10D03A] rounded-lg justify-center items-center gap-3 inline-flex">
                  Adicionar ao carrinho
                </button>
                {/* <button className="h-10 px-6 py-2 bg-[#2EE356] rounded-lg justify-center items-center gap-3 inline-flex flex-1">
                  Comprar
                </button> */}
              </div>
            </div>
            <div className="w-full text-black text-base font-normal flex alig">
              {productData[0] && productData[0].description}
              {isFetching && !productData[0] && <p>Carregando...</p>}
              {isError && <p>Recarregue a página</p>}
            </div>
          </div>
        </section>
        <hr className="bg-black rounded-md mx-2 shadow-sm h-[.188em]" />
        <section className="my-[1em]">
          <div className="text-[#000033] flex flex-col">
            <h3 className="font-bold text-[2em]">Outros Produtos</h3>
          </div>
          <div className="flex justify-around mt-[2em]">
            <SwiperProduct />
          </div>
        </section>
        <hr className="bg-black rounded-md mx-2 shadow-sm h-[.188em]" />
        {/* <article>
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
        </article> */}
      </main>
      <Footer name={designer_juan.name} link={designer_juan.link} />
    </>
  );
};

export default Product;
