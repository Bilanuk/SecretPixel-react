import { createSlice } from '@reduxjs/toolkit';

export const currentMode = {
  MESSAGE: 'MESSAGE',
  EDIT: 'EDIT',
};

const initialState = {
  currentImageId: null,
  currentMode,
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
  },
});

export const { setCurrentImageId, setCurrentMode } = bmpEditorSlice.actions;
export default bmpEditorSlice.reducer;
