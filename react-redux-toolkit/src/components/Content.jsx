import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const counter = useSelector((state) => state.counter); // here in store.counter counter is the name of the slice
  const counterObj = counter.counterVal;
  return (
    <>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Value of counter is {counterObj}</p>
      </div>
    </>
  );
};

export default Content;
