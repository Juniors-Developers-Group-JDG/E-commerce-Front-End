'use client';

import Image from 'next/image';

import { priceToString } from '@/utils/price-formatting';
import minusIcon from '@/assets/images/cart-minus.svg';
import plusIcon from '@/assets/images/cart-plus.svg';
import deleteIcon from '@/assets/images/cart-delete.svg';

import CartButton from './CartButton';

export interface CartProductItem {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  totalPrice: number;
}

const CartProduct = ({
  name,
  price,
  imageUrl,
  quantity,
  totalPrice,
}: CartProductItem) => {
  return (
    <div className="flex py-6 px-4 border-b-[1px] border-black border-opacity-80">
      <Image src={imageUrl} alt={`Imagem do produto: ${name}`} width={350} />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-[1.75em] font-bold">{name}</h2>
          <div className="text-[2.5em]">
            {quantity > 1 && (
              <div className="text-[#1B1B1B] text-[1.5rem] opacity-40">
                <span className="font-bold">{quantity}x </span>
                <sup>R$</sup>{' '}
                <span className="font-bold">
                  {priceToString(price).integerPrice}{' '}
                </span>
                <sup> {priceToString(price).centsPrice}</sup>
              </div>
            )}
            <div>
              <sup>R$</sup>{' '}
              <span className="font-bold">
                {priceToString(totalPrice).integerPrice}{' '}
              </span>
              <sup> {priceToString(totalPrice).centsPrice}</sup>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CartButton type="NEUTRAL">
            <Image src={minusIcon} alt="Botão de diminuir quantidade do item" />
          </CartButton>
          <span className="text-[1.75em] font-bold">{quantity}</span>
          <CartButton type="SUCCESS">
            <Image src={plusIcon} alt="Botão de aumentar quantidade do item" />
          </CartButton>
          <button className="ms-4 transition-all hover:scale-[1.1]">
            <Image src={deleteIcon} alt="Botão de deletar item do carrinho" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
