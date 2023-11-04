const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

const CELL_LENGTH = 20;

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
        ctx.fillStyle = "black";
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

function hasBurningNeighbor(grid, i, j) {
  for (let x of [-1, 0, 1]) {
    for (let y of [-1, 0, 1]) {
      if (x == 0 && y == 0) {
        continue;
      }
      const neighborI = i + x;
      const neighborj = j + y;
      if (
        neighborI < 0 ||
        neighborI == grid.length ||
        neighborj < 0 ||
        neighborj == grid[0].length
      ) {
        continue;
      }
      if (grid[neighborI][neighborj] == 2) {
        return true;
      }
    }
  }
  return false;
}

const p = 0.06;
const f = 0.001;

drawCells(grid);

setInterval(() => {
  let nextGrid = structuredClone(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const isEmpty = grid[i][j] == 0;
      const isTree = grid[i][j] == 1;
      const isBurning = grid[i][j] == 2;

      if (isEmpty && Math.random() < p) {
        nextGrid[i][j] = 1;
      }

      if (isTree && (Math.random() < f || hasBurningNeighbor(grid, i, j))) {
        nextGrid[i][j] = 2;
      }

      if (isBurning) {
        nextGrid[i][j] = 0;
      }
    }
  }

  grid = nextGrid;
  drawCells(nextGrid);
}, 100);
