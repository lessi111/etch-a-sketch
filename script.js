let container = document.querySelector("#container");

let row = document.createElement("div");
row.classList.add("row");

for (let i = 0; i < 8; i++) {
  let item = document.createElement("div");
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "red";
  })
  item.classList.add("item");
  item.innerText = "";
  row.appendChild(item);
}

for (let i = 0; i < 8; i++) {
  // You can't append the same node multiple times
  // hence, we clone it and then append it to container
  rowClone = row.cloneNode(true);
  container.appendChild(rowClone);
}
