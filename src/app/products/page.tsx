'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';

import checkImage from '@/assets/images/check.svg';
import productsStarBlueImage from '@/assets/images/productsStarBlue.svg';
import productsStarGrayImage from '@/assets/images/productsStarGray.svg';
import Footer, { designer_rafael } from '@/components/Layout/Footer';
import Product from '@/components/Product';
import useQueryGetProducts from '@/hooks/useQueryGetProducts';

const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
});

const Products = () => {
  const { data, isFetching, isError } = useQueryGetProducts();

  const checkFilter = (e: React.MouseEvent) => {
    (
      (e.currentTarget as HTMLDivElement).children[0]
        .children[0] as HTMLImageElement
    ).getAttribute('is-checked') === 'false'
      ? ((
          (e.currentTarget as HTMLDivElement).children[0]
            .children[0] as HTMLImageElement
        ).setAttribute('is-checked', 'true'),
        ((
          (e.currentTarget as HTMLDivElement).children[0]
            .children[0] as HTMLImageElement
        ).style.opacity = '1'))
      : ((
          (e.currentTarget as HTMLDivElement).children[0]
            .children[0] as HTMLImageElement
        ).setAttribute('is-checked', 'false'),
        ((
          (e.currentTarget as HTMLDivElement).children[0]
            .children[0] as HTMLImageElement
        ).style.opacity = '0'));
  };

  return (
    <>
      <main className={`${inter.className} mt-[3em] flex-1`}>
        <section className="max-w-[80%] mx-auto">
          <h2 className="text-[3em] flex justify-center mb-[.5em]">Produtos</h2>
          <section className="mb-[2em]">
            <span className="text-[1.5em]">Filtrar por:</span>
            <div className="flex justify-between max-2xl:grid max-2xl:grid-cols-2 max-2xl:gap-x-[15%] max-md:grid-cols-1">
              <div>
                <span className="text-[1.25em]">marca:</span>
                <div className="mt-[1em] flex select-none max-md:flex-col">
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">Logitech</span>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">Dell</span>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">Microsoft</span>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">Lumens</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[1.25em]">preço:</span>
                <div className="flex flex-col items-baseline w-fit">
                  <input
                    className="w-[9em] mb-[.5em] flex self-center"
                    type="range"
                    min={100}
                    max={450}
                  />
                  <div className="flex justify-between text-center gap-[3em]">
                    <div>
                      <div className="bg-[#879DB796] w-[5.625em] h-[1.5em] rounded-[.188em]">
                        R$100
                      </div>
                      <span className="text-[.875em] text-[#879DB7]">
                        mínimo:
                      </span>
                    </div>
                    <div>
                      <div className="bg-[#879DB796] w-[5.625em] h-[1.5em] rounded-[.188em]">
                        R$450
                      </div>
                      <span className="text-[.875em] text-[#879DB7]">
                        máximo:
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[1.25em]">promoção:</span>
                <div className="flex mt-[1em] select-none">
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">10% OFF</span>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">15% OFF</span>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] items-center"
                  >
                    <div className="border-solid border-[.125em] border-[#879DB7] rounded-[.125em] w-[1em] h-[1em]">
                      <Image
                        className="opacity-0"
                        src={checkImage}
                        is-checked="false"
                        alt="check"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="text-[.875em]">20% OFF</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[1.25em]">avaliação:</span>
                <div className="flex mt-[1em]">
                  <Image
                    src={productsStarBlueImage}
                    alt="star"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={productsStarBlueImage}
                    alt="star"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={productsStarBlueImage}
                    alt="star"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={productsStarGrayImage}
                    alt="star"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={productsStarGrayImage}
                    alt="star"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-between text-[1.5em] max-lg:flex-col">
              <div>Exibindo: 1 - 12 de 100 resultados</div>
              <div className="flex gap-[1em] max-md:flex-col max-md:gap-0">
                <span>Ordernar por:</span>
                <select
                  defaultValue={'popular'}
                  className="border-solid border-[.063em] border-[#879DB7] rounded-[.313em] w-fit h-[1.5em]"
                >
                  <option value="popular">Mais populares</option>
                  <option value="discount">Melhores descontos</option>
                  <option value="best_sellers">Mais vendidos</option>
                  <option value="newer">Mais recentes</option>
                </select>
              </div>
            </div>
          </section>
        </section>
        <div className="flex w-[85%] justify-evenly mt-[2em] mx-auto gap-[1em] flex-wrap">
          {isFetching && !data && (
            <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
          )}
          {data
            ?.slice(0, 12)
            .map(prod => (
              <Product
                key={prod._id}
                title={prod.name}
                price={prod.price?.toString()}
                image={prod.images[0]}
                discount=""
                division=""
                olderPrice=""
              />
            ))}
          {isError && (
            <p className="text-[1.2em] font-bold text-center">
              Algo deu errado, tente recarregar a página.
            </p>
          )}
        </div>
      </main>
      <Footer name={designer_rafael.name} link={designer_rafael.link} />
    </>
  );
};

export default Products;
