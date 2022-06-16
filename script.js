let board = document.querySelector("#board-container");
let currColor = "#000000";
let mousePress = false;

// Check Mouse Down or Up
document.body.onmousedown = function() { 
    mousePress = true;
}

document.body.onmouseup = function() {
    mousePress = false;
}

// Choose Color 
function colorPick(color) {
    console.log("#34ebde");
    color = "#34ebde";
}
// Fill Grid Based on Size 
function fillGrid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const pixel = document.createElement("div")
      pixel.classList.add("pixel")
      pixel.addEventListener("mouseover", colorPixel)
      pixel.addEventListener("mousedown", colorPixel)
      board.appendChild(pixel)
    }
}

// Color Each Pixel
function colorPixel(e) {
    if (e.type == "mouseover" && mousePress) {
        e.target.style.backgroundColor = currColor;
    } 
}

fillGrid(16);