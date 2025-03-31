let mic; 
let bgColor; 

function setup() {
  createCanvas(600, 400);
  bgColor = color(205, 205, 205); // Color de fondo inicial

  mic = new p5.AudioIn();
  userStartAudio().then(() => mic.start()); // Se solicita permiso para el micrófono
}

function draw() {
  background(bgColor);

  let faceX = 350;
  let faceY = 200;
  let leftEyeSize = 30 + 10 * cos(frameCount * 0.1);
  let rightEyeSize = 30 + 10 * sin(frameCount * 0.1);
  let vol = mic.getLevel(); // Obtener volumen del micrófono
  let h = map(vol, 0, 1, 0, 300);

  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  let ales = 10 * random(1);
  let xeye = map(mouseX, 0, 600, -10, +10);
  let yeye = map(mouseY, 0, 400, -10, +10);

  // Cara
  fill(108, 59, 42);
  ellipse(faceX, faceY, 270, 230);

  // Ojos
  fill(255, 255, 255);
  ellipse(faceX - 45, faceY - 40, 45, leftEyeSize + 5);
  ellipse(faceX + 55, faceY - 40, 45, rightEyeSize + 5);

  // Pupilas
  fill(59, 131 + (5 * h), 189);
  ellipse(faceX - 45 + xeye, faceY - 40 + yeye, 22, leftEyeSize / 2);
  ellipse(faceX + 55 + xeye, faceY - 40 + yeye, 22, rightEyeSize / 2);

  // Nariz
  fill(120, 70, 50);
  triangle(faceX - 10, faceY, faceX + 10, faceY, faceX, faceY + 30);

  // Boca
  fill(0 + (h * 5), 0, 0);
  arc(faceX, faceY + 60, 140, 40 + h, 0, PI);

  //Ceja
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(faceX + 5, faceY -55, 155, 20 + h, PI, 0);
  
  //Sombrero
  fill(165, 32, 25)
  noStroke();
  arc(faceX, faceY - 100, 180, 120, PI, 0)
  fill(255, 255, 255)
  arc(faceX, faceY - 100, 180, 50, 0, PI)
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(faceX, faceY - 100, 180, 120, PI, 0);
  
  // Mosca
  fill(255);
  noStroke();
  ellipse(x - 10, y, 15 + ales, 25);
  ellipse(x + 10, y, 15 + ales, 25);
  fill(0);
  ellipse(x, y, 10, 20);
}
