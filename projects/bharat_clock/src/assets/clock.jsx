import React from "react";

const Clock = () => {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    <div className="lead">
      Current time in Bharat is : {`${day}/${month}/${year}`} -{" "}
      {date.toLocaleTimeString()}
    </div>
  );
};
// to write a js expression inside js string i.e. `  ` we use ${js variable,expression,constant}
export default Clock;
