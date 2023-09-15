import CartProduct, { CartProductItem } from './CartProduct';

interface CartProductsProps {
  products?: CartProductItem[];
}

// Coloquei o '?' para não dar erro

const mockProducts = [
  {
    name: 'Xbox Series X',
    price: 4999.99,
  },
  {
    name: 'Playstation 5',
    price: 9999.98,
  },
];

const CartProducts = ({ products = mockProducts }: CartProductsProps) => {
  return (
    <div className="bg-[#ededed] col-span-2 rounded-xl">
      {products.map(product => (
        <CartProduct name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default CartProducts;
