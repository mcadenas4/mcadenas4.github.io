let mic;

function setup() {
 createCanvas(700,500)
 mic=new p5.AudioIn();
 mic.start();
}

function draw() {
  let ran=noise(0.01 * frameCount);
  let ranX=map(ran, 0,1,0,50)
  vol=mic.getLevel();
  vpic=map(vol,0,1,0,100);
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
