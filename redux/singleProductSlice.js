import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProduct from "../common/libs/fetchProduct";
import { getFreeAddonsQuantity } from "@/common/libs/addonsQuantity";
import { useState } from "react";

let initialState = {
  singleItem: {
    tiers: [],
  },
  selected: {
    free: [],
    paid: [],
  },
  tag_id: "",
  loading: "loading",
  errors: {},
};

export const fetchSingleProductBySlug = createAsyncThunk(
  "product/fetchSingleProductBySlug",
  async (args) => {
    const product = await fetchProduct(args);
    return product;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, { payload }) => {
      // console.log("payload", payload);
      const {
        index,
        id,
        singleAddon,
        selected,
        basket_title,
        classification,
        classification_id,
        free_item,
        max_item,
        priority,
        required,
        tag,
        tag_id,
        title,
        type,
        type_id,
      } = payload;
      if (payload?.typeOf === "free") {
        let findSelectedAddon = state.selected.free?.find(
          (item) => item.id === singleAddon.id
        );
        if (findSelectedAddon) {
          // console.log(findSelectedAddon, "findSelectedAddon");
          state.selected.free = state.selected.free?.map((item) => {
            return item.id === singleAddon.id
              ? {
                  ...findSelectedAddon,
                  quantity: findSelectedAddon.quantity + 1,
                }
              : item;
          });
        } else {
          state.selected.free = [
            ...state.selected.free,
            { ...singleAddon, quantity: 1 },
          ];
        }
      }
      if (payload?.typeOf === "paid") {
        let findSelectedAddon = state.selected.paid?.find(
          (item) => item.id === singleAddon.id
        );
        if (findSelectedAddon) {
          // console.log(findSelectedAddon, "findSelectedAddon");
          state.selected.paid = state.selected.paid?.map((item) => {
            return item.id === singleAddon.id
              ? {
                  ...findSelectedAddon,
                  quantity: findSelectedAddon.quantity + 1,
                }
              : item;
          });
        } else {
          state.selected.paid = [
            ...state.selected.paid,
            { ...singleAddon, quantity: 1 },
          ];
        }
      }
      let singleAddonObj = {
        index,
        id,
        selected: { free: state.selected?.free, paid: state.selected?.paid },
        basket_title,
        classification,
        classification_id,
        free_item,
        max_item,
        priority,
        required,
        tag,
        tag_id,
        title,
        type,
        type_id,
      };
      if (payload.type === "Addon") {
        let findExistAddon = state.singleItem.tiers?.find(
          (item) => item.id === id && item.index === index
        );
        let findExistAddonIndex = state.singleItem.tiers?.findIndex(
          (item) => item.id === id && item.index === index
        );
        if (findExistAddon) {
          state.singleItem.tiers[findExistAddonIndex].selected.free = [
            ...singleAddonObj.selected.free,
          ];
          state.singleItem.tiers[findExistAddonIndex].selected.paid = [
            ...singleAddonObj.selected.paid,
          ];
        } else {
          state.singleItem.tiers.splice(payload.index, 0, singleAddonObj);
        }
      } else {
        // console.log("hello");
        state.singleItem.tiers.splice(payload.index, 0, payload);
        // state.singleItem.tiers = [...state.singleItem.tiers, payload];
        let findIndex = state.singleItem.tiers.findIndex(
          (item) =>
            item.selected?.id !== payload.selected?.id &&
            item.index === payload.index
        );
        // console.log(findIndex, "findIndex");
        let findItem = state.singleItem.tiers.find(
          (item) =>
            item.selected?.id !== payload.selected?.id &&
            item.index === payload.index
        );
        // let findSelectedSingleAddon =
        if (findItem) {
          // console.log(findItem, "findItem");
          // console.log(state.singleItem.tiers);
          state.singleItem.tiers.splice(findIndex, 1);
        }
      }
    },
    selectSize: (state, { payload }) => {
      state.singleItem.size?.push(payload);
    },
    addAddons: (state, { payload }) => {
      console.log(payload, "payload");
    },
    removeAddons: (state, { payload }) => {},
    selectSpecificProduct: (state, action) => {
      state.tag_id = action.payload;
    },
    increaseItemCounter: (state, { payload }) => {
      if (state.singleItem.id === payload.id) {
        state.singleItem.quantity++;
      }
      state.singleItem.price += payload.price;
    },
    decreaseItemCounter: (state, { payload }) => {
      if (state.singleItem.id === payload.id) {
        state.singleItem.quantity--;
      }
      state.singleItem.price -= payload.price;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchSingleProductBySlug.fulfilled,
      (state, { payload }) => {
        // console.log("builder success", payload?.data);
        state.status = "success";
        state.singleProduct = payload?.data;
        state.singleItem.specific_tiers = payload?.data?.specific_tiers;
        state.singleItem.clickable = {};
        state.singleItem.price_delivery = payload?.data?.price_delivery;
        state.singleItem.price_takeaway = payload?.data?.price_takeaway;
        state.singleItem.slug = payload?.data?.slug;
        state.singleItem.clickables = payload?.data?.clickables;
        state.singleItem.allergens = payload?.data?.allergens;
        state.singleItem.visible_in = payload?.data?.visible_in;
        state.singleItem.discounts = payload?.data?.discounts;
        state.singleItem.title = payload?.data?.title;
        state.singleItem.id = payload?.data?.id;
        state.singleItem.image = payload?.data?.image;
        state.singleItem.description = payload?.data?.description;
        state.singleItem.quantity = 1;
      }
    );
  },
});

export const {
  selectedItem,
  selectProduct,
  selectSize,
  addAddons,
  removeAddons,
  selectSpecificProduct,
  increaseItemCounter,
  decreaseItemCounter,
} = productSlice.actions;

export const singleProductDetail = (state) => state.product.singleProduct;

export const singleItem = (state) => state.product.singleItem;

export const singleItemPrice = (state) => state.product.singleItem?.price;

export const selectedSize = (state) => state.product.singleItem.size;

export const tagId = (state) => state.product.tag_id;

export default productSlice.reducer;
