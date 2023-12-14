import useQueryGetProducts from '@/hooks/useQueryGetProducts';

import { quantity } from './CartProducts';

const CartSummary = () => {
  const { data } = useQueryGetProducts();

  const productsSum = data
    ?.slice(0, 2)
    .reduce((a, b, index) => a + b.price * quantity[index], 0);

  return (
    <div className="flex flex-col gap-3 bg-[#ededed] rounded-xl py-6 px-4 text-[1.25em] max-lg:text-[1em] shadow-[0_0_10px_rgb(0,0,0,0.2)]">
      <p className="flex justify-between">
        Produtos:{' '}
        <span className="font-bold">
          R$ {productsSum && productsSum.toLocaleString('pt-BR')}
        </span>
      </p>
      <p className="flex justify-between">
        Entrega:{' '}
        <span className="font-bold">R$ {(36.53).toLocaleString('pt-BR')}</span>
      </p>
      <p className="flex justify-between">
        Total:{' '}
        <span className="font-bold">
          R${' '}
          {productsSum &&
            (productsSum + 36.53).toLocaleString('pt-BR', {
              style: 'decimal',
              minimumFractionDigits: 2,
            })}
        </span>
      </p>

      <button className="self-end mt-4 py-2 px-6 rounded-lg text-white font-bold bg-[#2EE356] transition-all hover:scale-[1.025]">
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartSummary;
