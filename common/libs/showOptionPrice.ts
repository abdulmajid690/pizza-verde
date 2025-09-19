import { useSelector } from "react-redux";
import { selectedSize } from "@/redux/singleProductSlice";

export default function showOptionPrice(type: string, products: any) {
  let size = useSelector(selectedSize);
  let optionAmount: any = [];
  // let sizeId: any;

  // if (size.length > 0) {
  //   sizeId = size?.map((s: any) => {
  //     return s.id;
  //   });
  // }
  // console.log("sizeId", sizeId);

  if (type === "Option") {
    let priceArray = products?.map((product: any) => {
      return product.price?.filter((p: any) => {
        // if (p.size_id === parseFloat(sizeId[0])) {
        //   optionAmount.push(p.price_takeaway);
        // }
      });
    });
  }
  // console.log9

  return optionAmount;
}
