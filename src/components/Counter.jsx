import React from "react";

const Counter = ({ onDecrement, onIncrement, onDelete, counter }) => {
  const handleClasses = () => {
    let classes = "badge m-2 badge-";
    counter.value === 0 ? (classes += "secondary") : (classes += "primary");
    return classes;
  };

  const formatCount = () => {
    return counter.value === 0 ? "zero" : counter.value;
  };


  return (
    <div>
      <span className={handleClasses()}>{formatCount()}</span>
      <span className="btn btn-warning m-2" onClick={() =>onDecrement(counter)}>
        Decrement
      </span>
      <span className="btn btn-success m-2" onClick={() => onIncrement(counter)}>
        Increment
      </span>
      <span className="btn btn-danger m-2" onClick={() => onDelete(counter.id)}>
        Delete
      </span>
    </div>
  );
};

export default Counter;
