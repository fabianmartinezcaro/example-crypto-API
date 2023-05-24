import { criptomoneda } from "../selectores.js";

export default class UI{


    mostrarCriptomonedas(FullName, Name){
        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;
        criptomoneda.appendChild(option);
    }

    mostrarAlerta(contenedor, mensaje, tipo){
        const alerta = document.createElement('P');
        alerta.textContent = mensaje;
        let condicionCumplida = false;

        if(tipo === 'error'){
            alerta.classList.add('error');
            contenedor.appendChild(alerta);
            condicionCumplida = true;
        }

        if(condicionCumplida){
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

    }   

}