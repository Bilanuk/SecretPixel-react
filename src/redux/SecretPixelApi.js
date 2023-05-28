import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SecretPixelApiUrl = process.env.REACT_APP_API_URL

export const SecretPixelApi = createApi({
    reducerPath: 'SecretPixelApi',
    baseQuery: fetchBaseQuery({baseUrl: SecretPixelApiUrl, credentials: 'include'}),
    endpoints: (build) => ({
        getImages: build.query({
            query: () => `images`,
            providesTags: ['Images'],
        }),
        showImage: build.query({
            query: (q) => `images/${q}`,
            providesTags: ['Images'],
        }),
        createImage: build.mutation({
            query: (body) => ({
                url: `playlist`,
                method: 'POST',
                credentials: 'include',
                body,
            }),
            invalidatesTags: ['Playlists'],
        }),
    })
});

export const { useGetImagesQuery, useShowImageQuery, useCreateImageMutation } = SecretPixelApi;
