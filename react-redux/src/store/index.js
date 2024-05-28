import { createStore } from "redux";

const intialValue = { counter: 0, privacy: false };

function counterReducer(store = intialValue, action) {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 }; //...store is written so that all the rest element such as privacy is passed as it is
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { ...store, counter: store.counter + Number(action.payload.number) };
  } else if (action.type === "SUBTRACTION") {
    return { ...store, counter: store.counter - Number(action.payload.number) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
}
const counterStore = createStore(counterReducer);
export default counterStore;
