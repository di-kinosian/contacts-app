import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [
		{
			id: 1,
			name: 'Alex',
			position: 'developer',
		},
	],
};

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		add: (state, action) => {
			return {
				...state,
				list: [...state.list, action.payload],
			};
		},
	},
});
