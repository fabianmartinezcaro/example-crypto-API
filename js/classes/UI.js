export default class UI{

    mostrarInfo(precioCripto){
        console.log(precioCripto)
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