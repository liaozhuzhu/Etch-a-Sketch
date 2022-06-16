let board = document.querySelector("#board-container");
let currSize = 16;
let currColor = "#000000";
let colorSelect = document.getElementById("color-selector");
let mousePress = false;
let clearBtn = document.getElementById("clear");

// Clear Everything
clearBtn.addEventListener("click", function() {
    let allPixel = document.getElementsByClassName("pixel");
    for(let i = 0; i < allPixel.length; i++) {
        allPixel[i].style.backgroundColor = "#FFFFFF";
    }
});

// Check Mouse Down or Up
document.body.onmousedown = function() { 
    mousePress = true;
}

document.body.onmouseup = function() {
    mousePress = false;
}

// Choose Color
function setColor (color) {
    currColor = color;
}

colorSelect.oninput = (e) => setColor(e.target.value);

// Set Size of Grid


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
        console.log(currColor);
        e.target.style.backgroundColor = currColor;
    } 
}

fillGrid(currSize);