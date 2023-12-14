import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import useQueryGetProducts from '@/hooks/useQueryGetProducts';

import Product from '../Product';

interface Props {
  fetchStyle: string;
}

const SwiperHome = ({ fetchStyle }: Props) => {
  const { data, isFetching, isError } = useQueryGetProducts();
  const reversedData = data?.reverse();

  switch (fetchStyle) {
    case 'normal': {
      return (
        <>
          {isFetching && !data && (
            <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
          )}
          {data && (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 5,
                },
                1920: {
                  slidesPerView: 6,
                },
                2040: {
                  slidesPerView: 7,
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
          )}
          {isError && (
            <p className="text-[1.2em] font-bold text-center">
              Algo deu errado, tente recarregar a página.
            </p>
          )}
        </>
      );
    }
    case 'discount': {
      return (
        <>
          {isFetching && !data && (
            <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
          )}
          {data && (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 5,
                },
                1920: {
                  slidesPerView: 6,
                },
                2040: {
                  slidesPerView: 7,
                },
              }}
            >
              {data?.map((prod, index) => (
                <React.Fragment key={index}>
                  {prod.discount !== 0 && (
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
    }
    case 'newest': {
      return (
        <>
          {isFetching && !data && (
            <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
          )}
          {data && (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 5,
                },
                1920: {
                  slidesPerView: 6,
                },
                2040: {
                  slidesPerView: 7,
                },
              }}
            >
              {reversedData &&
                reversedData.map((prod, index) => (
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
          )}
          {isError && (
            <p className="text-[1.2em] font-bold text-center">
              Algo deu errado, tente recarregar a página.
            </p>
          )}
        </>
      );
    }
  }
  // return (
  //   <>
  //     {isFetching && !data && (
  //       <div className="w-[5em] h-[5em] border-solid border-[.65em] border-[#f1f1f1] border-t-[#000033] rounded-full animate-spin"></div>
  //     )}
  //     {data && (
  //       <Swiper
  //         navigation={true}
  //         modules={[Navigation]}
  //         className="mySwiper"
  //         slidesPerView={1}
  //         breakpoints={{
  //           768: {
  //             slidesPerView: 3,
  //           },
  //           1024: {
  //             slidesPerView: 4,
  //           },
  //           1440: {
  //             slidesPerView: 5,
  //           },
  //           1920: {
  //             slidesPerView: 6,
  //           },
  //           2040: {
  //             slidesPerView: 7,
  //           },
  //         }}
  //       >
  //         {data?.map((prod, index) => (
  //           <React.Fragment key={index}>
  //             <SwiperSlide
  //               key={prod._id}
  //               style={{
  //                 display: 'flex',
  //                 justifyContent: 'space-evenly',
  //                 padding: '1em 0',
  //               }}
  //             >
  //               <Product
  //                 title={prod.name}
  //                 price={prod.price?.toString()}
  //                 image={prod.images[0]}
  //                 discount={prod.discount.toString()}
  //                 division=""
  //                 olderPrice={prod.price?.toString()}
  //                 link={`/product/${index + 1}`}
  //               />
  //             </SwiperSlide>
  //           </React.Fragment>
  //         ))}
  //       </Swiper>
  //     )}
  //     {isError && (
  //       <p className="text-[1.2em] font-bold text-center">
  //         Algo deu errado, tente recarregar a página.
  //       </p>
  //     )}
  //   </>
  // );
};

export default SwiperHome;
