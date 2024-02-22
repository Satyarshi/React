import React from "react";
import styles from "./Item.module.css";
const Item = ({ calcButton, onButtonClick }) => {
  return (
    <div>
      <div className={styles.box} onClick={onButtonClick}>
        {calcButton}
      </div>
    </div>
  );
};

export default Item;
