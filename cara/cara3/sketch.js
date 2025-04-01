let mic; 
let bgColor; 

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(600, 400);
  bgColor = color(200, 220, 255);
}

function draw() {
  let faceX = 300;
  let faceY = 200;
  let leftEyeSize = 25 + 8 * cos(frameCount * 0.1);
  let rightEyeSize = 25 + 8 * sin(frameCount * 0.1);
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 5, 80); 
  let xeye = map(mouseX, 0, 600, -8, 8);
  let yeye = map(mouseY, 0, 400, -5, 5);
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  let ales = 10*random(1);


  background(bgColor);

  // Orejas
  fill(255, 223, 196);
  stroke(0);
  ellipse(faceX - 100, faceY, 30, 40);  // Oreja izquierda
  ellipse(faceX + 100, faceY, 30, 40);  // Oreja derecha

  // Cara
  fill(255, 223, 196);
  stroke(0);
  ellipse(faceX, faceY, 200, 250);

  // Ojos
  fill(255);
  noStroke();
  ellipse(faceX - 45, faceY - 55, 45, leftEyeSize);
  ellipse(faceX + 45, faceY - 55, 45, rightEyeSize);

  // Pupilas
  fill(0);
  ellipse(faceX - 45 + xeye, faceY - 55 + yeye, 20, leftEyeSize / 2);
  ellipse(faceX + 45 + xeye, faceY - 55 + yeye, 20, rightEyeSize / 2);

  // Cejas
  fill(0);
  rect(faceX - 65, faceY - 90 - h, 40, 6, 5);  // Cejas izquierda
  rect(faceX + 25, faceY - 90 - h, 40, 6, 5);  // Cejas derecha

  // Nariz
  fill(255, 180, 150);
  stroke(0);
  triangle(faceX - 10, faceY - 10, faceX + 10, faceY - 10, faceX, faceY + 15);

  // Boca
  stroke(0);
  fill(255, 0, 0);
  arc(faceX, faceY + 50, 100, h, 0, PI);

  // Gafas
  fill(0, 50, 0, 150);
  stroke(0);
  // Lente izquierdo
  ellipse(faceX + 70, faceY - 55, 60, 40);  
  // Lente derecho
  ellipse(faceX - 70, faceY - 55, 60, 40);  
  // Conexión central
  line(faceX - 50, faceY - 55, faceX + 50, faceY - 55);  
  // Patilla izquierda
  line(faceX + 100, faceY - 55, faceX + 120, faceY - 50);  
  // Patilla derecha
  line(faceX - 100, faceY - 55, faceX - 120, faceY - 50);  
  noStroke();
  ellipse(x-10,y, 15+ales,25);
  ellipse(x+10,y, 15+ales,25);
  fill(0);
  ellipse(x,y,10,20);
}

// Función para cambiar el color de fondo
function changeBackground() {
  bgColor = color(random(100, 255), random(100, 255), random(100, 255));
}
