// List.jsx
import { useState } from "react";
import Item1 from "./assets/item1";
import Items from "./assets/items";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./assets/welcome";
import { TodoItemContext } from "./store/Itemstore";
function List() {
  let [listItems, setListItems] = useState([]);
  const addItems = (task, time) => {
    const newListItems = [...listItems, { name: task, date: time }];
    setListItems(newListItems);
  };
  const deleteItems = (name) => {
    const updatedList = listItems.filter((item) => item.name !== name);
    setListItems(updatedList);
  };
  return (
    <center>
      <TodoItemContext.Provider
        value={{
          todoItems: listItems,
          addItems: addItems,
          deleteItems: deleteItems,
        }}
      >
        <h1>TODO LIST</h1>
        <Item1 />
        <Welcome />
        <Items />
      </TodoItemContext.Provider>
    </center>
  );
}

export default List;
