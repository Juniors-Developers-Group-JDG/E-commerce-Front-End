'use client';

import CartProducts from '@/components/Cart/page/CartProducts';
import CartSuggestions from '@/components/Cart/page/CartSuggestions';
import CartSummary from '@/components/Cart/page/CartSummary';
import Footer, { designer_juan } from '@/components/Layout/Footer';

const Cart = () => {
  return (
    <>
      <main className="flex-1 w-[95%] px-12 max-md:px-6 mt-6 mx-auto max-md:mt-[6em]">
        <h1 className="font-bold text-[2.25em] max-md:text-[1.5em] underline underline-offset-8">
          Meu Carrinho
        </h1>
        <section className="w-full grid grid-cols-3 max-lg:grid-cols-5 max-md:block gap-10 max-lg:gap-5 my-8">
          <CartProducts />
          <div className="col-span-1 max-lg:col-span-2 flex flex-col max-md:justify-between gap-10 max-lg:gap-5 max-md:mt-5 ">
            <CartSummary />
            <CartSuggestions />
          </div>
        </section>
      </main>
      <Footer name={designer_juan.name} link={designer_juan.link} />
    </>
  );
};

export default Cart;
