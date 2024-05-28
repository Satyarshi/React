import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const inputNum = useRef();
  const dispatch = useDispatch();
  const handleOnIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleOnDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleOnAdd = () => {
    dispatch({ type: "ADDITION", payload: { number: inputNum.current.value } });
    inputNum.current.value = "";
  };
  const handleOnSub = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: { number: inputNum.current.value },
    });
    inputNum.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({type:"PRIVACY"})
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnIncrease}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleOnDecrease}
        >
          -1
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter Number"
        className="input"
        ref={inputNum}
      />
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-info" onClick={handleOnAdd}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={handleOnSub}>
          SUB
        </button>
      </div>
      <button type="button" class="btn btn-warning input" onClick={handlePrivacy}>
        Private
      </button>
    </>
  );
};

export default Buttons;
