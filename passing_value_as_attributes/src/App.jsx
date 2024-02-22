import Items from "./assets/Items";
import Empty from "./assets/Empty";
import styles from "./App.module.css";
const App = () => {
  let list_items = ["Dal", "Green Vegetables", "Fruits", "Roti", "Milk"];
  // let list_items = [];
  return (
    <>
      <h1 className={styles.heading}>Healthy Food</h1>
      <Empty fooditems={list_items} />
      <Items fooditems={list_items} />
    </>
  );
};

export default App;
