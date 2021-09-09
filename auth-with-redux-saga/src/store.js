import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './auth/authSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: authReducer
	}
});
