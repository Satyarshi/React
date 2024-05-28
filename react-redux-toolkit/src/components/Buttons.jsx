import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Buttons = () => {
  const inputNum = useRef();
  const dispatch = useDispatch();
  const handleOnIncrease = () => {
    dispatch(counterAction.increment());
  };
  const handleOnDecrease = () => {
    dispatch(counterAction.decrement());
  };
  const handleOnAdd = () => {
    dispatch(counterAction.addition({ num: inputNum.current.value })); // can create payload as object
    inputNum.current.value = "";
  };
  const handleOnSub = () => {
    dispatch(counterAction.subtraction(inputNum.current.value)); // can pass value directly
    inputNum.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch(privacyAction.toggle());
  };
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
      <button
        type="button"
        class="btn btn-warning input"
        onClick={handlePrivacy}
      >
        Private
      </button>
    </>
  );
};

export default Buttons;
