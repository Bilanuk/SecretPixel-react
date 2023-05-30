import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SecretPixelApiUrl = process.env.REACT_APP_API_URL;

export const SecretPixelApi = createApi({
  reducerPath: 'SecretPixelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SecretPixelApiUrl,
    credentials: 'include',
  }),
  endpoints: (build) => ({
    getImages: build.query({
      query: () => `images`,
      providesTags: ['Images'],
    }),
    showImage: build.query({
      query: (q) => `images/${q}`,
      providesTags: ['Images'],
    }),
    getDecodedMessage: build.mutation({
      query: (q) => ({
        url: `images/${q}/read_message`,
        method: 'GET',
        credentials: 'include',
      }),
      invalidatesTags: ['Images'],
    }),
    getRecentEncodedMessages: build.query({
      query: () => `messages/sent_messages`,
      providesTags: ['Images'],
    }),
    getRecnetDecodedMessages: build.query({
      query: () => `messages/received_messages`,
      providesTags: ['Images'],
    }),
    generateBitmap: build.mutation({
      query: (body) => ({
        url: `/images/${body?.id}/generate_dependent_bmp`,
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['Images'],
    }),
    uploadImage: build.mutation({
      query: (body) => ({
        url: `images`,
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['Images'],
    }),
    encodeMessage: build.mutation({
      query: (body) => ({
        url: `images/${body?.id}`,
        method: 'PUT',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['Images'],
    }),
  }),
});

export const {
  useGetImagesQuery,
  useShowImageQuery,
  useGetRecentEncodedMessagesQuery,
  useGetRecnetDecodedMessagesQuery,
  useGetDecodedMessageMutation,
  useEncodeMessageMutation,
  useUploadImageMutation,
  useGenerateBitmapMutation,
} = SecretPixelApi;
