import React from "react";
import styles from "./Input.module.css";
const Input = ({ onButtonClick }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Item"
        className={styles.input}
        onKeyDown={onButtonClick}
      />
    </>
  );
};

export default Input;
