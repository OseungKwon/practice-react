import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   loginSuccess: false
// };

const initialState = {};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    postData: (state) => {
      //state.loading = true;
    },
    postDataSuccess: (state, action) => {
      //state.loading = false;
      state.userData = action.payload;
    },
    postDataFailure: (state, action) => {
      //state.loading = false;
      state.loginSuccess = false;
      state.err = action.payload;
    }
  }
});
export const { postData, postDataSuccess, postDataFailure } =
  loginSlice.actions;
export default loginSlice.reducer;
