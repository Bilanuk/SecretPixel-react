import { configureStore } from '@reduxjs/toolkit'
import { SecretPixelApi } from "./SecretPixelApi";
import userReducer from './user/userSlice';
import bmpEditorReducer from './bmpEditor/bmpEditorSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    bmpEditor: bmpEditorReducer,
    [SecretPixelApi.reducerPath]: SecretPixelApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SecretPixelApi.middleware)
})

export default store;
