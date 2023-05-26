import { criptomoneda, formulario, resultado } from "../selectores.js";

export default class UI{

    mostrarCotizacion(cotizacion){


        const {TOSYMBOL, PRICE, HIGHDAY, LOWDAY, LASTUPDATE, TOTALVOLUME24HOUR} = cotizacion;
        
        const divCotizacion = document.createElement('DIV');
        divCotizacion.classList.add('resultado');

        const price = document.createElement('H3');
        price.textContent = `Precio: ${PRICE}`;

        const highDay = document.createElement('P');
        highDay.textContent = HIGHDAY;

        divCotizacion.appendChild(price);
        divCotizacion.appendChild(highDay);
        resultado.appendChild(divCotizacion);

    }

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

    limpiarHTML(contenedor){

        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
        }

    }

}