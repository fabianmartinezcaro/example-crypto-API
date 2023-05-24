import UI from "./classes/UI.js";
import { moneda } from "./selectores.js";

const ui = new UI;

const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

export function cargarCriptomonedas(){

    const KEY = '6f5c6ddacf6b9e5b94ee88530835eaf983fd783a9306ec1a68db9aaddfde1077';
    const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=CLP&api_key=${KEY}`;

    fetch(URL)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => console.log(criptomonedas))

}

export function selectCriptomoneda(criptomonedas){
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;
        ui.mostrarCriptomonedas(FullName, Name);
        // NO SE MUESTRAN LAS OPCIONES
    });
}
