let board = document.querySelector("#board-container");
let currSize = document.getElementById("size-selector").value;
let sizeSelect = document.getElementById("size-selector");
let sizeValue = document.getElementById("size-value");
sizeValue.innerHTML = currSize;
let currColor = "#000000";
let colorSelect = document.getElementById("color-selector");
let mousePress = false;
let clearBtn = document.getElementById("clear");

// Check Mouse Down or Up
document.body.onmousedown = function() { 
    mousePress = true;
}

document.body.onmouseup = function() {
    mousePress = false;
}

// Choose Color
colorSelect.oninput = function() {
    currColor = this.value;
}

// Choose Size
sizeSelect.oninput = function() {
    sizeValue.innerHTML = this.value;
    currSize = sizeSelect.value;
    reloadGrid();
}

// Reload Grid
function reloadGrid() {
    clearGrid();
    fillGrid(currSize);
}

// Fill Grid Based on Size 
function fillGrid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.setAttribute("draggable", false);
      pixel.addEventListener("mouseover", colorPixel);
      pixel.addEventListener("mousedown", colorPixel);
      board.appendChild(pixel);
    }
}

// Color Each Pixel
function colorPixel(e) {
    if (e.type != 'mouseover' || mousePress) {
        e.target.style.backgroundColor = currColor;
    }
}

// Clear Function
function clearGrid() {
    board.innerHTML = "";
}

// Clear Button
clearBtn.addEventListener("click", reloadGrid);

window.onload = () => {
    fillGrid(currSize);
}