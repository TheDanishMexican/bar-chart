"use strict";

window.addEventListener("load", start);

function start() {
  const barChartArray = createArray();
  displayNewColumnPerSecond(barChartArray);
}

function createArray() {
  let barChartArray = [];

  for (let i = 0; i < 40; i++) {
    barChartArray[i] = getNumberOfCustomers();
  }

  return barChartArray;
}

function addAndDelete(barChartArray) {
  barChartArray.push(getNumberOfCustomers());
  barChartArray.shift();
  return barChartArray;
}

function setBarHeight(barChartArray) {
  addAndDelete(barChartArray);
  const allColumns = document.querySelectorAll(".column");
  for (let i = 0; i <= allColumns.length; i++) {
    allColumns[i].style.height = `${barChartArray[i]}vw`;
  }
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function displayNewColumnPerSecond(barChartArray) {
  setInterval(() => setBarHeight(barChartArray), 1000);
}
