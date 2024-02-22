import React from "react";
import styles from "./Input.module.css";
const Input = ({ onButtonClick }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Item"
        className={styles.input}
        onChange={onButtonClick}
      />
    </>
  );
};

export default Input;
