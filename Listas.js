let List_Numeros = [];
List_Numeros.push(4);
List_Numeros.push(3);
List_Numeros.push(23);
List_Numeros.push(20);
List_Numeros.push(7);
List_Numeros.push(5);
List_Numeros.push(2);
ImprimirValoresDeUnaLista(List_Numeros);
CalcularPromedio(List_Numeros);
InvertirOrdenLista(List_Numeros);
MaximoYMinimo(List_Numeros);


function ImprimirValoresDeUnaLista(lista) {
    let c = 0;
    while (c < lista.length) {
        console.log(lista[c]);
        c++;
    }
}
function CalcularPromedio(lista) {
    let c = 0;
    let sumatoria = 0;
    while (c < lista.length) {
        sumatoria += lista[c];
        c++;
        if (c == lista.length) {
            let promedio = parseInt(sumatoria / lista.length);
            console.log(`El promedio de los numeros de la lista es: ${promedio}`)
        }
    }
}
function InvertirOrdenLista(lista) {
    let c = 0;
    let new_list = [];
    while (c < lista.length) {
        new_list.push(lista[lista.length - c - 1]);
        c++;
        if (c == lista.length) {
            console.log(`La lista a la inversa seria de: ${new_list}`)
        }
    }
}
function MaximoYMinimo(lista) {
    let c = 0;
    let max = 0
    let min = lista[0];
    while (c < lista.length) {
        c++;
        if (lista[c] < min) {
            min = lista[c];
        }
        if (lista[c] > max) {
            max = lista[c];
        }
    }
    console.log(`El numero mayor es: ${max} \nEl numero menor seria: ${min}`)
}





let Cualidades_de_la_bibi = [];
Cualidades_de_la_bibi.push(`peque`);
Cualidades_de_la_bibi.push(`bonita`);
Cualidades_de_la_bibi.push(`loquita`);
Cualidades_de_la_bibi.push(`rulosita`);
Cualidades_de_la_bibi.push(`divertida`);
Cualidades_de_la_bibi.push(`artista`);

DigameCualidades(Cualidades_de_la_bibi);

function DigameCualidades(lista) {
    c = 0;
    console.log("CUALIDADES DE LA BIBI uwu:\nLa bibi es...");
    while (c < lista.length) {
        console.log(`- ${lista[c]}`)
        c++;
        if (c == lista.length) {
            console.log(`- y a la adoro <3`);
            console.log(`PERDONAMEE POR DORMIR A LAS 2:15am ÑAAAAAAAAAAA`);
        }
    }
}


