import {configureStore} from '@reduxjs/toolkit';
import filtersSlice from '../slices/filtersSlice';
import todosSlice from '../slices/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice,
    filters: filtersSlice
  }
})

export default store;

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;