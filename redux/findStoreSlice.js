import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchPostCode from "../common/libs/fetchPostCode";

const initialState = {
  status: "idle",
  error: "",
};

export const fetchPostCodeByBranchData = createAsyncThunk(
  "postcode/fetchPostCodeByBranchData",
  async (args) => {
    const response = await fetchPostCode(args);
    console.log("postcode-respones", response);
    return response;
  }
);

export const branchSlice = createSlice({
  name: "fetch branch by post code",
  initialState,
  extraReducers(builder) {
    builder.addCase(
      fetchPostCodeByBranchData.fulfilled,
      (state, { payload }) => {
        state.status = "success";
        state.branch = payload?.data;
      }
    );
  },
});

export default branchSlice.reducer;
