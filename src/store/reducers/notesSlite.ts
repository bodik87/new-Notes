import { createSlice } from "@reduxjs/toolkit";
import { INote } from "../../models";

interface NotesState {
  notes: INote[],
  isLoading: boolean;
  error: string;
}

const initialState: NotesState = {
  notes: [],
  isLoading: false,
  error: ''
} 

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {}
})

export default notesSlice.reducer