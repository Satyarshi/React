import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privateSlice from "./privacy";

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, private: privateSlice.reducer },
});

export default counterStore;
