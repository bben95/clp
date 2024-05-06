import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  data: Array(7).fill(null)
};

const nullArraySlice = createSlice({
  name: 'nullArray',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      const { index, number } = action.payload;
      if (index >= 0 && index < state.data.length) {
        state.data[index] = number;
      }
    },
    removeNumber: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.data.length) {
        state.data[index] = null;
      }
    }
  }
});

export const { addNumber, removeNumber } = nullArraySlice.actions;

export   const store = configureStore({
    reducer: nullArraySlice.reducer,
  })