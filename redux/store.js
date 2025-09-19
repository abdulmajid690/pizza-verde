import { configureStore } from "@reduxjs/toolkit";
import branchSlice from "@/redux/findStoreSlice";
import menuItemsSlice from "@/redux/menuItemsSlice";
import productSlice from "@/redux/singleProductSlice";

export const store = configureStore({
  reducer: {
    branch: branchSlice,
    items: menuItemsSlice,
    product: productSlice,
  },
});

