function setup() {
  createCanvas(5000, 5000);
 background(0); }

  function draw()  {
  stroke ("white")
 fill("white")
  
// console.log(mouseIsPressed)
  
  if(mouseIsPressed) {
 circle(mouseX,mouseY, 50,50);
 }
}
