// Itemstore.jsx
import React, { createContext, useReducer } from "react";

const TodoItemContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
});
export { TodoItemContext };

const todoItemsReducer = (currListItems, action) => {
  let newListItems = currListItems;
  if (action.type === "NEW_ITEM") {
    newListItems = [
      ...currListItems,
      { name: action.payload.task, date: action.payload.time },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newListItems = currListItems.filter(
      (item) => item.name !== action.payload.name
    );
  }
  return newListItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [listItems, dispatchListItems] = useReducer(todoItemsReducer, []);
  const addItems = (task, time) => {
    const addItemAction = { type: "NEW_ITEM", payload: { task, time } };
    dispatchListItems(addItemAction);
  };
  const deleteItems = (name) => {
    const deleteItemAction = { type: "DELETE_ITEM", payload: { name } };
    dispatchListItems(deleteItemAction);
  };
  return (
    <TodoItemContext.Provider
      value={{
        todoItems: listItems,
        addItems: addItems,
        deleteItems: deleteItems,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
