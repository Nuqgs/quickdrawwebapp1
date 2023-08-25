function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
  }




function preload() {


    classifier = ml5.imageClassifier('DoodleNet');
}


function clearCanvas() {
  background("white");
}



function draw() {
  // Set stroke weight to 13
  strokeWeight(13);
  // Set stroke color to black
  stroke(0);
  // If mouse is pressed, draw line between previous and current mouse positions if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }













  


