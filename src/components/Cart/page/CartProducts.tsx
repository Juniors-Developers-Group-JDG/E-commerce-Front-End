import useQueryGetProducts from '@/hooks/useQueryGetProducts';

import CartProduct from './CartProduct';

export const quantity = [
  Math.ceil(Math.random() * 3),
  Math.ceil(Math.random() * 3),
];

const CartProducts = () => {
  const { data } = useQueryGetProducts();

  const productsSum = data
    ?.slice(0, 2)
    .reduce((a, b, index) => a + b.price * quantity[index], 0);

  return (
    <div className="flex flex-col flex-1 bg-[#ededed] py-3 px-7 max-md:px-3 col-span-2 max-lg:col-span-3 rounded-xl shadow-[0px_0px_10px_3px_#2626261A]">
      {data &&
        data
          .slice(0, 2)
          .map((product, index) => (
            <CartProduct
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.images[0]}
              quantity={quantity[index]}
            />
          ))}

      <div className="pt-6 text-[2.25em] max-xl:text-[2em] max-lg:text-[1.5em] max-md:text-[1em] flex flex-1 self-end">
        <span className="self-end">
          Produtos:{' '}
          <span className="font-bold">
            R$ {productsSum && productsSum.toLocaleString('pt-BR')}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartProducts;
