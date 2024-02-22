// List.jsx
import Item1 from "./assets/item1";
import Items from "./assets/items";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  let listItems = [
    { name: "Buy Milk", date: "4/10/23" },
    { name: "Go To College", date: "4/10/23" },
  ];

  return (
    <center>
      <h1>TODO LIST</h1>
      <Item1 />
      <Items items={listItems} />
    </center>
  );
}

export default List;
