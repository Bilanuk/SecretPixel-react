import { createSlice } from '@reduxjs/toolkit';

export const ModeEnum = {
  MESSAGE: 'MESSAGE',
  EDIT: 'EDIT',
};

const initialState = {
  currentImageId: null,
  currentMode: "MESSAGE",
  modalIsOpen: false,
};

const bmpEditorSlice = createSlice({
  name: 'bmpEditor',
  initialState,
  reducers: {
    setCurrentImageId(state, action) {
      state.currentImageId = action.payload;
    },
    setCurrentMode(state, action) {
      state.currentMode = action.payload;
    },
    setModalIsOpen(state, action) {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { setCurrentImageId, setCurrentMode, setModalIsOpen } = bmpEditorSlice.actions;
export default bmpEditorSlice.reducer;
