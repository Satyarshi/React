import Items from "./assets/Items";
import Empty from "./assets/Empty";
import styles from "./App.module.css";
import Container from "./Container";
import Input from "./assets/Input";
import { useState } from "react";

const App = () => {
  let [list_items, setlist_items] = useState([
    // here default value of usestate is array therefore list_items is also a array
  ]);
  // let list_items = [];

  let [textToShow, setTextToShow] = useState("Items entered by user"); //here default value of usestate is string therefore texttoshow is also a string . if there is no default value then value of texttoshow will be undefined

  // usestate is a react hook that returns an array with two elements the first element is the current state value and the second elemen is a funtion that allows us to update the state

  console.log(textToShow); // it is displaying 2 times because when there is a change the entire component app is rendered again therefore it is printed twice

  function handleOnChange(event) {
    setTextToShow(event.target.value);
    if (event.key === "Enter") {
      let newitem = [...list_items, event.target.value];
      setlist_items(newitem);
    }
  }

  /* instead of  let newitem = [...list_items, event.target.value];  
                 setlist_items(newitem);
  we should use functional update to avoid stale values during asynchronous updates 
  
  eg-> setlist_items((currValue) => {[...currValue,event.target.value]})  */

  return (
    <>
      <Container>
        <h1 className={styles.heading}>Healthy Food</h1>
        <Input onButtonClick={handleOnChange} />
        <p>{textToShow}</p>
        <Empty fooditems={list_items} />
        <Items fooditems={list_items} />
      </Container>
      <Container>
        <div>Above is the list of food that are healthy</div>
      </Container>
    </>
  );
};

export default App;
