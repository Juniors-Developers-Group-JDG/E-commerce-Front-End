import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import cartImage from '@/assets/images/cart.svg';
import plusImage from '@/assets/images/plus.svg';

interface Props {
  image: string | StaticImageData;
  title: string;
  price: string;
  olderPrice?: string;
  discount?: string;
  division?: string;
  link: string;
}

const Product = ({
  image,
  price,
  title,
  discount,
  olderPrice,
  division,
  link,
}: Props) => {
  return (
    <Link
      href={link}
      className="bg-white border-[.063em] border-solid border-[#879DB7] rounded-[.625em] flex flex-col relative transition-all cursor-pointer hover:shadow-product-miniature w-fit mx-[1em] max-w-[75%] h-fit"
    >
      {discount != '0' && discount && (
        <div className="bg-[#000033] text-white w-1/4 absolute right-0 top-[5%] text-center">
          <span>-{discount}%</span>
        </div>
      )}
      <Image
        className="self-center p-[.5em]"
        src={image}
        alt={title}
        width={242}
        height={242}
        style={{ width: '15.125em', height: '15.125em', objectFit: 'contain' }}
      />
      <div className="flex flex-col bottom-0 max-w-[15em] relative flex-1">
        <span className="py-0 px-[1em] min-h-[3em]">
          {title.length > 35 ? title.slice(0, 35) + '...' : title}
        </span>
        <div className="relative h-fit flex flex-col justify-end mb-[1em]">
          <div
            className={`relative ${
              discount != '0' && olderPrice ? 'opacity-1' : 'opacity-0'
            }`}
          >
            <p className="py-0 pl-[1.1em] text-[.875em]">R$ {olderPrice}</p>
            <div className="absolute w-[5.625em] h-[.2em] bg-[#3282B8] top-[45%] left-[.7em]"></div>
          </div>
          <span className="py-0 pl-[.7em] text-[1.375em] font-semibold text-[#000033] product-price">
            R${' '}
            {discount
              ? (
                  Number(price) -
                  (Number(price) / 100) * Number(discount)
                ).toFixed(2)
              : price}
          </span>
          <p className="py-0 pl-[.95em]">
            Ou {division == '' ? 2 : Number(division)}x de{' '}
            {(Number(price) / (division == '' ? 2 : Number(division))).toFixed(
              2,
            )}
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
    </Link>
  );
};

export default Product;
