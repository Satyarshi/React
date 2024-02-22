import React from "react";
import styles from "./Display.module.css";
const Display = ({ calVal }) => {
  return (
    <>
      <input type="text" value={calVal} className={styles.textbox} readOnly />
    </>
  );
};

export default Display;
