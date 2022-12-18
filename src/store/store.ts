import { setupListeners } from '@reduxjs/toolkit/query'
import { noteApi } from '../services/NotesService'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [noteApi.reducerPath]: noteApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)