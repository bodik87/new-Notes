import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { INote } from '../models'

export const noteApi = createApi({
  reducerPath: 'noteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6343dcad2dadea1175aebff4.mockapi.io/' }),
  endpoints: (builder) => ({
    getAllNotes: builder.query<INote, string>({
      query: (name) => `notes`,
      // /notes/:id
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllNotesQuery } = noteApi