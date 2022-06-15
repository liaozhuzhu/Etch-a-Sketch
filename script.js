let board = document.querySelector("#board-container");

for(let i = 0; i < 16; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", myFunction);
    board.appendChild(pixel);
}

function myFunction() {
    alert("hello world");
}