import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchMenu from "@/common/libs/fetchMenu";

const initialState = {
  saveSlug:"",
  loading: "loading",
  errors: {},
};

export const fetchMenuItems = createAsyncThunk(
  "items/fetchMenu",
  async (args) => {
    // console.log("args", args);
    const response = await fetchMenu(args);
    // console.log("response", response);
    return response;
  }
);

export const menuItemsSlice = createSlice({
  name: "fetch items by slug",
  initialState,
  reducers:{
    
savedSlug:(state,action)=>{
  console.log("payload",action)
  state.saveSlug=action.payload
}
  },
  extraReducers(builder) {
    builder.addCase(fetchMenuItems.fulfilled, (state, { payload }) => {
      // console.log("builder success", payload?.data);
      state.status = "success";
      state.menuItems = payload?.data;
    });
  },
});
export const {savedSlug} = menuItemsSlice.actions;
export const Items = (state) => state.items.menuItems;

export default menuItemsSlice.reducer;
