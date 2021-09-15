document.getElementById('temas').addEventListener("change",temaSeleccionado);
//Funcion para inicializar variables y permite limpiar articulos y mostrar cajas
function temaSeleccionado(){
    document.getElementById("resultado").innerHTML="¡Resultados!";
    //getElementsByTagName convierte en arreglo poruqe mas guarda mas de un elemento
    capas = document.getElementsByTagName("article");
    //ocultar varios elementos
        for(i=0; i<capas.length; i++){
            capas[i].style.display="none";
        }
        var articulo=document.getElementById("temas").value;
        document.getElementById(articulo).style.display="block";
}
function Cuadros(){
    var color=document.getElementById("color").value;
    var color2=document.getElementById("color2").value;
    var n1=parseInt(document.getElementById("n1").value);
    datos="";
    for(var i=0; i<n1; i++){
        
        datos +='<article id="1" class="cuadrito" style="background-color:'+color+';border-color:'+color2+'" ></article>';
    }
    document.getElementById("resultado").innerHTML=datos;
    

}



function Formulario(){

    let respuestas_seleccionadas=[];
    var preguntas=document.getElementsByTagName("label");
    
    r_p1=document.getElementsByName("n1");
    r_p2=document.getElementsByName("n2");
    r_p3=document.getElementsByName("n3");
    r_p4=document.getElementsByName("n4");
    r_p5=document.getElementsByName("n5");
    e="";
    for( var i=0; i<r_p1.length; i++){
        if(r_p1[i].checked){
            var e=r_p1[i].value;
            //respuestas_seleccionadas[i]+=r_p1[i].value;
        }
    }
    respuestas_seleccionadas[0]=e;
    for( var i=0; i<r_p2.length; i++){
        if(r_p2[i].checked){
            var e=r_p2[i].value;
            //respuestas_seleccionadas[i]+=r_p2[i].value;
        }
    }
    respuestas_seleccionadas[1]=e;
    for( var i=0; i<r_p3.length; i++){
        if(r_p3[i].checked){
            var e=r_p3[i].value;
            //respuestas_seleccionadas[i]+=r_p3[i].value;
        }
    }
    respuestas_seleccionadas[2]=e;
    for( var i=0; i<r_p4.length; i++){
        if(r_p4[i].checked){
            var e=r_p4[i].value;
            //respuestas_seleccionadas[i]+=r_p4[i].value;
        }
    }
    respuestas_seleccionadas[3]=e;
    for( var i=0; i<r_p5.length; i++){
        if(r_p5[i].checked){
            var e=r_p5[i].value;
            //respuestas_seleccionadas[i]+=r_p5[i].value;
        }
    }
    respuestas_seleccionadas[4]=e;
     console.log(respuestas_seleccionadas);

    var imprimir="";
    
    for(i=0; i<preguntas.length; i++){
        imprimir+= preguntas[i].innerHTML + "respuesta:"+ respuestas_seleccionadas[i]+"<br>";

    }
    document.getElementById("resultado").innerHTML=imprimir; 
}