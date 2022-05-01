
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = 800;
const height = canvas.height = 800;

const r = 30;
let score = 0;
let x = -1;
let y = -1;

function draw() {
     clear();

     x = r + Math.random() * (width - r * 2 + 1);
     y = r + Math.random() * (height - r * 2 + 1);

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "green"
    ctx.stroke();
    ctx.closePath();
}

function clear() {
    x = -1;
    y = -1;
    ctx.clearRect(0, 0, width, height);
}

function liesWithin(mouseX, mouseY) {
    const d = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
    console.log(d)

    if (d < r) {
        score += 1;
        document.getElementById("score").innerHTML = score;
        clear();
    }
}

canvas.addEventListener('click', (event) => {

    const rect = canvas.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    console.log({ x, y });
    console.log({ mouseX, mouseY });

    liesWithin(mouseX, mouseY);
});

setInterval(draw, 500);


