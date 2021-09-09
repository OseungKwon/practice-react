import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	hasError: false,
	users: []
};
export const authSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		postData: (state) => {
			state.loading = true;
		},
		postDataSuccess: (state, action) => {
			state.loading = false;
			state.hasError = false;
			state.users = action.payload;
		},
		postDataFailure: (state) => {
			state.loading = false;
			state.hasError = true;
		}
	}
});
export const { postData, postDataSuccess, postDataFailure } = authSlice.actions;
export default authSlice.reducer;
