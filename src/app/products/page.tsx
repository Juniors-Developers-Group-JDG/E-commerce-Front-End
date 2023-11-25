'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import checkImage from '@/assets/images/check.svg';
// import productsStarBlueImage from '@/assets/images/productsStarBlue.svg';
// import productsStarGrayImage from '@/assets/images/productsStarGray.svg';
import Footer, { designer_rafael } from '@/components/Layout/Footer';
import SwiperProducts from '@/components/Products/SwiperProducts';

const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
});

const Products = () => {
  const [productsFetchQuantity, setProductsFetchQuantity] = useState<number>(0);
  const [productsDiscount, setProductsDiscount] = useState<number>(0);
  const [higherProductPrice, setHigherProductPrice] = useState<number>(0);
  const [lowestProductPrice, setLowestProductPrice] = useState<number>(1000);
  const router = useRouter();

  useEffect(() => {
    if (document) {
      if (
        document.querySelector('.swiper-button-prev') &&
        document.querySelector('.swiper-button-prev')
      ) {
        (document.querySelector(
          '.swiper-button-prev',
        ) as HTMLDivElement)!.style.display = 'none';
        (document.querySelector(
          '.swiper-button-next',
        ) as HTMLDivElement)!.style.display = 'none';
      }
      if (location.search !== '') {
        (
          document.getElementById('discounts-area')!.children[2].children[0]
            .children[0] as HTMLSpanElement
        ).setAttribute('is-checked', 'true');
        (
          document.getElementById('discounts-area')!.children[2].children[0]
            .children[0] as HTMLSpanElement
        ).style.opacity = '1';
        setProductsDiscount(20);
        router.push('/products');
      }
      if (document.querySelector('.swiper-wrapper')) {
        (
          document.querySelector('.swiper-wrapper') as HTMLDivElement
        ).style.flexWrap = 'wrap';
      }
    }
  }, [productsFetchQuantity, router]);

  const checkFilter = (e: React.MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLDivElement;
    const discountsArea = document.getElementById(
      'discounts-area',
    ) as HTMLDivElement;

    // if is-checked === true set opacity of check mark to 1
    (currentTarget.children[0].children[0] as HTMLImageElement).getAttribute(
      'is-checked',
    ) === 'false'
      ? ((
          currentTarget.children[0].children[0] as HTMLImageElement
        ).setAttribute('is-checked', 'true'),
        ((
          currentTarget.children[0].children[0] as HTMLImageElement
        ).style.opacity = '1'))
      : ((
          currentTarget.children[0].children[0] as HTMLImageElement
        ).setAttribute('is-checked', 'false'),
        ((
          currentTarget.children[0].children[0] as HTMLImageElement
        ).style.opacity = '0'));

    // if clicked element === discount set discount filter
    if (currentTarget.getAttribute('discount-filter')) {
      switch (
        (
          (currentTarget.children[1] as HTMLParagraphElement)
            .children[0] as HTMLSpanElement
        ).innerText
      ) {
        case '10':
          setProductsDiscount(10);
          break;
        case '15':
          setProductsDiscount(15);
          break;
        case '20':
          setProductsDiscount(20);
          break;
        default:
          setProductsDiscount(0);
          break;
      }
    }

    // check if all discount check equals 0
    let allDiscountsUnchecked = true;
    for (let i = 0; i < discountsArea.children.length; i++) {
      if (
        (
          discountsArea.children[i].children[0].children[0] as HTMLImageElement
        ).getAttribute('is-checked') === 'true'
      ) {
        allDiscountsUnchecked = false;
      }
    }
    if (allDiscountsUnchecked === true) {
      setProductsDiscount(0);
    }

    // remove non active check marks
    for (let i = 0; i < discountsArea.children.length; i++) {
      if (
        (
          discountsArea.children[i].children[0].children[0] as HTMLSpanElement
        ).getAttribute('is-checked') === 'true' &&
        productsDiscount != 0 &&
        (discountsArea.children[i].children[1].children[0] as HTMLSpanElement)
          .innerText === productsDiscount.toString()
      ) {
        (
          discountsArea.children[i].children[0].children[0] as HTMLSpanElement
        ).setAttribute('is-checked', 'false');
        (
          discountsArea.children[i].children[0].children[0] as HTMLSpanElement
        ).style.opacity = '0';
      }
    }
  };

  return (
    <>
      <main className={`${inter.className} mt-[3em] flex-1`}>
        <section className="max-w-[80%] mx-auto">
          <h2 className="text-[3em] flex justify-center mb-[.5em]">Produtos</h2>
          <section className="mb-[2em]">
            <span className="text-[1.5em]">Filtrar por:</span>
            <div className="flex justify-between max-2xl:grid max-2xl:grid-cols-2 max-2xl:gap-x-[15%] max-md:grid-cols-1">
              {/* <div>
                <span className="text-[1.25em]">marca:</span>
                <div className="mt-[1em] flex select-none max-md:flex-col">
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center cursor-pointer"
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
                    className="flex gap-[.5em] mr-[1.2vw] items-center cursor-pointer"
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
                    className="flex gap-[.5em] mr-[1.2vw] items-center cursor-pointer"
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
                    className="flex gap-[.5em] items-center cursor-pointer"
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
              </div> */}

              {/* <div>
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
                        R${lowestProductPrice.toFixed(0)}
                      </div>
                      <span className="text-[.875em] text-[#879DB7]">
                        mínimo:
                      </span>
                    </div>
                    <div>
                      <div className="bg-[#879DB796] w-[5.625em] h-[1.5em] rounded-[.188em]">
                        R${higherProductPrice.toFixed(0)}
                      </div>
                      <span className="text-[.875em] text-[#879DB7]">
                        máximo:
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}

              <div>
                <span className="text-[1.25em]">promoção:</span>
                <div id="discounts-area" className="flex mt-[1em] select-none">
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center cursor-pointer"
                    discount-filter="true"
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
                    <p className="text-[.875em]">
                      <span>10</span>% OFF
                    </p>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] mr-[1.2vw] items-center cursor-pointer"
                    discount-filter="true"
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
                    <p className="text-[.875em]">
                      <span>15</span>% OFF
                    </p>
                  </div>
                  <div
                    onClick={checkFilter}
                    className="flex gap-[.5em] items-center cursor-pointer"
                    discount-filter="true"
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
                    <p className="text-[.875em]">
                      <span>20</span>% OFF
                    </p>
                  </div>
                </div>
              </div>

              {/* <div>
                <span className="text-[1.25em]">avaliação:</span>
                <div className="flex mt-[1em]">
                  <Image
                    src={productsStarBlueImage}
                    alt="star"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <Image
                    src={productsStarBlueImage}
                    alt="star"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <Image
                    src={productsStarBlueImage}
                    alt="star"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <Image
                    src={productsStarGrayImage}
                    alt="star"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <Image
                    src={productsStarGrayImage}
                    alt="star"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </div> */}
            </div>
          </section>
          <section>
            <div className="flex justify-between text-[1.5em] max-lg:flex-col">
              <div>
                {/* Exibindo: 1 - 12 de{' '} */}
                Exibindo{' '}
                {productsFetchQuantity !== 0
                  ? productsFetchQuantity
                  : '20'}{' '}
                {productsFetchQuantity > 1 ? 'resultados' : 'resultado'}
              </div>

              {/* <div className="flex gap-[1em] max-md:flex-col max-md:gap-0">
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
              </div> */}
            </div>
          </section>
        </section>
        <div className="flex w-[85%] justify-evenly mt-[2em] mx-auto gap-[1em] flex-wrap">
          <SwiperProducts
            productsFetchQuantityFn={setProductsFetchQuantity}
            productsDiscount={productsDiscount}
            higherProductPriceFn={setHigherProductPrice}
            higherProductPrice={higherProductPrice}
            lowestProductPriceFn={setLowestProductPrice}
            lowestProductPrice={lowestProductPrice}
          />
        </div>
      </main>
      <Footer name={designer_rafael.name} link={designer_rafael.link} />
    </>
  );
};

export default Products;
