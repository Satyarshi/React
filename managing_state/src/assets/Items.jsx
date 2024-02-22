/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
/* State represents data that changes over time.

It is local and private to the component

It causes the component to re-render

React function that start with word use are called hooks

Hooks should only be used inside component

Parent components can pass state down to children via props

Share state between components by moving it to their closest common ancestor  */
const Items = ({ fooditems }) => {
  let [activeItems, setActiveItems] = useState([]);
  let handleBuyButton = (items) => {
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {fooditems.map((items) => (
          <Item
            key={items}
            fooditem={items}
            bought={activeItems.includes(items)}
            onButtonClick={() => handleBuyButton(items)}
          />
        ))}
      </ul>
    </>
  );
};
/* 
State:
Local and mutable data within a component
Initialized within the component
Can change over time
Causes re-render when updated
Managed using useState in functional component

Props:
Passed into a component from its parent
Read-only(immutable) within the receiving component
Allow parent-to-child component communication
Changes in props can also cause a re-ender.
*/
export default Items;
