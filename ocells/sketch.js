function setup() {
 createCanvas(400,120)
}

function draw() {
  background(204)
 
  //Ocell esquerra
  beginShape();
  vertex(50,120); 
  vertex(100,90);
  vertex(110,60);
  vertex(80,20);
  vertex(210,60);
  vertex(160,80);
  vertex(200,90);
  vertex(140,100);
  vertex(130,120);
  endShape();
  fill(0);
  ellipse(155,60,8,8);

  //Ocell dreta
  beginShape();
  vertex(370,120); 
  vertex(360,90);
  vertex(290,60);
  vertex(340,20);
  vertex(280,60);
  vertex(340,80);
  vertex(280,90);
  vertex(420,100);
  vertex(460,120);
  endShape();
  fill(0);
  ellipse(155,60,8,8);
}
