new Vue({
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
});