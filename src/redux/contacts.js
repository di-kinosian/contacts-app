import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [
		{
			id: '1',
			name: 'Alex',
			position: 'developer',
            number: '+38063-22-99-369'
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
		onDelete: (state, action) => {
			return {
				...state,
				list: state.list.filter((el) => {
					return el.id !== action.payload;
				}),
			};
		},
	},
});
