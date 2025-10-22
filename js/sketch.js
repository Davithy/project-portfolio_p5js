let cols; let rows;
let spacing = 75;
let size = [];
let scl = 0.5
let canvas;
let t = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    canvas.position(0,0);
    canvas.style("z-index", 5);
    canvas.style("pointer-events", "none");
    cols = width / spacing;
    rows = height / spacing;
    for (let i = 0; i < cols; i++) {
        size[i] = [];
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    cols = width / spacing;
    rows = height / spacing;
    for (let i = 0; i < cols; i++) {
        size[i] = [];
    }
}

function draw() {
    clear();

    fill(255, 255, 255, t);
    noStroke();
    rect(width/2, height/2, width, height);
    erase();
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = spacing/2 + i*spacing
            let y = spacing/2 + j*spacing
            s = (dist(mouseX, mouseY,x,y)) * scl;
            circle(x, y, s);
        }
    }
    noErase();
    t--;
}

function mouseMoved() {
    t = 50;
}