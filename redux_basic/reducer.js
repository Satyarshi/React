const redux = require("redux");

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  let newState = state;
  if (action.type === "INCREMENT") {
    newState = { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    newState = { count: state.count - 1 };
  } else if (action.type === "ADDITION") {
    newState = { count: state.count + action.payload.number };
  } else if (action.type === "SUBTRACTION") {
    newState = { count: state.count - action.payload.number };
  }
  return newState;
}

const store = redux.createStore(reducer);

function Subscriber() {
  const subs = store.getState();
  console.log("It will print the newstate ", subs);
}

store.subscribe(Subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "SUBTRACTION", payload: { number: 7 } });
