let body = document.body;
let board = document.getElementById("board-container");

// Paint or Erase
let paintBtn = document.getElementById("paint");
let eraseBtn = document.getElementById("erase");
let clearBtn = document.getElementById("clear");
let isPaint = true;
paintBtn.style.backgroundColor = "#00a8e8";
paintBtn.style.color = "#FFFFFF";
document.body.style.cursor = "url('images/paint.png'), auto";

function erase() {
    isPaint = false;
    eraseBtn.style.backgroundColor = "#00a8e8";
    eraseBtn.style.color = "#FFFFFF";
    paintBtn.style.backgroundColor = "";
    paintBtn.style.color = "";
    body.style.cursor = "url('images/eraser.png'), auto";
}

function paint() {
    isPaint = true;
    paintBtn.style.backgroundColor = "#00a8e8";
    paintBtn.style.color = "#FFFFFF";
    eraseBtn.style.backgroundColor = "";
    eraseBtn.style.color = "";
    document.body.style.cursor = "url('images/paint.png'), auto";
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
let currSize = document.getElementById("size-selector").value;
let sizeSelect = document.getElementById("size-selector");
let sizeValue = document.getElementById("size-value");
sizeValue.innerHTML = currSize;

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
let getPixel;
function fillGrid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.setAttribute("id", "pixel-id");
      pixel.addEventListener("mouseover", colorPixel);
      pixel.addEventListener("mousedown", colorPixel);
      board.appendChild(pixel);
      getPixel = document.getElementsByClassName("pixel");
    }
    if (outlineOn == true) {
        for(let i = 0; i < getPixel.length; i++) {
            getPixel[i].style.border = "1px solid #000000";
        }
    } 
    else {
        for(let i = 0; i < getPixel.length; i++) {
            getPixel[i].style.border = "none";
        }
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

// Toggle Grid
let gridBtn = document.getElementById("grid-toggle");
let outlineOn = false;

function toggleGrid() {
    if (outlineOn == false) {
        for(let i = 0; i < getPixel.length; i++) {
            getPixel[i].style.border = "1px solid #000000";
        }
        outlineOn = true;
    }
    else {
        for(let i = 0; i < getPixel.length; i++) {
            getPixel[i].style.border = "none";
        }
        outlineOn = false;
    }
}

// Clear Function
function clearGrid() {
    board.innerHTML = "";
}

// Save Image
let saveBtn = document.getElementById("save");
function saveImage() {
    window.scrollTo(0,0);
    html2canvas(board, { letterRendering: 1,useCORS: true } ).then(function(canvas) {
        const a = document.createElement('a')
        a.href=canvas.toDataURL("image/png")
        a.download="canvas.png"
        a.click()
    });
}

// Buttons
paintBtn.addEventListener("click", paint);
eraseBtn.addEventListener("click", erase);
clearBtn.addEventListener("click", reloadGrid);
gridBtn.addEventListener("click", toggleGrid);
saveBtn.addEventListener("click", saveImage);

window.onload = () => {
    fillGrid(currSize);
}