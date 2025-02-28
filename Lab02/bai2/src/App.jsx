import { useState } from "react";
import "./App.css";

function App() {
  const [invest, setInvest] = useState(0);
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);
  const [results, setResults] = useState([]);

  const calculateGrowth = () => {
    let years = 0;
    let currentInvest = parseFloat(invest);
    let rateOfReturn = parseFloat(rate) / 100;
    let target = parseFloat(goal);
    let tempResults = [];

    while (currentInvest < target) {
      let newInvest = currentInvest * (1 + rateOfReturn);
      years++;
      tempResults.push({
        year: years,
        invest: currentInvest.toFixed(2),
        rate: (rateOfReturn * 100).toFixed(2) + "%",
        result: newInvest.toFixed(2),
      });
      currentInvest = newInvest;
    }

    setResults(tempResults);
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>Invest</td>
            <td>
              <input
                type="number"
                placeholder="Input invest"
                value={invest}
                onChange={(e) => setInvest(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Rate (%)</td>
            <td>
              <input
                type="number"
                placeholder="Input Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Goal</td>
            <td>
              <input
                type="number"
                placeholder="Input Goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button onClick={calculateGrowth}>Calculate</button>
      <br />

      {results.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Rate</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>${row.invest}</td>
                <td>{row.rate}</td>
                <td>${row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
