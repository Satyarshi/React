// List.jsx
import { useReducer, useState } from "react";
import Item1 from "./assets/item1";
import Items from "./assets/items";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./assets/welcome";
import TodoItemContextProvider from "./store/Itemstore";
function List() {
  return (
    <center>
      <TodoItemContextProvider>
        <h1>TODO LIST</h1>
        <Item1 />
        <Welcome />
        <Items />
      </TodoItemContextProvider>
    </center>
  );
}

export default List;
