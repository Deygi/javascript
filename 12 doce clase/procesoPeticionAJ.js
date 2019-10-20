    //obtencion de un elemento
document.getElementById("cambiarContenido").addEventListener("click",cambiaContenido);

 function cambiaContenido() {
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange=function() {
         if (this.readyState==4 && this.status==200) {
             document.getElementById("texto").innerHTML=this.responseText;
         }
     };
     /*open :especifica la solicitud
     metodos GET/POST
     archivo: txt,pdf,xml,json ,ect
     true/ false*/
     xhr.open("GET","prueba.txt",true);
     /*
     send envia la solcitud al servidor
     si hacemos uso de POST debemos enviar parametros
      */
     xhr.send();
 }














//javascript Asincrono y XML
 function requestAjax() {
     try {
         var request  =new XMLHttpRequest();
     } catch (e1) {
         try { //IE 6 o 7
             var request=ActiveXObject("Msxm12.XMLHTTP");

         } catch (e2) {
             try {//IE 5
                 var request=ActiveXObject("Microsoft.XMLHTTP");

             } catch (e3) {
                var  request=false;
             }
         }
     }
     return request;
 }
