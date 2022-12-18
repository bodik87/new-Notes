import { notesSlice } from './reducers/notesSlite';
import { setupListeners } from '@reduxjs/toolkit/query'
import { noteApi } from '../services/NotesService'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    reducer: notesSlice.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector