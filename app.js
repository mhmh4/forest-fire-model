const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CELL_LENGTH = 25;

const m = canvas.width / CELL_LENGTH;
const n = canvas.height / CELL_LENGTH;

let grid = [...Array(m)].map(() => Array(n));

console.log(grid);

function drawCells() {
  for (let j = 0; j < canvas.height; j += CELL_LENGTH) {
    for (let i = 0; i < canvas.width; i += CELL_LENGTH) {
      ctx.rect(i, j, CELL_LENGTH, CELL_LENGTH);
      ctx.stroke();
    }
  }
}

drawCells(grid);
