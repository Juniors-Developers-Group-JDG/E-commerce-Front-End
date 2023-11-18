import Image, { StaticImageData } from 'next/image';

import cartImage from '@/assets/images/cart.svg';
import plusImage from '@/assets/images/plus.svg';

interface Props {
  image: string | StaticImageData;
  title: string;
  price: string;
  olderPrice?: string;
  discount?: string;
  division?: string;
}

const Product = ({
  image,
  price,
  title,
  discount,
  olderPrice,
  division,
}: Props) => {
  return (
    <div className="bg-white border-[1px] w-fit max-w-[15.25em] border-solid border-[#879DB7] rounded-[10px] flex flex-col min-h-[20%] relative transition-all cursor-pointer hover:scale-[1.1] max-xl:w-[12.25em] max-xl:mx-[1em]">
      {discount && (
        <div className="bg-[#000033] text-white w-1/4 absolute right-0 top-[5%] text-center">
          <span>-{discount}%</span>
        </div>
      )}
      <Image
        className="self-center mt-[1.2em] p-[.5em]"
        src={image}
        alt={title}
        width={242}
        height={242}
        style={{ width: '15.125em', height: '15.125em' }}
      />
      <div className="flex flex-col bottom-0 max-w-[15em] relative flex-1">
        <span className="py-0 px-[1em]">
          {title.length > 85 ? title.slice(0, 85) + '...' : title}
        </span>
        <div className="relative h-full flex flex-col justify-end mb-[1em]">
          {olderPrice && (
            <div className="relative">
              <p className="py-0 pl-[1.1em] text-[14px]">R$ {olderPrice}</p>
              <div className="absolute w-[5.625em] h-[.2em] bg-[#3282B8] top-[45%] left-[.7em]"></div>
            </div>
          )}
          <span className="py-0 pl-[.7em] text-[1.375em] font-semibold text-[#000033]">
            R$ {price}
          </span>
          <p className="py-0 pl-[.95em]">
            Ou {division}x de {Number(price) / Number(division)}.00
          </p>
        </div>
      </div>
      <Image
        className="absolute right-[1em] bottom-[1.3em]"
        src={cartImage}
        alt="Imagem carrinho de compras"
      />
      <Image
        className="bg-[#3282B8] rounded-full scale-[1.5] p-[.1em] absolute right-[.8em] bottom-[3.1em]"
        src={plusImage}
        alt="Imagem sinal de mais"
      />
    </div>
  );
};

export default Product;
