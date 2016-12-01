/**
 * Created by Curso on 29/11/2016.
 */
$.noConflict();
    jQuery(document).ready(function($){
        //tracear();

        function tracear(){
            var valor = $('#nombre').val();
            //Nombre
            console.log(valor);
            $('#nombre').val("Erasmo");
            //Nombre
            valor = $ ('#nombre').attr("value");/*atributo value de html*/
            //Erasmo
            console.log(valor);
        }

        /* La funcion no puede ir fuera del ready porque lo lee y lo compila antes de que el documento
        * esté listo, por lo que #nombre no existe*/
        $("a.boton").click(function () {
            var dni =$("#buscador").val();
            var letra = calcDNI(dni);
           // console.log(letra) ;
            $("span.resultado").text(letra);
            return false;
        });


    });

function calcDNI(numero){
    var resto = parseInt(numero % 23);
    var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    return letras[resto];
}