import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TCounterData = {
  count: number;
};

const initialState: TCounterData = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    updateCounter: (
      state,
      action: PayloadAction<'increment' | 'decrement'>,
    ) => {
      if (action.payload === 'increment') {
        state.count += 1;
      } else {
        state.count -= 1;
      }
    },
    resetCounter: state => {
      state.count = 0;
    },
  },
});

export const {updateCounter, resetCounter} = counterSlice.actions;

export default counterSlice.reducer;
