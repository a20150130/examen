alert("Bienvenido a al cuestionario sobre los mares");
var nom = prompt("Ingresa tu nombre");
var pr1 = prompt("¿Cuánta agua hay en la Tierra?\nA:Alrededor de un 41% de la superficie terrestre es agua.\nB:Alrededor de un 51% de la superficie terrestre es agua.\nC:Alrededor de un 71% de la superficie terrestre es agua.")
if(pr1=="C"){ pr1 = 1;}else{pr1=0;}

var pr2 = prompt("¿Qué océano es el más grande?\nA:El Pacífico.\nB: El Atlántico.\nC:El Índico")
if(pr2=="A"){ pr2 = 1;}else{pr2=0;}

var pr3 = prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA:11 Km\nB:23 Km\nC:31 Km")
if(pr3=="A"){ pr3 = 1;}else{pr3=0;}

var total = pr1 + pr2 + pr3
document.write("<h2>Resultados</h2>");
document.write("Lo has hecho bien" + nom + "tus resultados son:<br>");
document.write("Tus aciertos son: " + total +  "<br>");
if(total<1){document.write("Lo puedes hacer mejor");} else{document.write("Felicidades sabes mucho sobre los mares")}