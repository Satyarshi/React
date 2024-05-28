import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    <div>
      Current time in Bharat is {`${day}/${month}/${year}`} - {` `}
      {date.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
