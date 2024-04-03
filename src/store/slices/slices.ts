import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


export interface SliceState {
  filter: string,
}

const initialState: SliceState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    update: (state, action: {payload: {filter: string}}) => {
      state.filter = action.payload.filter;
    },
    reset: (state) => {
      state.filter = "";
    },
  },
});

export const { update, reset } = filterSlice.actions;


export const selectFilter = (state: RootState) => state.filter.filter;

export default filterSlice.reducer;