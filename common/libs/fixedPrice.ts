export const fixedPrice = (price: number) => {
  let singleProductPrice = price?.toString();
  let priceLength = singleProductPrice?.length;
  let amount =
    singleProductPrice?.substring(0, priceLength - 2) +
    "." +
    singleProductPrice?.substring(priceLength - 2);

  return amount;
};
