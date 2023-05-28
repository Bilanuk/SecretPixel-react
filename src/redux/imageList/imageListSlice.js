import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    images: [],
    currentImage: null,
}

const imageListSlice = createSlice({
    name: 'imageList',
    initialState,
    reducers: {
        setImageList(state, action) {
            state.images = action.payload
        },
        setCurrentImage(state, action) {
            state.currentImage = action.payload
        }
    },
})

export const {
    setImageList,
    setCurrentImage,
} = imageListSlice.actions
export default imageListSlice.reducer

