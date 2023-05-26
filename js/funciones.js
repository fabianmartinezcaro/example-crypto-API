import UI from "./classes/UI.js";
import { formulario } from "./selectores.js";

const ui = new UI;

let objCotizacion = {

    moneda: '',
    criptomoneda: ''

}

const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

export function cargarCriptomonedas(){

    const KEY = '6f5c6ddacf6b9e5b94ee88530835eaf983fd783a9306ec1a68db9aaddfde1077';
    const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${KEY}`;

    fetch(URL)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomoneda(criptomonedas))

}

export function selectCriptomoneda(criptomonedas){
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;
        ui.mostrarCriptomonedas(FullName, Name);
    });
}

export function enviarCotizacion(evento){
    evento.preventDefault();

    const {moneda, criptomoneda} = objCotizacion;

    if(moneda === '' || criptomoneda === ''){
        ui.mostrarAlerta(formulario, 'Los campos son obligatorios', 'error');
        return;
    }

    consultarAPI();

}

export function leerValor(evento){
    objCotizacion[evento.target.name] = evento.target.value;
}  


function consultarAPI(){

    const {moneda, criptomoneda} = objCotizacion;
    const KEY = '6f5c6ddacf6b9e5b94ee88530835eaf983fd783a9306ec1a68db9aaddfde1077';
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${KEY}`;

    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(resultado => ui.mostrarCotizacion(resultado.DISPLAY[criptomoneda][moneda]))
        .catch(err => err)

}
