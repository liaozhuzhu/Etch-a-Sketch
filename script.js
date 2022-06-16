let board = document.querySelector("#board-container");

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

function colorPixel(e) {
    e.target.style.backgroundColor = "blue";
}

fillGrid(16);