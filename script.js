let board = document.querySelector("#board-container");
let currSize = document.getElementById("size-selector").value;
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
function setColor (color) {
    currColor = colorSelect.value;
}

//colorSelect.oninput = (e) => setColor(e.target.value);

// Set Size of Grid
function setSize() {

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

// Reload Grid
function reloadGrid() {
    
}

// Clear Function
function clear() {
    let allPixel = document.getElementsByClassName("pixel");
    for(let i = 0; i < allPixel.length; i++) {
        allPixel[i].style.backgroundColor = "#FFFFFF";
    }
}

// Clear Button
clearBtn.addEventListener("click", clear);

window.onload = () => {
    fillGrid(currSize);
}