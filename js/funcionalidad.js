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
var newtema= function(){
    document.getElementById("todo").style.backgroundColor="#F3D5C0";
   
    document.getElementById("titulo").innerHTML="Restaurante DOÑA PELOS";
    document.getElementById("titulo").style.color="#ffffff";
    document.getElementById("pie").style.backgroundColor="#506D84";
}
//Trabajo con nodos
document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});
/*document.getElementById('adultos').addEventListener("change",function(){NumeroM();});*/

var adulto_1=new Array("-","4","3","2","1","...");
  var adulto_2=new Array("-","3","2","1","...");
  var adulto_3=new Array("-","2","1","...");
  var adulto_4=new Array("Ya no pueden sentarse menores");

  var TodosMenores = [
    [],
    adulto_1,
    adulto_2,
    adulto_3,
    adulto_4,
  ];

let mesas=function(){
    let nm=document.getElementById('reservacion').value;
    let contenido='';
    for(i=0; i<nm; i++){
        contenido += '<h3>mesas: '+(i+1)+'<h3>'+
        '<h4> Numero de comensales <h4>'+'<form name="f1">'+
        'Adultoss: <select name="adultos" id="adultos'+i+'" onchange="NumeroM();">'+'<option value="0">Seleccione una opcion</option>'+
        '<option value="1">1</option>'+'<option value="2">2</option>'+'<option value="3">3</option>'+'<option value="4">4</option>'+'</select><br>'+
        'Menores:<select name=NM>'+ 
        '<option value="-">-'+ 
        '</select></form> ';
        /*+'Menores: <select name="menores" id="menores'+i+'">'+'<option value="0">Seleccione una opcion</option>'+
        '<option value="1">1</option>'+'<option value="2">2</option>'+'<option value="3">3</option>'+'<option value="4">4</option>'+'</select><br><hr>';
        
        
        /*if(getElementById('adultos') == 1){
            contenido += 'Menores: <select name="menores" id="menores'+i+'">'+'<option value="0">Seleccione una opcion</option>'+
            '<option value="1">1</option>'+'<option value="2">2</option>'+'<option value="3">3</option>'+'</select><br><hr>';
            document.getElementById("NM").innerHTML=contenido;
        }*/
    }
    
    document.getElementById("mesas").innerHTML=contenido;
    //window.alert(document.getElementById('adultos'+(i)).value);
    
}
/*let NumeroM= function(){
    let NM= document.getElementById('adultos'+i).value;
    let contenido='';
    if(NM == 1){
        contenido += 'Menores: <select name="menores" id="menores'+i+'">'+'<option value="0">Seleccione una opcion</option>'+
        '<option value="1">1</option>'+'<option value="2">2</option>'+'<option value="3">3</option>'+'</select><br><hr>';
        document.getElementById("NM").innerHTML=contenido;
    }
   
}*/

function NumeroM(){
    //tomo el valor del select del numero de adultos elegido elegido 
    var adultos
    adultos=document.f1.adultos[document.f1.adultos.selectedIndex].value

    //miro a ver si el numeor de adultos está definido 
    if (adultos != 0) { 
       //si estaba definido, entonces coloco las opciones de N. menores  correspondiente. 
       //selecciono el array de menores adecuado 
       mis_menores=TodosMenores[adultos]
       //calculo el numero de menores
       num_menores = mis_menores.length 
       //marco el número de menores en el select 
       document.f1.NM.length = num_menores
       for(i=0;i<num_menores;i++){ 
          document.f1.NM.options[i].value=mis_menores[i] 
          document.f1.NM.options[i].text=mis_menores[i] 
       }	
    }else{ 
       //si no había adultos seleccionado, 
       document.f1.NM.length = 1 
       //coloco un guión en la única opción que he dejado 
       document.f1.NM.options[0].value = "-" 
       document.f1.NM.options[0].text = "-" 
    } 
    //marco como seleccionada la opción primera
    document.f1.NM.options[0].selected = true 
}

//uso de local storage
let mostrar=function(){
        let mesas = document.getElementById("mesas").innerHTML;
        localStorage.setItem('mesa',mesas);
        let cAdultos= document.getElementsByName("adultos");
        let vAdultos=[];
        for(let i=0; i<cAdultos.length; i++){
            vAdultos[i]=cAdultos[i].value;
            localStorage.setItem('vAdultos',vAdultos);
        }
        let cMenores= document.getElementsByName("menores");
        let vMenores=[];
        for(let i=0; i<cMenores.length; i++){
            vMenores[i]=cMenores[i].value;
            localStorage.setItem('vMenores',vMenores);
        }
        window.open("DatosReservacion.html");
    }
