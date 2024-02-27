import { createContext } from "react";

const TodoItemContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
});
export { TodoItemContext };
/* Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical react application, data is passed top-down(parent to child) via props, but such usage can be cumbersome for certain types of props that are required by many components within an application . context provides a way to share values like these between compinents without having to explicitly pass a prop through every level of the tree.


This helps keep the ui and the business logic seperate from each other. */
