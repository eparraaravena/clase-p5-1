var movies = [
  "Eduardo Castillo",
  "Rodrigo Duenas",
  "Mauricio Vico",
  "Rodrigo Diaz",
  "Mauricio Tapia",
  "Juan Carlos Lepe",
  "Roberto Osses",
  "Juan Calderon",
  "Sergio Donoso",
]

var oscars = [13,9,38,21,19,49,2,69,8]

movies.push("Erik Ciravegna");
oscars.push(1);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('cajanegra');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  colorMode(HSB)
  background(200,200,30);
  for(var x = 0; x <= movies.length; x++){

noStroke ();
    //defino el blanco con 100/255 de transparencia
    fill(255,100);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize(18);
rect (((width/(movies.length+1))*(x+1)), (height/1.7), 40, -(oscars[x]*2));


    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(oscars[x], ((width/(movies.length+1))*(x+1)), (205));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(14);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(movies[x], ((width/(movies.length+1))*(x+1)), ((height/1.5)+12),((windowWidth/(movies.length+1))-50),100);
  }
}
