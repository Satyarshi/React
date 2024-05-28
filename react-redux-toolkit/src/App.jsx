import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import Buttons from "./components/Buttons";
import Content from "./components/Content";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const value = useSelector((store) => store.private);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center container">
        <h1 className="display-5 fw-bold text-body-emphasis">
          <Heading />
        </h1>
        {value ? <Privacy /> : <Content />}
        <Buttons />
      </div>
    </>
  );
}

export default App;
