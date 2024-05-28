import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const value = useSelector((state) => state.counter); // it will rerender it if the value of state.counter changes. It is like subscription
  return (
    <>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Value of counter is {value}</p>
      </div>
    </>
  );
};

export default Content;
