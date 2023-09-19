import CartProduct, { CartProductItem } from './CartProduct';

import xboxImage from '@/assets/images/xbox.svg';
import ps5Image from '@/assets/images/ps5.svg';

interface CartProductsProps {
  products?: CartProductItem[];
}

// Coloquei o '?' para não dar erro

const mockProducts = [
  {
    name: 'Xbox Series X',
    price: 4999.99,
    imageUrl: xboxImage,
    quantity: 1,
    totalPrice: 4999.99,
  },
  {
    name: 'PlayStation 5',
    price: 4999.99,
    imageUrl: ps5Image,
    quantity: 2,
    totalPrice: 9999.98,
  },
];

const CartProducts = ({ products = mockProducts }: CartProductsProps) => {
  const productsSum = products.reduce((a, b) => a + b.totalPrice, 0);

  return (
    <div className="flex flex-col flex-1 bg-[#ededed] py-3 px-7 max-md:px-3 col-span-2 max-lg:col-span-3 rounded-xl shadow-[0px_0px_10px_3px_#2626261A]">
      {products.map(product => (
        <CartProduct
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          quantity={product.quantity}
          totalPrice={product.totalPrice}
        />
      ))}

      <div className="pt-6 text-[2.25em] max-xl:text-[2em] max-lg:text-[1.5em] max-md:text-[1em] flex flex-1 self-end">
        <span className="self-end">
          Produtos:{' '}
          <span className="font-bold">
            R$ {productsSum.toLocaleString('pt-BR')}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartProducts;
