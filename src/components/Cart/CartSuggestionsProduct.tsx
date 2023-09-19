import Image from 'next/image';

import cartImage from '@/assets/images/cart.svg';

export interface CartSuggestionsProductItem {
  name: string;
  price: number;
  imageUrl: string;
  discount?: number;
}

const CartSuggestionsProduct = ({
  name,
  price,
  imageUrl,
  discount,
}: CartSuggestionsProductItem) => {
  return (
    <div className="py-4 px-5 bg-white rounded-lg border-[1px] border-[#879DB7] relative">
      <Image
        src={imageUrl}
        alt={`Imagem do produto ${name}`}
        className="w-[210px] h-[210px] max-xl:h-[180px] max-lg:h-[130px]"
      />
      {discount && (
        <span className="absolute right-0 top-10  px-3 bg-[#000033] text-white text-[1.5625em]">{`-${discount}%`}</span>
      )}
      <div className="text-[1.125em] font-bold">
        <h2 className="mb-12 max-lg:mb-2">{name}</h2>
        <span className="flex justify-between">
          R${' '}
          {discount
            ? (price - (price * discount) / 100).toLocaleString('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : price.toLocaleString('pt-BR')}
          <button>
            <Image
              className="transition-all cursor-pointer hover:scale-[1.1]"
              src={cartImage}
              width={30}
              alt="Imagem carrinho de compras"
            />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartSuggestionsProduct;
