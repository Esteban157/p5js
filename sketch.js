function setup() {

createCanvas(500, 500);

}

function draw() {

background("white");

noStroke(); //função para retirar a borda

if (mouseIsPressed) {

fill("red");

rect(0, 0, 100, 100);

} else {

fill("green");

rect(100, 100, 100, 100);

}

}
