import Product from '@/components/Product';
import useQueryGetProducts from '@/hooks/useQueryGetProducts';

const CartSuggestions = () => {
  const { data } = useQueryGetProducts();

  return (
    <div className="flex flex-col items-center py-6 px-4 bg-[#ededed] rounded-xl gap-5 max-h-[640px] max-xl:max-h-[500px] max-lg:max-h-[300px] overflow-y-scroll shadow-[0_0_10px_rgb(0,0,0,0.2)]">
      <h2 className="text-center text-[1.5em] mb-2">
        Esqueceu <span className="underline underline-offset-8">Isso</span>?
      </h2>
      {data &&
        data
          .slice(2, 4)
          .map((suggestionItem, index) => (
            <Product
              key={index}
              title={suggestionItem.name}
              price={suggestionItem.price.toString()}
              image={suggestionItem.images[0]}
              discount={suggestionItem.discount.toString()}
              division={''}
              olderPrice={suggestionItem.price.toString()}
              link={`/product/${index + 3}`}
            />
          ))}
    </div>
  );
};

export default CartSuggestions;
