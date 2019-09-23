var elemento=document.createElement("li");
var contenido=document.createTextNode("nuevo elemento");
elemento.appendChild(contenido);
elemento.setAttribute("align","left");
var primer=document.getElementById("primero");
// MODIFICA el contenido
// permite usar dentro del texto etiquetas
// primer.innerHTML="cambio el texto <ol><li><b>tititiititi</b></li></ol>";
// permite usar solo strings
// primer.textContent="cambio
// utiliza para hacer un REMPLAZO
 var padre=document.getElementById("lista");
 var numeroOrden=document.getElementById("primero");
 // padre.replaceChild(elemento,numeroOrden);
 // ELIMINACION
 // elimina solo el elmento que le indicas en el parametro
 padre.removeChild(numeroOrden);
