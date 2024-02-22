import React from "react";
import styles from "./Items.module.css";
const Item = ({ fooditem, bought, onButtonClick }) => {
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {fooditem}
        <button
          type="button"
          className={`${styles.button} btn btn-info`}
          onClick={onButtonClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
