var elemento =document.createElement("div");
var padre =document.getElementById("contenedor");
var referencia=document.getElementsByTagName("div")[0];
// document.write(referencia);
elemento.setAttribute("class","azul");
padre.insertBefore(elemento,referencia);
// document.body.appendChild(elemento);
