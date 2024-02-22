import React from "react";

const App = () => {
  // let list_items = ["Dal", "Green Vegetables", "Fruits", "Roti", "Milk"];
  let list_items = [];

  // (1) If - Else Condition :-

  // if (list_items.length === 0) {
  //   return <h1>I am still hungry</h1>;
  // }

  // (2) Ternary Operator :-

  // let Empty = list_items === 0 ? <h1>I am still hungry</h1> : null;

  // (3) Logical Operator :-

  let Empty = list_items === 0 && <h1>I am still hungry</h1>;
  return (
    <>
      <h1>Healthy Food</h1>
      {Empty}
      <ul className="list-group">
        {list_items.map((items) => (
          <li className="list-group-item">{items}</li>
          // loops can be applied using map and for each type function in js
        ))}
      </ul>
    </>
  );
};

export default App;
