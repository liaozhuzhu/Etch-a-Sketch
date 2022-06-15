let board = document.querySelector("#board-container");

for(let i = 0; i < 16; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    board.appendChild(pixel);
}