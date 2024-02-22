/* eslint-disable react/prop-types */

import styles from "./Items.module.css";

const Items = ({ fooditems, onButtonClick }) => {
  // above line means that if multiple props are passed then fooditems represents the list_items
  // can also write props.fooditems then props.fooditems.map or we can also write like this {fooditems}=props

  // VERY IMPORTANT NOTE

  // can also write prop["fooditems"] it is used when we have - in the name for eg - if the attribute is food-items then we cannot write
  // prop.food-items.map it will give error therefore we write like this props["food-items"]
  return (
    <>
      <ul className="list-group">
        {fooditems.map((items) => (
          <li key={items} className={`list-group-item`}>
            {items}
            <button
              type="button"
              className={`${styles.button} btn btn-info`}
              onClick={() => onButtonClick(items)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
/* passing function as prop enables upward communication from child to parent 

it is commonly used for event handling 

parents define a function/behaviour and child invokes it 

generally the property or behaviour is set by the parent container and the child container job is just to invoke the function
*/
export default Items;
