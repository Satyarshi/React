import Items from "./assets/Items";
import Empty from "./assets/Empty";
import styles from "./App.module.css";
import Container from "./Container";
import Input from "./assets/Input";

/*Here we can see that we tried to change the value of textToShow internally but it is not showed in the output because we called the container only once if we call it multiple times then the value change we cannot write it like js that's why our next topic is state */
const App = () => {
  let list_items = ["Dal", "Green Vegetables", "Fruits", "Roti", "Milk"];
  // let list_items = [];
  let textToShow = "Items entered by user";
  function handleOnChange(event) {
    console.log(event.target.value);
    textToShow = event.target.value;
  }
  const handleOnClick = (item) => {
    console.log(`${item} is bought`);
  };
  return (
    <>
      <Container>
        <h1 className={styles.heading}>Healthy Food</h1>
        <Input onButtonClick={handleOnChange} />
        <p>{textToShow}</p>
        <Empty fooditems={list_items} />
        <Items fooditems={list_items} onButtonClick={handleOnClick} />
      </Container>
      <Container>
        <div>Above is the list of food that are healthy</div>
      </Container>
    </>
  );
};

export default App;
