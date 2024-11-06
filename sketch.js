let palavra

function setup() {
  createCanvas(400, 400);
  palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["Full box", "Fortnite", "Mds sr.farofa", "Duzentooss", "Spas", "Arena", "Scar"];
  palavra = random(palavras);
}


function inicializaCores(){
  background("blue");
  fill("white");
  textSize(60);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
   let quantidade = map(mouseX, minimo,maximo,1,palavra.length);
  let parcial = palavra.substring(0,quantidade);
  return parcial;
}


function draw() {
  inicializaCores();
  let texto= palavraParcial(0,width);
  text(texto,200,200);
  
  
  
  
  
    /*(mouseX < 50){
  let palavra = "F";
  text(palavra, 200, 200);
  } else if (mouseX <100) {  
    let palavra = "Fu";
    text(palavra, 200, 200);
  } else if (mouseX <150) {  
    let palavra = "Ful";
    text(palavra, 200, 200)
  } else if (mouseX <200) {  
    let palavra = "Full";
    text(palavra, 200, 200);
  } else if (mouseX <250) {  
    let palavra = "Full b";
    text(palavra, 200, 200);
  } else if (mouseX <300){  
    let palavra = "Full bo";
    text(palavra, 200, 200);
  } else if (mouseX <350) {  
    let palavra = "Full box";
    text(palavra, 200, 200);
   }*/
  }
