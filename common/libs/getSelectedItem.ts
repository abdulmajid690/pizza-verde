import { useDispatch, useSelector } from "react-redux";

export function GetSelectedItem(selectedItem: any) {
  const productArray = useSelector(
    (state: any) => state.product.singleItem.tiers
  );
  console.log(productArray, "productArray");
  return productArray;
}
