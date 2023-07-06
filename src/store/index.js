import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    deccrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterslice.actions;
const store = configureStore({
  reducer: counterslice.reducer,
});

export default store;
