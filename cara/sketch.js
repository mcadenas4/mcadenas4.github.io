let mic; //creem variable gloalper a un micròfon, ara es un espai a la memòria amb un nom.
function setup() {
 mic=new p5.AudioIn(); // la variable mix és una instància de la "classe entrada audio" (audioIn)
 //Hem creat un nou objecte de laclasse "entrada d àudio" 
 createCanvas(600,400);
 // put setup code here
}

function draw() {
  let vol=mic.getLevel(); //Apliquem el mètode "getLevel" que ens donarà el nivell de volum entre 0 i 1
 //Registrat pel objecte "mic" que és una entrada de àudio. Aquell número el guardarem en una variable local
 //Perquè afecta nomès al "draw" a diferència de la variable global "mic" que està al principi i afecta a tot el codi.
 //El punt que hi ha entre "mic" i "getLevel" és molt important, s'anomena la sintaxi del punt o "dot syntax" Aquest punt aplica mètode a objectes
 //És un sistema que et permet crear qualseol cosa i que fai qualseol cosa
  let vulls= map(vol,0,1,0,100); //"map"és una funció molt potent que el que fa és que onverteix
 // El que fa es converit els numeros de volum que esan entre 0 i 1, sempre en una escala proporciona o mapejada
 // Entre es números 0 i 300, vol dir que si el volum  fos 0,5 es converteix  150 i s'emmagatzema en "h"
 // Si el número és 0,33 de volum es convertira en 100 de "h" o alçada de la boca o arc.
 // Si el número és 0,67 de volum es convertira en 200 de "h" o alçada de la boca o arc.
  let vboca= map(vol,0,1,0,300);
  background(127);
  //Cara
  fill(160,80,0);
  ellipse(300,200,235,300);
  //Ull dret
  fill(255);
  ellipse(250,150,50,40);
  fill(84,42,14);
  ellipse(250,150,15,15);
  //Ull esquerre
  fill(255);
  ellipse(350,150,50,40);
  fill(214,6,6);
  ellipse(350,150,15,15);
  //Boca
  fill(200,15,15);
  arc(300,250,100,10+vboca,0,PI,CHORD); //La variable "h" determina la alçada de la boca
  console.log(mic);
  console.log(vol);
  console.log(h);
  // El "console.log" ens serveixen per veure el valor de les variables en cada moment
}
