import { useContext, useState } from "react";
import { TodoItemContext } from "../store/Itemstore";

let Item1 = () => {
  const { addItems } = useContext(TodoItemContext);
  let [task, setTask] = useState("");
  let [time, setTime] = useState("");
  const handleOnClick = () => {
    if (task != "") {
      addItems(task, time);
      setTask("");
      setTime("");
    }
  };
  return (
    <div className="container text-center kg-button">
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={task}
            placeholder="Enter your task"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleOnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item1;
