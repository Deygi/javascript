var texto=document.createElement("li");
var contenido=document.createTextNode("Nuevo elemento en la lista");
texto.appendChild(contenido);
texto.setAttribute("align","left");
var padre=document.getElementsByTagName("li")[0].parentNode;
// var padre=document.getElementById("lista");
var primerElemento=document.getElementsByTagName("li")[0];
// padre.appendChild(texto);    
padre.insertBefore(texto,primerElemento);
