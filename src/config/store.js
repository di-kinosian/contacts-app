import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from '../redux/modal';
import { contactsSlice } from '../redux/contacts';

export const store = configureStore({
	reducer: {
		modal: modalSlice.reducer,
		contacts: contactsSlice.reducer,
	},
});
