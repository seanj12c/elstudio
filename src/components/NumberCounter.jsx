import React from "react";
import CountUp from "react-countup";

const NumberCounter = ({ value }) => {
  return (
    <div>
      <CountUp className="orbitron" end={value} />
    </div>
  );
};

export default NumberCounter;
