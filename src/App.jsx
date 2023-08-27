import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Cell from "./Cell";
import Grid from "./Grid";

function App() {
  // const [count, setCount] = useState(0);

  function create2DArray(width, height) {
    const array2D = [];

    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(<Cell i={i} j={j} />); // You can initialize the values as needed
      }
      array2D.push(row);
    }

    return array2D;
  }

  let width = 10;
  let height = 10;
  const grid = create2DArray(width, height);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* {grid} */}

      {/* <Grid height={10} width={10} /> */}
      <div className="w-1/2 mx-auto mt-10">
        {grid.map((row, index) => {
          return (
            <div>
              {row.map((value, rowIndex) => {
                return <span>{value}</span>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
