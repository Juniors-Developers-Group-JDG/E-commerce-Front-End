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
    <div className="bg-[#ededed] py-3 px-7 col-span-2 rounded-xl">
      {products.map(product => (
        <CartProduct
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          quantity={product.quantity}
          totalPrice={product.totalPrice}
        />
      ))}

      <div className="py-6 text-[2.25em] float-right">
        Produtos:{' '}
        <span className="font-bold">
          R$ {productsSum.toLocaleString('pt-BR')}
        </span>
      </div>
    </div>
  );
};

export default CartProducts;
