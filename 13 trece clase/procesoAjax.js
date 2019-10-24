
document.getElementById('cargarCatalogo').addEventListener("click",cargrCatalogo);
function cargrCatalogo() {
    var xhr= new XMLHttpRequest(); //creacion de un objeto XMLHttpRequest
    xhr.onreadystatechange=function () {
        if (this.readyState==4 && this.status==200) {  //estado XMLHttpRequest de 0 a 4 & estado de peticion
            cargarXML(this);
        }
    };
    xhr.open("GET","catalo.xml",true);// metodo de peticion & documento XML & true significa Asincrono
    xhr.send();
    function cargarXML(xml) {
        var docXML=xml.responseXML; //respuesta en formato XML 
        var tabla = "<tr><th>Artista</th><th>Titulo</th><tr>";
        var discos=docXML.getElementsByTagName("CD");
        for (var i = 0; i < discos.length; i++) {
            tabla +="<tr><td>";
            tabla +=discos[i].getElementsByTagName("ARTIST")[0].textContent;
            tabla +="</td><td>";
            tabla +=discos[i].getElementsByTagName("TITLE")[0].textContent;
            tabla +="</td><tr>";

        }
        document.getElementById("demo").innerHTML=tabla;
    }
}
