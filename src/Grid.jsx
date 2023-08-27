import React, { useEffect, useState } from "react";

import Cell from "./Cell";

function Grid({ width, height }) {
  function create2DArray(width, height) {
    const array2D = [];

    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(<Cell key={`${i}-${j}`} i={i} j={j} />);
      }
      array2D.push(row);
    }

    return array2D;
  }

  const [values, setValues] = useState([]);

  useEffect(() => {
    const newArray = create2DArray(width, height);
    setValues(newArray);
  }, [width, height]);

  return (
    <div className="grid">
      {values.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => {
            return cell;
          })}
        </div>
      ))}
    </div>
  );
}

export default Grid;
