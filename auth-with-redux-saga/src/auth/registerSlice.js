import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false
};
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    postData: (state) => {
      state.loading = true;
    },
    postDataSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    postDataFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.err = action.payload;
    }
  }
});
export const { postData, postDataSuccess, postDataFailure } =
  registerSlice.actions;
export default registerSlice.reducer;
