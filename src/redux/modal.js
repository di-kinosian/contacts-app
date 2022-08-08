import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openClose: (state, action) => {
			return {
				isOpen: action.payload,
			};
		},
	},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = modalSlice.actions;

export default modalSlice;
