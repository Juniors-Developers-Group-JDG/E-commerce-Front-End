import ps5Image from '@/assets/images/ps5.svg';
import xboxImage from '@/assets/images/xbox.svg';

import CartSuggestionsProduct, {
  CartSuggestionsProductItem,
} from './CartSuggestionsProduct';

interface CartSuggestionsProps {
  suggestions?: CartSuggestionsProductItem[];
}

const mockProducts = [
  {
    name: 'Xbox Series X',
    price: 4999.99,
    imageUrl: xboxImage,
    totalPrice: 4999.99,
  },
  {
    name: 'PlayStation 5',
    price: 4999.99,
    imageUrl: ps5Image,
    totalPrice: 9999.98,
    discount: 20,
  },
];

const CartSuggestions = ({
  suggestions = mockProducts,
}: CartSuggestionsProps) => {
  return (
    <div className="flex flex-col items-center py-6 px-4 bg-[#ededed] rounded-xl gap-5 max-h-[640px] max-xl:max-h-[500px] max-lg:max-h-[300px] overflow-y-scroll shadow-[0_0_10px_rgb(0,0,0,0.2)]">
      <h2 className="text-center text-[1.5em] mb-2">
        Esqueceu <span className="underline underline-offset-8">Isso</span>?
      </h2>
      {suggestions.map((suggestionItem, index) => (
        <CartSuggestionsProduct
          key={index}
          name={suggestionItem.name}
          price={suggestionItem.price}
          imageUrl={suggestionItem.imageUrl}
          discount={suggestionItem.discount}
        />
      ))}
    </div>
  );
};

export default CartSuggestions;
