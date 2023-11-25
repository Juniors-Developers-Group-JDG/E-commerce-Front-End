import React from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import useQueryGetProducts from '@/hooks/useQueryGetProducts';

import Product from '../Product';

const SwiperProduct = () => {
  const { data, isFetching, isError } = useQueryGetProducts();

  return (
    <>
      {isFetching && !data && (
        <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
      )}
      {data && (
        <Swiper
          modules={[Scrollbar]}
          className="mySwiper"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            910: {
              slidesPerView: 2.5,
            },
            1440: {
              slidesPerView: 3.5,
            },
            1920: {
              slidesPerView: 4.5,
            },
            2040: {
              slidesPerView: 5.5,
            },
          }}
        >
          {data?.map((prod, index) => (
            <React.Fragment key={index}>
              <SwiperSlide
                key={prod._id}
                style={{
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
      )}
      {isError && (
        <p className="text-[1.2em] font-bold text-center">
          Algo deu errado, tente recarregar a página.
        </p>
      )}
    </>
  );
};

export default SwiperProduct;
