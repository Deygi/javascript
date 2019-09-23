var texto="deyoko";
//indexOf da la posicion de la letra en su parametro
var numeroOrden=texto.indexOf("o");
//lastIndexOf da la posicion de la letra introducida en el parametrp pero empieza su busqueda desde el final
var ultimonumeroOrden=texto.lastIndexOf("o");
// length propiedad para obtener el tamaño de la cadena de texto
var tamaño=texto.length;
// metodo para replazar cadenas de texto por otra cadena de texto
var remplazoTexto=texto.replace("deyoko","Dey :)");
// metodo que convierte las minusculas en mayusculas
var mayuskla=texto.toUpperCase();
var minuscula=mayuskla.toUpperCase();
document.write("este texto : '"+mayuskla+" ' sera remplazado por este nuevo texto '"+remplazoTexto+"'");
document.write(minuscula);
