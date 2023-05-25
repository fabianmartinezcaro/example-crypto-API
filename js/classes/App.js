import { cargarCriptomonedas, enviarCotizacion } from "../funciones.js";
import { formulario } from "../selectores.js";

export default class App{

    constructor() {
        this.initApp();
    }

    initApp(){

        document.addEventListener('DOMContentLoaded', () => {

            cargarCriptomonedas();

            formulario.addEventListener('submit', enviarCotizacion);

        })

    }

}