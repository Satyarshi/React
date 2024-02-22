import React, { useState } from "react";
import Display from "./assets/Display";
import Button from "./assets/Button";
import styles from "./assets/App.module.css";
const App = () => {
  let [calVal, setCalVal] = useState("");
  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      let newCalVal = "";
      setCalVal(newCalVal);
    } else if (buttonValue === "=") {
      let newCalVal = eval(calVal);
      setCalVal(newCalVal);
    } else {
      let newCalVal = calVal + buttonValue;
      setCalVal(newCalVal);
    }
  };
  return (
    <div className={styles.container}>
      <Display calVal={calVal} />
      <Button onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
