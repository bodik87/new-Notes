import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { INote } from "../models";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6343dcad2dadea1175aebff4.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getAllNotes: builder.query<INote[] | undefined, string>({
      query: () => `notes`,
      // /notes/:id
    }),
  }),
});

export const { useGetAllNotesQuery } = noteApi;
