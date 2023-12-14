export const priceToString = (price: number, quantity: number) => {
  const priceStringArray = Math.floor(price * quantity)
    .toFixed(2)
    .toLocaleString()
    .split('.');

  const integerPrice = Math.floor(price * quantity).toLocaleString('pt-BR');
  const centsPrice = priceStringArray[priceStringArray.length - 1];
  const totalPrice = price * quantity;

  return {
    integerPrice,
    centsPrice,
    totalPrice,
  };
};
