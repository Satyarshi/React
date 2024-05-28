import { createSlice } from "@reduxjs/toolkit";

const privateSlice = createSlice({
  name: "private",
  initialState: false, // can pass value directly instead of creating a object
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

// For the privateSlice, the state is a boolean (false). Primitive values cannot be directly mutated in the same way as objects. Instead, you need to return the new value directly.The toggle reducer works with a boolean state. Since primitive values can't be directly mutated, you must return the new state value.

export const privacyAction = privateSlice.actions;
export default privateSlice;
