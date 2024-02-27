// Items.jsx
import PropTypes from "prop-types";
import styles from "./Items.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../store/Itemstore";

const Items = () => {
  const { todoItems, deleteItems } = useContext(TodoItemContext);
  return (
    <div className="container text-center">
      {todoItems.map((item) => (
        <div key={item.name} className={`row ${styles["kg-button"]}`}>
          <div className="col">{item.name}</div>
          <div className="col">{item.date}</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteItems(item.name)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
