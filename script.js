const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

function drawCake() {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = "#FF0000";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCake();
    y -= 2; // Adjust the falling speed here

    requestAnimationFrame(draw);
}

draw();
