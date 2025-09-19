import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartItem: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});


