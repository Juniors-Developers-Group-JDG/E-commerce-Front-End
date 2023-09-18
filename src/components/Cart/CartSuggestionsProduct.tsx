import Image from 'next/image';

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
    <div>
      <Image src={imageUrl} alt={`Imagem do produto ${name}`} />
    </div>
  );
};

export default CartSuggestionsProduct;
