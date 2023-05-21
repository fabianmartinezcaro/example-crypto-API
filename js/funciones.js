import { moneda, criptomoneda } from "./selectores.js";


export function validarFormulario(evento){
    evento.preventDefault();
    
    if(moneda.value === '' || criptomoneda.value === ''){
        console.log('error')
    }
}
