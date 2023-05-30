import { criptomoneda, formulario, resultado } from "../selectores.js";

export default class UI{

    mostrarCotizacion(cotizacion){
        console.log(cotizacion)
        this.limpiarHTML(resultado);

        const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE, TOTALVOLUME24H} = cotizacion;

        resultado.innerHTML += `
            <div class="price-container">
                <h2 class="titulo-cotizacion">Valor del día:</h2>
                <div class="price">
                    <span class="span-price">Precio: </span>
                    <h1 class="price-h1">${PRICE}</h1>
                </div>

                <div class="secondary-info">
                    <span class="span-sec-info">Ultima actualización: </span>
                    <h1 class="info-h1"> ${LASTUPDATE}</h1>
                </div>

                <div class="secondary-info">
                    <span class="span-sec-info">Valor max/día: </span>
                    <h1 class="info-h1"> ${HIGHDAY}</h1>
                </div>

                <div class="secondary-info">
                    <span class="span-sec-info">Valor min/día: </span>
                    <h1 class="info-h1"> ${LOWDAY}</h1>
                </div>

                <div class="secondary-info">
                    <span class="span-sec-info">Volumen total del día: </span>
                    <h1 class="info-h1"> ${TOTALVOLUME24H}</h1>
                </div>
            </div>
        `;

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