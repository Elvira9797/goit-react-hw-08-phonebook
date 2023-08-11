import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  isOpen: false,
  selectedContact: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    toggleModal(state, action) {
      state.isOpen = !state.isOpen;
      state.selectedContact = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
