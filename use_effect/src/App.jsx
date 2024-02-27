import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleOnChange = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    alert("clicked");
  }, [count]);
  return (
    <div>
      <button onClick={handleOnChange}>Clicked {count}</button>
    </div>
  );
};

export default App;
