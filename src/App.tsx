import { useState } from "react";
import "./App.css";
import BirthChart from "./components/BirthChart";
import MortalityChart from "./components/MortalityChart";
import PopulationChart from "./components/PopulationChart";

function App() {
  const [yearRange, setYearRange] = useState(5);

  return (
    <div className="App">
      <PopulationChart numOfYears={yearRange} />
      <BirthChart numOfYears={yearRange} />
      <MortalityChart numOfYears={yearRange} />
      <div className="range">
        1
        <input
          type="range"
          id="range"
          name="range"
          min="1"
          max="5"
          value={yearRange}
          onChange={(e) => {
            setYearRange(+e.target.value);
          }}
        />
        5
      </div>
    </div>
  );
}

export default App;
