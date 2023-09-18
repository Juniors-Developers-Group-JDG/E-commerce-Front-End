export const priceToString = (price: number) => {
  const priceStringArray = price.toString().split('.');

  const integerPrice = Math.floor(price).toLocaleString('pt-BR');
  const centsPrice = priceStringArray[priceStringArray.length - 1];

  return {
    integerPrice,
    centsPrice,
  };
};
