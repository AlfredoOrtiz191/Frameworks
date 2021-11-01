
Vue.component("bebidas",{
    template:'<table class="table table-hover table-bordered"><tr class="table-warning"><th>NOMBRE</th><th>INGREDIENTES</th><th>TAMAÑO</th><th>PRECIO</th><th>¿VIGENTE?</th></tr> <tr v-for="bebida in bebidas"><td>{{bebida.nombre}}</td><td>{{bebida.ingredientes}}</td><td>{{bebida.tamano}}</td><td>{{bebida.precio}}</td><td class="table-success" v-if="bebida.vigente">Si</td><td class="table-danger" v-if="!bebida.vigente">No</td></tr></table>',
    props:["bebidas"]
});

Vue.filter('reversal', (value) => value.split('').reverse().join(''));
const app= new Vue({
    el:"#todo",
    data:{
        bebidasLolita:[
            {nombre:"Cafe Inlarnes", ingredientes:"Cafe negro, Wisky y Crema batida", tamano:"M", precio:59, vigente:false},
            {nombre:"Express Machiato", ingredientes:"Leche espuma", tamano:"M", precio:47, vigente:true},
            {nombre:"Cafe de Olla", ingredientes:"Canela y Piloncillo", tamano:"Ch", precio:25, vigente:false},
            {nombre:"Capuchino", ingredientes:"1/3 de Cafe express, Cajeta, Rompope, Licor de chocolate", tamano:"G", precio:45, vigente:true},
            {nombre:"Cafe Vienes", ingredientes:"Cafe negro y Crema Batida", tamano:"M", precio:65, vigente:false},
            {nombre:"Carajillo", ingredientes:"Cafe express y Licor", tamano:"Ch", precio:50, vigente:true},
            {nombre:"Cafe Dalgona", ingredientes:"Cafe en polvo, Leche y Agua caliente", tamano:"Ch", precio:30, vigente:false},
            {nombre:"Cold Brew", ingredientes:"Cafe molida, leche y agua", tamano:"G", precio:60, vigente:false},
            {nombre:"Cafe Ruso", ingredientes:"Cafe negro, Vodka, Azucar y Hielos", tamano:"G", precio:55, vigente:true},
            {nombre:"Affogato Cafe", ingredientes:"Cafe heladode vainilla", tamano:"M", precio:80, vigente:true},
            {nombre:"Mochachino", ingredientes:"Cafe y Chocolate", tamano:"G", precio:28, vigente:true},
            {nombre:"Frappe Mango", ingredientes:"Mango, Chamoy y Vodka de tamarindo", tamano:"ch", precio:20, vigente:true},
            {nombre:"Limonada", ingredientes:"Limon", tamano:"M", precio:15, vigente:false},
        ],
        toSearch:"",
        cost:0,
        nombre:false,
        precio:false,
        relax:true,
    },
    methods:{
        BuscarN:function(){
            this.relax=false,
            this.precio=false
           this.nombre=true;

        },
        BuscarP:function(){
            this.relax=false,
            this.nombre=false;
            this.precio=true;
        },
    },
    computed:{
        buscarBebida: function ()
        {
            return this.bebidasLolita.filter((bebida) => bebida.nombre.includes(this.toSearch))
        }, 
        bebidaEncontrada: function ()
        {
            return this.buscarBebida.length;
        },
        costoBebida: function ()
        {
            return this.bebidasLolita.filter((bebida) => bebida.precio <= this.cost)
        },
    },
});

/*new Vue({
    el: '#todo',
    data:{
        nombre:'',
        cantidad:0,
        precio:0,
        productos:[
            {nombre:"Vitaminas D3",cantidad:10,precio:400},
            {nombre:"Proteina WHEY GOLD",cantidad:5,precio:990}
        ],
        totalp:0,
        subtotal:0,
        
        
    },
    methods:{
        agregar: function(){
            this.productos.push({nombre:this.nombre, cantidad:this.cantidad, precio:this.precio});
                this.nombre='';
                this.cantidad='';
                this.precio='';
                
        },
        
    },
    computed:{
        sumarProducto(){
            this.totalp=0;
            for(producto of this.productos){
                this.totalp= this.totalp+ producto.cantidad;
            }
            return this.totalp;
        },
        sumarSubtotal(){
            this.subtotal=0;
            for(producto of this.productos){
                this.subtotal+= producto.cantidad * producto.precio;
            }
            return this.subtotal;

        }
    },
});*/