import { useSelector } from "react-redux";
import { selectedSize } from "@/redux/singleProductSlice";

export default function showAddonsPrice(type: string, addons: any) {
  let size = useSelector(selectedSize);

  let addonsAmount: any = [];

  if (type === "Addon") {
    let addonsPrice = addons?.map((addon: any) => {
      if (size?.id) {
        addon.price.filter((p: any) => {
          if (p.size_id === size.id) {
            addonsAmount.push(p.price_takeaway);
          }
        });
      } else {
        addonsAmount.push(addon.price[0]?.price_takeaway);
      }
    });
  }

  return addonsAmount;
}
