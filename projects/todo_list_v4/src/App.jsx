// List.jsx
import { useState } from "react";
import Item1 from "./assets/item1";
import Items from "./assets/items";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  let [listItems, setListItems] = useState([
    { name: "Buy Milk", date: "4/10/23" },
    { name: "Go To College", date: "4/10/23" },
  ]);
  const handleOnClick = (task, time) => {
    const newListItems = [...listItems, { name: task, date: time }];
    setListItems(newListItems);
  };
  const handleDelete = (name) => {
    const updatedList = listItems.filter((item) => item.name !== name);
    setListItems(updatedList);
  };
  return (
    <center>
      <h1>TODO LIST</h1>
      <Item1 onClick={handleOnClick} />
      <Items items={listItems} onClick={handleDelete} />
    </center>
  );
}

export default List;
