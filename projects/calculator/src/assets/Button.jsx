import React from "react";
import Item from "./Item";
import styles from "./Button.module.css";
const Button = ({ onButtonClick }) => {
  let calcButton = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.container}>
      {calcButton.map((item) => (
        <Item
          key={item}
          calcButton={item}
          onButtonClick={() => onButtonClick(item)}
        />
      ))}
    </div>
  );
};

export default Button;
