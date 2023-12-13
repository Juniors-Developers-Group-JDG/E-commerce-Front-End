'use client';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import useQueryGetProducts from '@/hooks/useQueryGetProducts';

import Product from '../Product';

interface Props {
  productsFetchQuantityFn: Dispatch<SetStateAction<number>>;
  higherProductPriceFn: Dispatch<SetStateAction<number>>;
  lowestProductPriceFn: Dispatch<SetStateAction<number>>;
  productsDiscount: number;
  higherProductPrice: number;
  lowestProductPrice: number;
  priceFiltered: number;
}

const SwiperProducts = ({
  productsFetchQuantityFn,
  productsDiscount,
  higherProductPriceFn,
  higherProductPrice,
  lowestProductPriceFn,
  lowestProductPrice,
  priceFiltered,
}: Props) => {
  const { data, isFetching, isError } = useQueryGetProducts();

  useEffect(() => {
    const productsOnScreen = [];
    if (data) {
      data.map(prod => {
        if (prod.price > higherProductPrice) {
          higherProductPriceFn(prod.price);
        }
        if (prod.price < lowestProductPrice) {
          lowestProductPriceFn(prod.price);
        }
        if (productsDiscount !== 0) {
          if (prod.discount == productsDiscount) {
            productsOnScreen.push(1);
          }
          if (prod.price > higherProductPrice) {
            higherProductPriceFn(prod.price);
          }
          productsFetchQuantityFn(productsOnScreen.length);
        } else if (priceFiltered !== 0) {
          if (prod.price <= priceFiltered) {
            productsOnScreen.push(1);
          }
          productsFetchQuantityFn(productsOnScreen.length);
        } else {
          productsFetchQuantityFn(data.length);
        }
      });
    }
  }, [
    data,
    productsFetchQuantityFn,
    productsDiscount,
    higherProductPrice,
    higherProductPriceFn,
    lowestProductPrice,
    lowestProductPriceFn,
    priceFiltered,
  ]);

  return (
    <>
      {isFetching && !data && (
        <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
      )}
      {data &&
        (productsDiscount == 0 && priceFiltered == 0 ? (
          <Swiper
            navigation={true}
            modules={[Pagination, Grid]}
            className="mySwiper"
            slidesPerView={1}
            slidesPerGroup={1}
            grid={{ rows: 3, fill: 'row' }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1920: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
              2040: {
                slidesPerView: 7,
                slidesPerGroup: 7,
              },
            }}
          >
            {data?.map((prod, index) => (
              <React.Fragment key={index}>
                <SwiperSlide
                  key={prod._id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    padding: '1em 0',
                  }}
                >
                  <Product
                    title={prod.name}
                    price={prod.price?.toString()}
                    image={prod.images[0]}
                    discount={prod.discount.toString()}
                    division=""
                    olderPrice={prod.price?.toString()}
                    link={`/product/${index + 1}`}
                  />
                </SwiperSlide>
              </React.Fragment>
            ))}
          </Swiper>
        ) : (
          <Swiper
            navigation={true}
            modules={[Pagination, Grid]}
            className="mySwiper"
            slidesPerView={1}
            slidesPerGroup={1}
            grid={{ rows: 3, fill: 'row' }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1920: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
              2040: {
                slidesPerView: 7,
                slidesPerGroup: 7,
              },
            }}
          >
            {data?.map((prod, index) => (
              <React.Fragment key={index}>
                {prod.discount != 0 && prod.discount == productsDiscount && (
                  <SwiperSlide
                    key={prod._id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      padding: '1em 0',
                    }}
                  >
                    <Product
                      title={prod.name}
                      price={prod.price?.toString()}
                      image={prod.images[0]}
                      discount={prod.discount.toString()}
                      division=""
                      olderPrice={prod.price?.toString()}
                      link={`/product/${index + 1}`}
                    />
                  </SwiperSlide>
                )}
                {priceFiltered != 0 && prod.price <= priceFiltered && (
                  <SwiperSlide
                    key={prod._id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      padding: '1em 0',
                    }}
                  >
                    <Product
                      title={prod.name}
                      price={prod.price.toString()}
                      image={prod.images[0]}
                      discount={prod.discount.toString()}
                      division=""
                      olderPrice={prod.price?.toString()}
                      link={`/product/${index + 1}`}
                    />
                  </SwiperSlide>
                )}
              </React.Fragment>
            ))}
          </Swiper>
        ))}
      {isError && (
        <p className="text-[1.2em] font-bold text-center">
          Algo deu errado, tente recarregar a página.
        </p>
      )}
    </>
  );
};

export default SwiperProducts;
