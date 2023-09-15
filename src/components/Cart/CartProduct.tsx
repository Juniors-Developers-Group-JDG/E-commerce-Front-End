export interface CartProductItem {
  name: string;
  price: number;
}

const CartProduct = ({ name, price }: CartProductItem) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default CartProduct;
