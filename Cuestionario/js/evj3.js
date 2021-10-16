
new Vue({
    el: '#seccion',
    data:{
        u:false,
        sig:'',
        m:false,
        mensaje:'',
        m1:false,
        m2:false,
        m3:false,
        m4:false,
        motiva:'',
        expe:'',
        time:0,
        lenguaje:'',
        lenguajes:[],
        Datos:[],
        boton:false,
        u:true,
        },
    methods:{
        continuarno:function(){
            this.m1=false;
            this.m4=false;
            this.m3=false;
            this.m2=false;
            this.m=!this.m;
            this.u=false;
            this.mensaje='Gracias por apoyarnos';
            this.boton=false;
        },
        continuarsi:function(){
            this.m=false;
            this.m1=!this.m1;
            this.m4=true;
            this.boton=!this.boton;

        },
        timework:function(){
            
            if(this.time>0 && this.time<2){
                this.m2=!this.m2;
                this.m3=false;
            }
            else if(this.time==2){
                this.m2=false;
                this.m3=!this.m3;
            }
        },
        agregar:function(){
            this.lenguajes.push(this.lenguaje);
            this.lenguaje='';
        },
        
    }

});
function AgregarD(){
    this.u=true;
    var p1=document.getElementById("l").value;
    var p2=document.getElementById("a").value;
    var p3=document.getElementById("m").value;
    var p4=document.getElementById("e").value;
    datos="Le gusta programar:"+p1+
    "<br> Numero de años programando:"+p2+
    "<br> Su motivacion es:"+p3+
    "<br> Su experiencia programando:"+p4;
    document.getElementById("resultado").innerHTML=datos
 
 }