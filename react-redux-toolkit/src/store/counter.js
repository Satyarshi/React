import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++; // can change the value of state counterVal directly without creating new state
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtraction: (state, action) => {
      state.counterVal -= action.payload;
    },
  },
});

// For the counterSlice, the state is an object ({ counterVal: 0 }). Here, you can directly modify the property counterVal using mutative operations without needing to return the state explicitly.The subtraction reducer works with an object state. You can directly mutate properties of the state object.


const counterAction = counterSlice.actions;


export { counterAction }; 

// here we have exported slice actions


export default counterSlice;
