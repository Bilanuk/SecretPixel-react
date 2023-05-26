import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const KnSoundApiUrl = process.env.REACT_APP_API_URL

export const knSoundApi = createApi({
    reducerPath: 'knSoundApi',
    baseQuery: fetchBaseQuery({baseUrl: KnSoundApiUrl, credentials: 'include'}),
    endpoints: (build) => ({
        getRecommendedPlaylists: build.query({
            query: () => `recomended-playlists`,
            providesTags: ['Playlists'],
        }),
        showPlaylist: build.query({
            query: (q) => `playlist/${q}`,
            providesTags: ['Playlist'],
        }),
        createPlaylist: build.mutation({
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

export const { useGetRecommendedPlaylistsQuery, useShowPlaylistQuery, useCreatePlaylistMutation } = knSoundApi;
