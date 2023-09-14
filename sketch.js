function setup() {
  createCanvas(400, 400);
 background(0); }

  function draw()  {
  stroke ("white")
 fill("white")
  
// console.log(mouseIsPressed)
  
  if(mouseIsPressed) {
 circle(mouseX,mouseY, 1,1);
 }
}
