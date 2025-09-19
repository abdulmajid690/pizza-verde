export default function showSizePrice(type: string, products: any) {
  let sizeAmount: any = [];
  if (type === "Size") {
    let priceArr = products?.map((product: any) => {
      return product.price?.map((p: any) => {
        // console.log(p);
        sizeAmount.push(p.price_takeaway);
      });
    });
  }
  return sizeAmount;
}
