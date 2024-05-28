import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

//  Here useRef is used to create a mutable variable which will not re-render the components

const App = () => {
  const [data, setData] = useState("");
  // const [count, setCount] = useState();

  const count = useRef(0);
  const refElement = useRef();

  useEffect(() => {
    refElement.current.focus();
    count.current = count.current + 1;
  });

  return (
    <div>
      <input
        ref={refElement}
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <p>No. of time it re-renders is {count.current}</p>
    </div>
  );
};

export default App;
