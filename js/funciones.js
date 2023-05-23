import UI from "./classes/UI.js";
import { moneda, criptomoneda, formulario } from "./selectores.js";

const ui = new UI;


export function validarFormulario(evento){
    evento.preventDefault();
    
    if(moneda.value === '' || criptomoneda.value === ''){
        ui.mostrarAlerta(formulario, 'Los campos son obligatorios', 'error');
        return;
    }

    cargarPrecio(moneda.value, criptomoneda.value);

}

export function cargarPrecio(moneda, criptomoneda){

    console.log(moneda, criptomoneda)

    const KEY = '6f5c6ddacf6b9e5b94ee88530835eaf983fd783a9306ec1a68db9aaddfde1077';
    const URL = `https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}&api_key=${KEY}`;

    fetch(URL)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(data => ui.mostrarPrecio(data))
        .catch(error => error)
       

}
