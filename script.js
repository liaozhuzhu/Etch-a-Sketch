let body = document.body;
let board = document.querySelector("#board-container");

let currSize = document.getElementById("size-selector").value;
let sizeSelect = document.getElementById("size-selector");
let sizeValue = document.getElementById("size-value");
sizeValue.innerHTML = currSize;

// Paint or Erase
let paintBtn = document.getElementById("paint");
let eraseBtn = document.getElementById("erase");
let clearBtn = document.getElementById("clear");
let isPaint = true;
paintBtn.style.backgroundColor = "lightgray";

function erase() {
    isPaint = false;
    eraseBtn.style.backgroundColor = "lightgray";
    paintBtn.style.backgroundColor = "";
    body.style.cursor = 'url(images/eraser.png)', 'auto';
}

function paint() {
    isPaint = true;
    paintBtn.style.backgroundColor = "lightgray";
    eraseBtn.style.backgroundColor = "";
}

// Check Mouse Down or Up
let mousePress = false;

document.body.onmousedown = function() { 
    mousePress = true;
}

document.body.onmouseup = function() {
    mousePress = false;
}

// Choose Color
let currColor = "#000000";
let colorSelect = document.getElementById("color-selector");

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
        if (isPaint) {
            e.target.style.backgroundColor = currColor;
        }
        else {
            e.target.style.backgroundColor  = "";
        }
    }
}

// Clear Function
function clearGrid() {
    board.innerHTML = "";
}

// Buttons
paintBtn.addEventListener("click", paint);
eraseBtn.addEventListener("click", erase);
clearBtn.addEventListener("click", reloadGrid);

window.onload = () => {
    fillGrid(currSize);
}