import React from "react";
import "./App.css";
import AutoCompleteText from "./AutoCompleteText";
import countries from "./countries";

function App() {
  return (
    <div className="App">
      <h1>Country Auto-Complete</h1>
      <div className="App-Component">
        <AutoCompleteText items={countries} />
      </div>
    </div>
  );
}

export default App;
