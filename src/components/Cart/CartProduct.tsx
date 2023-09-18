import { priceToString } from '@/utils/price-formatting';
import Image from 'next/image';

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
                  {priceToString(price).integerPart}{' '}
                </span>
                <sup> {priceToString(price).priceCents}</sup>
              </div>
            )}
            <div>
              <sup>R$</sup>{' '}
              <span className="font-bold">
                {priceToString(totalPrice).integerPart}{' '}
              </span>
              <sup> {priceToString(totalPrice).priceCents}</sup>
            </div>
          </div>
        </div>
        <p>Quantidade</p>
      </div>
    </div>
  );
};

export default CartProduct;
