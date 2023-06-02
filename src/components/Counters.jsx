import React from "react";
import Counter from "./Counter";

const Counters = ({
  counters,
  onReset,
  onDecrement,
  onIncrement,
  onDelete,
}) => {
  return (
    <>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Counters;
