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

//  Here useRef is used to access DOM element directly

// const App = () => {
//   const [data, setData] = useState("");
//   const refElement = useRef();
//   function handleOnClick() {
//     setData("");
//     refElement.current.focus();
//     refElement.current.style.color = "white";
//   }
//   function handleUpdate() {
//     refElement.current.style.color = "red";
//   }
//   return (
//     <div>
//       <input
//         ref={refElement}
//         type="text"
//         value={data}
//         onChange={(e) => {
//           setData(e.target.value);
//         }}
//       />
//       <button onClick={handleOnClick}>Reset</button>
//       <button onClick={handleUpdate}>Update Color</button>
//     </div>
//   );
// };

export default App;
