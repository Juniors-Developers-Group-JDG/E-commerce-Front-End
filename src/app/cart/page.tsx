import CartProducts from '@/components/Cart/CartProducts';
import CartSuggestions from '@/components/Cart/CartSuggestions';
import CartSummary from '@/components/Cart/CartSummary';

const Cart = () => {
  return (
    <main className="w-[95%] px-12 mt-6 mx-auto">
      <h1 className="font-bold text-[2.25em] underline underline-offset-8 mb-8">
        Meu Carrinho
      </h1>
      <section className="w-full grid grid-cols-3 gap-10">
        <CartProducts />
        <div className="col-span-1">
          <CartSummary />
          <CartSuggestions />
        </div>
      </section>
    </main>
  );
};

export default Cart;
