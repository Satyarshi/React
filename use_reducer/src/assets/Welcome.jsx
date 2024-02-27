import React, { useContext } from "react";
import { TodoItemContext } from "../store/Itemstore";

const Welcome = () => {
  const { todoItems } = useContext(TodoItemContext);
  const message = todoItems.length === 0 && "Enter New Task";
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Welcome;
