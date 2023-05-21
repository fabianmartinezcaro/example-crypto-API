import UI from "./classes/UI.js";
import { moneda, criptomoneda } from "./selectores.js";

const ui = new UI;


export function validarFormulario(evento){
    evento.preventDefault();
    
    if(moneda.value === '' || criptomoneda.value === ''){
        ui.mostrarAlerta();
    }

}
