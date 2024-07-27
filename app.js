let NumSecreto = 0;
let intentos = 0;
let numSorteados = [];
let numMax = 10;

function intentodeusuario() {
    alert(`numero secret fue de ${NumSecreto}`);
    nm = prompt(`dime tu nombre`);
    rpt = prompt(`Es verdadero que la hipotenusa de un triangulo rectangulo de catetos 24 y 7 sea 25?`).toUpperCase().trim();
    if (rpt == "SI") {
        alert(`Jack Bulnes esta orgulloso de ti pequeño ${nm}`);
    }
    else {
        alert(`UFFF estás para la autónoma ${nm}`);
    }
    return;

}
function ChangeText(element, text) {
    let parrafo = document.querySelector(element);
    parrafo.innerHTML = text;
    return;
}
function numeroSecreto() {
    let num = Math.floor(Math.random() * numMax) + 1;
    if (numSorteados.length == numMax) {
        ChangeText(`p`, `ya está pa`);
    }
    else {
        if (numSorteados.includes(num)) {
            return numeroSecreto();
        } else {
            numSorteados.push(num);
            return parseInt(num);
        }
    }
}

function intentarMeter() {
    let numUser = parseInt(document.getElementById("valorusuario").value);
    intentos++;
    console.log(`Tu número: ${numUser}`)

    if (numUser === NumSecreto) {
        ChangeText(`p`, `urra, acertaste tardaste ${intentos} intentos`);
        document.querySelector(`#reiniciar`).removeAttribute(`disabled`);
    }
    else {
        limpiarCaja();
        if (NumSecreto > numUser) {
            ChangeText(`p`, `el numero secreto es mayor`);
        }
        else if (NumSecreto < numUser) {
            ChangeText(`p`, `el numero secreto es menor`);
        }
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorusuario").value = "";

}
function condicionaesIniciales() {
    ChangeText(`p`, `indica un numero del 1 al ${numMax} pa`);
    ChangeText(`h1`, `Juego secreto`);
    intentos = 0;
    NumSecreto = numeroSecreto();
    console.log(`El número secreto es: ${NumSecreto}`);
}
function reiniciarJuego() {
    limpiarCaja();
    condicionaesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);

    return;
}
condicionaesIniciales();







