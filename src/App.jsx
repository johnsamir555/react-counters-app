import React, { useState } from "react";
import Counters from "./components/Counters";

const App = () => {
  const [counters, setcounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const handleTotal = () => {
    let total = 0;
    counters.map((c) => total++);
    return total;
  };

  const handleReset = () => {
    const myCounters = [...counters];
    myCounters.map((c) => {
      c.value = 0;
      return c;
    });
    setcounters(myCounters);
  };

  const handleDecrement = (counter) => {
    const myCounters = [...counters];
    const index = myCounters.indexOf(counter);
    myCounters[index].value--;
    setcounters(myCounters);
  };

  const handleIncrement = (counter) => {
    const myCounters = [...counters];
    const index = myCounters.indexOf(counter);
    myCounters[index].value++;
    setcounters(myCounters);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setcounters(newCounters);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <span className="badge badge-info badge-sm m-2">{handleTotal()}</span>
        </div>
      </nav>
      <Counters
        onReset={handleReset}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onDelete={handleDelete}
        counters={counters}
      />
    </>
  );
};

export default App;
