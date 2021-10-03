(function(){
    document.getElementById("resultado").style.display="block";
    document.getElementById("resultado").innerHTML=localStorage.getItem("tarjeta");

    if(localStorage.getItem("colorm2")== "#000000" && localStorage.getItem("colorm3")== "#000000"){
        document.getElementById("resultado").style.borderColor=localStorage.getItem("colorm1");
        document.getElementById("resultado").style.fontFamily=localStorage.getItem("font1");
        document.getElementById("resultado").style.backgroundImage=localStorage.getItem("fondo1");
    }else{
            if(localStorage.getItem("colorm1")== "#000000" && localStorage.getItem("colorm3")== "#000000"){
                document.getElementById("resultado").style.borderColor=localStorage.getItem("colorm2");
                document.getElementById("resultado").style.fontFamily=localStorage.getItem("font3");
                document.getElementById("resultado").style.backgroundImage=localStorage.getItem("fondo2");
            }else{
                document.getElementById("resultado").style.borderColor=localStorage.getItem("colorm3");
                document.getElementById("resultado").style.fontFamily=localStorage.getItem("font3");
                document.getElementById("resultado").style.backgroundImage=localStorage.getItem("fondo3");
            }
    }
    
    
   

   
})();