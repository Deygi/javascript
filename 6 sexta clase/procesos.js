// crear un elemento
var elemento=document.createElement("h3");
// crear un nodo
var contenido=document.createTextNode("se sta creando un codigo");
// añadir el nodo al elemento
elemento.appendChild(contenido);
// agregar atributos al elemento
elemento.setAttribute("align","left");
// agregar el elemento al documento
document.getElementById("subtitle").appendChild(elemento);
// document.body.appendChild(elemento);
