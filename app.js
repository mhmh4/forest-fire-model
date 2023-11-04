const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CELL_LENGTH = 25;

const m = canvas.width / CELL_LENGTH;
const n = canvas.height / CELL_LENGTH;

let grid = [...Array(m)].map(() => Array(n).fill(0));

console.log(grid);

function drawCells() {
  let x = 0;
  let y = 0;

  for (let j = 0; j < grid[0].length; j++) {
    x = 0;
    for (let i = 0; i < grid.length; i++) {
      ctx.strokeRect(x, y, CELL_LENGTH, CELL_LENGTH);
      if (grid[i][j] == 0) {
        ctx.fillStyle = "brown";
      }
      if (grid[i][j] == 1) {
        ctx.fillStyle = "green";
      }
      if (grid[i][j] == 2) {
        ctx.fillStyle = "red";
      }
      ctx.fillRect(x, y, CELL_LENGTH, CELL_LENGTH);
      x += CELL_LENGTH;
    }
    y += CELL_LENGTH;
  }
}

drawCells(grid);
