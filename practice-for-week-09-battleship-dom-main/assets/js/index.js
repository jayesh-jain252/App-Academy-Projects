import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
let main_div = document.createElement("div");
let win = document.getElementById("win");
let resetButton = document.getElementById("reset-btn");

main_div.setAttribute("id", "main");
document.body.appendChild(main_div);

for (let i = 0; i < board.grid.length; i++) {
  for (let j = 0; j < board.grid[i].length; j++) {
    let cell_div = document.createElement("div");
    cell_div.setAttribute("class", "cell");
    cell_div.setAttribute("data-loc", [i, j]);
    main_div.appendChild(cell_div);
  }
}

main_div.addEventListener("click", (event) => {
  let [row, col] = event.target.dataset.loc.split(",");
  let numVal = board.makeHit(row, col);
  if (numVal === null) {
    event.target.classList.add("miss");
  } else {
    event.target.classList.add("hit");
    event.target.innerText = numVal;
  }
  if (board.isGameOver()) {
    win.innerText = "YOU WIN!";
  }
});

resetButton.addEventListener("click", (event) => {
  console.log("clicked");
  window.location.reload();
});
