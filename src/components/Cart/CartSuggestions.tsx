import xboxImage from '@/assets/images/xbox.svg';
import ps5Image from '@/assets/images/ps5.svg';

import CartSuggestionsProduct, {
  CartSuggestionsProductItem,
} from './CartSuggestionsProduct';

interface CartSuggestionsProps {
  suggestions: CartSuggestionsProductItem[];
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

const CartSuggestions = ({ suggestions = mockProducts }) => {
  return (
    <div className="flex flex-col items-center py-6 px-4 bg-[#ededed] rounded-xl gap-4 max-h-[640px] overflow-y-scroll">
      <h2 className="text-center text-[1.5em] mb-2">
        Esqueceu <span className="underline underline-offset-8">Isso</span>?
      </h2>
      {suggestions.map(suggestionItem => (
        <CartSuggestionsProduct
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
