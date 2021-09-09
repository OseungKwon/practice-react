import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./auth/registerSlice";
import loginReducer from "./auth/loginSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: authReducer,
    login: loginReducer
  }
});
