const button = document.querySelector(".random");

const table = document.querySelector(".tabellone");

const numTombola = [];

window.addEventListener("DOMContentLoaded", () => {
  let maxNum = 77;

  for (let i = 1; i <= maxNum; i++) {
    numTombola.push(i);
  }

  for (i = 1; i < maxNum; i++) {
    const tableCell = document.createElement("div");
    tableCell.id = "cell-" + i;
    tableCell.classList.add("cell");

    const numberCell = document.createElement("h3");
    numberCell.innerText = i;

    tableCell.appendChild(numberCell);
    table.appendChild(tableCell);
  }
});

button.onclick = function () {
  let randomNumber = numTombola[Math.floor(Math.random() * numTombola.length)];
  numTombola.splice(numTombola.indexOf(randomNumber), 1);
  const cell = document.getElementById("cell-" + randomNumber);
  cell.classList.add("selected");
};
