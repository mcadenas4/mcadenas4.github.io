function setup() {
 createCanvas(700,500)
}

function draw() {
  background(220)
 
  //Ocell esquerra
  beginShape();
  vertex(50,50);
  vertex(0,100);
  vertex(50,100);
  vertex(0,100);
  vertex(50,150);
  vertex(100,250);
  vertex(150,250);
  vertex(250,400);
  vertex(350,400);
  vertex(550,350);
  vertex(500,300);
  vertex(550,250);
  vertex(350,100);
  vertex(200,100);
  vertex(150,50);
  vertex(50,50);
  endShape();
}

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
