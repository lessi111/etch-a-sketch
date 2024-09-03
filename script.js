let button = document.querySelector("#btnSquares");
let gridSize = 16;

button.addEventListener("click", () => {
  gridSize = prompt("What size will the new grid be? (default: 16)", 16);
  if (gridSize <= 100) {
    createNewGrid(gridSize);
  } else {
    alert("You can't make it more than 100!")
  }
});

function createNewGrid(gridSize) {
  if (document.querySelector(".container")) {
    document.querySelector(".container").remove();
  }

  let container = document.createElement("div");
  container.classList.add("container");

  let row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < gridSize; i++) {
    let item = document.createElement("div");
    /*   item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "red";
  }) */
    item.classList.add("item");
    item.innerText = "";
    row.appendChild(item);
  }

  for (let i = 0; i < gridSize; i++) {
    // You can't append the same node multiple times
    // hence, we clone it and then append it to container
    rowClone = row.cloneNode(true);
    container.appendChild(rowClone);
  }
  document.body.appendChild(container);
}

createNewGrid(gridSize);
