document.getElementById('temas').addEventListener("change",temaSeleccionado);
//Funcion para inicializar variables y permite limpiar articulos y mostrar cajas
function temaSeleccionado(){
    
    //getElementsByTagName convierte en arreglo poruqe mas guarda mas de un elemento
    capas = document.getElementsByTagName("article");
    //ocultar varios elementos
        for(i=0; i<capas.length; i++){
            capas[i].style.display="none";
        }
        var articulo=document.getElementById("temas").value;
        document.getElementById(articulo).style.display="block";
}

document.getElementById('mostrar').addEventListener("click",function(){mostrar();});




function tarjeta1(){
    var t1=document.getElementById("t1").value;
    var s1=document.getElementById("s1").value;
    var n1=document.getElementById("n1").value;
    var img=document.getElementsByName("opcion");
    var d1=document.getElementById("d1").value;
    var m1=document.getElementById("m1").value;
    var c_t1= document.getElementById("c_t1").value;
    var nf_t1= document.getElementById("nf_t1").value;
    var c_s1= document.getElementById("c_s1").value;
    var nf_s1= document.getElementById("nf_s1").value;
    var c_n1= document.getElementById("c_n1").value;
    var nf_n1= document.getElementById("nf_n1").value;
    
  
    var img_e=null;
   
    for( var i=0; i<img.length; i++){
        if(img[i].checked){
            e=img[i].value;
        }
    }
    switch(e){
        case 'a' : img_e=document.getElementById("foto").src="img/I1.jpeg";
                    break;
        case 'b' : img_e=document.getElementById("foto").src="img/I2.jpeg";
                    break;
        case 'c' : img_e=document.getElementById("foto").src="img/I3.jpeg";
                    break;
}
    
    document.getElementById("foto").innerHTML=img_e;
    document.getElementById("resultado").style.backgroundImage="url(https://st.depositphotos.com/1273672/3105/v/600/depositphotos_31050887-stock-illustration-background-origami-of-mexico.jpg)";
    document.getElementById("t1_1").innerHTML=t1;
    document.getElementById("s1_1").innerHTML=s1;
    document.getElementById("n1_1").innerHTML=n1;
    document.getElementById("d1_1").innerHTML=d1;
    document.getElementById("resultado").style.borderColor=m1;
    document.getElementById("t1_1").style.color=c_t1;
    document.getElementById("t1_1").style.fontSize=nf_t1+"px";
    document.getElementById("s1_1").style.color=c_s1;
    document.getElementById("s1_1").style.fontSize=nf_s1+"px";
    document.getElementById("n1_1").style.color=c_n1;
    document.getElementById("n1_1").style.fontSize=nf_n1+"px";
    document.getElementById("resultado").style.fontFamily="serif";
}
function tarjeta2(){
    var t2=document.getElementById("t2").value;
    var s2=document.getElementById("s2").value;
    var n2=document.getElementById("n2").value;
    var img=document.getElementsByName("opcion");
    var d2=document.getElementById("d2").value;
    var m2=document.getElementById("m2").value;
    var c_t2= document.getElementById("c_t2").value;
    var nf_t2= document.getElementById("nf_t2").value;
    var c_s2= document.getElementById("c_s2").value;
    var nf_s2= document.getElementById("nf_s2").value;
    var c_n2= document.getElementById("c_n2").value;
    var nf_n2= document.getElementById("nf_n2").value;
    console.log(m1)
 
    var img_e=null;
   console.log(img);
    for( var i=0; i<img.length; i++){
        if(img[i].checked){
            e=img[i].value;
        }
    }
    switch(e){
        case 'a' : img_e=document.getElementById("foto").src="img/I2_1.jpeg";
                    break;
        case 'b' : img_e=document.getElementById("foto").src="img/I2_2.jpeg";
                    break;
        case 'c' : img_e=document.getElementById("foto").src="img/I2_3.jpeg";
                    break;
}
    
    document.getElementById("foto").innerHTML=img_e;
    document.getElementById("resultado").style.backgroundImage="url(https://i.pinimg.com/564x/45/70/3f/45703ff7bd47719ffaab3b5b2be0c2a2.jpg)";
    document.getElementById("t1_1").innerHTML=t2;
    document.getElementById("s1_1").innerHTML=s2;
    document.getElementById("n1_1").innerHTML=n2;
    document.getElementById("d1_1").innerHTML=d2;
    document.getElementById("resultado").style.borderColor=m2;
    document.getElementById("t1_1").style.color=c_t2;
    document.getElementById("t1_1").style.fontSize=nf_t2+"px";
    document.getElementById("s1_1").style.color=c_s2;
    document.getElementById("s1_1").style.fontSize=nf_s2+"px";
    document.getElementById("n1_1").style.color=c_n2;
    document.getElementById("n1_1").style.fontSize=nf_n2+"px";
    document.getElementById("resultado").style.fontFamily="'Courier New', Courier, monospace";
}
function tarjeta3(){
    var t3=document.getElementById("t3").value;
    var s3=document.getElementById("s3").value;
    var n3=document.getElementById("n3").value;
    var img=document.getElementsByName("opcion");
    var d3=document.getElementById("d3").value;
    var m3=document.getElementById("m3").value;
    var c_t3= document.getElementById("c_t3").value;
    var nf_t3= document.getElementById("nf_t3").value;
    var c_s3= document.getElementById("c_s3").value;
    var nf_s3= document.getElementById("nf_s3").value;
    var c_n3= document.getElementById("c_n3").value;
    var nf_n3= document.getElementById("nf_n3").value;
    console.log(m1)
 
    var img_e=null;
   console.log(img);
    for( var i=0; i<img.length; i++){
        if(img[i].checked){
            e=img[i].value;
        }
    }
    switch(e){
        case 'a' : img_e=document.getElementById("foto").src="img/I3_1.jpeg";
                    break;
        case 'b' : img_e=document.getElementById("foto").src="img/I3_2.jpeg";
                    break;
        case 'c' : img_e=document.getElementById("foto").src="img/I3_3.jpeg";
                    break;
}
    
    document.getElementById("foto").innerHTML=img_e;
    document.getElementById("resultado").style.backgroundImage="url(https://i.pinimg.com/originals/45/b3/31/45b33150222ae5cc0d531c78fbfde2c7.jpg)";
    document.getElementById("t1_1").innerHTML=t3;
    document.getElementById("s1_1").innerHTML=s3;
    document.getElementById("n1_1").innerHTML=n3;
    document.getElementById("d1_1").innerHTML=d3;
    document.getElementById("resultado").style.borderColor=m3;
    document.getElementById("t1_1").style.color=c_t3;
    document.getElementById("t1_1").style.fontSize=nf_t3+"px";
    document.getElementById("s1_1").style.color=c_s3;
    document.getElementById("s1_1").style.fontSize=nf_s3+"px";
    document.getElementById("n1_1").style.color=c_n3;
    document.getElementById("n1_1").style.fontSize=nf_n3+"px";
    document.getElementById("resultado").style.fontFamily='Brush Script MT';
}



let mostrar=function(){
    let Tarjeta = document.getElementById("resultado").innerHTML;
        localStorage.setItem('tarjeta',Tarjeta);
        let colorm1 = document.getElementById("m1").value;
        localStorage.setItem('colorm1', colorm1);
        let font1 = document.getElementById("resultado").style.fontFamily;
        localStorage.setItem('font1', font1);
        let fondo1=document.getElementById("resultado").style.backgroundImage;
        localStorage.setItem('fondo1', fondo1);


        let colorm2 = document.getElementById("m2").value;
        localStorage.setItem('colorm2', colorm2);
        let font2 = document.getElementById("resultado").style.fontFamily;
        localStorage.setItem('font2', font2);
        let fondo2=document.getElementById("resultado").style.backgroundImage;
        localStorage.setItem('fondo2', fondo2);


        let colorm3 = document.getElementById("m3").value;
        localStorage.setItem('colorm3', colorm3);
        let font3 = document.getElementById("resultado").style.fontFamily;
        localStorage.setItem('font3', font3);
        let fondo3=document.getElementById("resultado").style.backgroundImage;
        localStorage.setItem('fondo3', fondo3);


    window.open("Tarjetas.html");
}


document.getElementById('temas').addEventListener("change",temaSeleccionado);

