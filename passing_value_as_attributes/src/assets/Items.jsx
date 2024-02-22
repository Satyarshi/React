import styles from "./Items.module.css";
/* eslint-disable react/prop-types */
const Items = (props) => {
  // above line means that if multiple props are passed then fooditems represents the list_items
  // can also write props.fooditems then props.fooditems.map or we can also write like this {fooditems}=props

  // VERY IMPORTANT NOTE

  // can also write prop["fooditems"] it is used when we have - in the name for eg - if the attribute is food-items then we cannot write
  // prop.food-items.map it will give error therefore we write like this props["food-items"]
  return (
    <>
      <ul className="list-group">
        {props.fooditems.map((items) => (
          <li key={items} className={`list-group-item ${styles["kg-items"]} `}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};
/* eslint-enable react/prop-types */
export default Items;
