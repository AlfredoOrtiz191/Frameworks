Vue.component("alerta", {
    props: ['tipo', 'posicion','frase'],
    template: "#mensajeAlerta",
    methods: {
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
    data() {
        return {
            alerta: this.frase
        };
    }
});
const app = new Vue({
    el: "#cont",
    data: {
        MinaV: false,
        MuseoI: false,
        MuseoM: false,
        AG: false,
        MercadoH: false,
        CasaR:false,
        PlazaP: false,
        TeatroJ: false,
        Pipila: false,
    }
});
