import { criptomoneda, formulario, resultado } from "../selectores.js";

export default class UI{

    mostrarCotizacion(cotizacion){

        this.limpiarHTML(resultado);

        const {TOSYMBOL, PRICE, HIGHDAY, LOWDAY, LASTUPDATE, TOTALVOLUME24HOUR} = cotizacion;
        
        const divCotizacion = document.createElement('DIV');
        divCotizacion.classList.add('resultado');

        const price = document.createElement('H2');
        price.classList.add('resultado', 'h2')
        price.textContent = `Precio: ${PRICE}`;

        const highDay = document.createElement('P');
        highDay.classList.add('resultado', 'p')
        highDay.textContent = `Valor Día/max: ${HIGHDAY}`;

        const lowDay = document.createElement('P');
        lowDay.textContent = `Valor Día/min: ${LOWDAY}`;

        divCotizacion.appendChild(price);
        divCotizacion.appendChild(highDay);
        divCotizacion.appendChild(lowDay);
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