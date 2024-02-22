import Items from "./assets/Items";
import Empty from "./assets/Empty";
import styles from "./App.module.css";
import Container from "./Container";
const App = () => {
  let list_items = ["Dal", "Green Vegetables", "Fruits", "Roti", "Milk"];
  // let list_items = [];
  function handleOnChange(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <Container>
        <h1 className={styles.heading}>Healthy Food</h1>
        <input
          type="text"
          placeholder="Search Item"
          className={styles.input}
          onChange={handleOnChange}
        />
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
