export const priceToString = (price: number) => {
  const priceStringArray = price.toString().split('.');

  const integerPart = Math.floor(price).toLocaleString('pt-BR');
  const priceCents = priceStringArray[priceStringArray.length - 1];

  return {
    integerPart,
    priceCents,
  };
};
