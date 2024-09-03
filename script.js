let button = document.querySelector("#btnSquares");
let gridSize = 16;

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function createNewGrid(gridSize) {
  if (document.querySelector("#container")) {
    document.querySelector("#container").remove();
  }

  let container = document.createElement("div");
  container.setAttribute("id", "container");
  container.style.display = "flex";
  container.style.flexDirection = "column";

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";

    for (let j = 0; j < gridSize; j++) {
      let item = document.createElement("div");
      item.style.width = 800 / gridSize + "px";
      item.style.height = 800 / gridSize + "px";
      item.style.border = "1px solid black";
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = generateRandomColor();
      });

      row.appendChild(item);
    }
    container.appendChild(row);
  }

  document.body.appendChild(container);
}

button.addEventListener("click", () => {
  gridSize = prompt("What size will the new grid be? (default: 16)", 16);
  if (gridSize <= 100) {
    createNewGrid(gridSize);
  } else {
    alert("You can't make it more than 100!");
  }
});

createNewGrid(gridSize);
