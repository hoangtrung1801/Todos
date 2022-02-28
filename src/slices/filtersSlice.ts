import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface FilterState {
  filters: string[],
  filterIndex: number 
}

const initialState: FilterState = {
  filters: ["All", "Active", "Completed"],
  filterIndex: 0
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<number>) => {
      state.filterIndex = action.payload;
    }
  }
})

export const {changeFilter} = filtersSlice.actions;
export const selectFilterIndex = (state: RootState) => state.filters.filterIndex;

export default filtersSlice.reducer;