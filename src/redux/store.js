import { configureStore } from '@reduxjs/toolkit'
import { SecretPixelApi } from "./SecretPixelApi";
import userReducer from './user/userSlice';
import imageListReducer from './imageList/imageListSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    imageList: imageListReducer,
    [SecretPixelApi.reducerPath]: SecretPixelApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SecretPixelApi.middleware)
})

export default store;
