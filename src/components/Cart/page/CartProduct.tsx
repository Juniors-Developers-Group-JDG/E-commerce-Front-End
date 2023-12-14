'use client';

import Image from 'next/image';

import deleteIcon from '@/assets/images/cart-page/cart-delete.svg';
import minusIcon from '@/assets/images/cart-page/cart-minus.svg';
import plusIcon from '@/assets/images/cart-page/cart-plus.svg';
import { priceToString } from '@/utils/price-formatting';

import CartButton from './CartButton';

export interface CartProductItem {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const CartProduct = ({ name, price, imageUrl, quantity }: CartProductItem) => {
  return (
    <div className="flex max-md:justify-between py-6 px-4 border-b-[1px] border-black border-opacity-80 max-lg:gap-4">
      <Image
        src={imageUrl}
        alt={`Imagem do produto: ${name}`}
        width={250}
        height={250}
        className="max-h-[16em] mix-blend-multiply object-contain"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-[1.75em] max-xl:text-[1.5em] max-lg:text-[1.25em] max-sm:text-[.875em] font-bold">
            {name}
          </h2>
          <div className="text-[2.5em] max-xl:text-[2em] max-lg:text-[1.5em] max-sm:text-[1em]">
            {quantity > 1 && (
              <div className="text-[#1B1B1B] text-[1.5rem] max-lg:text-[1rem] max-sm:text-[.75rem] opacity-40">
                <span className="font-bold">{quantity}x </span>
                <sup>R$</sup>{' '}
                <span className="font-bold">
                  {priceToString(price, 1).integerPrice}{' '}
                </span>
                <sup> {priceToString(price, 1).centsPrice}</sup>
              </div>
            )}
            <div>
              <sup>R$</sup>{' '}
              <span className="font-bold">
                {priceToString(price, quantity).integerPrice}{' '}
              </span>
              <sup> {priceToString(price, quantity).centsPrice}</sup>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CartButton type="NEUTRAL">
            <Image src={minusIcon} alt="Botão de diminuir quantidade do item" />
          </CartButton>
          <span className="text-[1.75em] max-lg:text-[1.25em] font-bold">
            {quantity}
          </span>
          <CartButton type="SUCCESS">
            <Image src={plusIcon} alt="Botão de aumentar quantidade do item" />
          </CartButton>
          <button className="ms-4 transition-all hover:scale-[1.1]">
            <Image
              src={deleteIcon}
              alt="Botão de deletar item do carrinho"
              className="max-lg:h-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
