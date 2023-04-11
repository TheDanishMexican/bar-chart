"use strict";

window.addEventListener("load", start);

function start() {
  displayNewColumnPerSecond();
}

const barChartArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 25, 29, 30, 31, 32, 12, 16, 22, 27, 30, 1, 3, 5,
];

function addAndDelete() {
  barChartArray.push(getNumberOfCustomers());
  barChartArray.shift();
  return barChartArray;
}

function setBarHeight() {
  addAndDelete();
  const allColumns = document.querySelectorAll(".column");
  for (let i = 0; i <= allColumns.length; i++) {
    allColumns[i].style.height = `${barChartArray[i]}vw`;
  }
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function displayNewColumnPerSecond() {
  setInterval(setBarHeight, 1000);
}
