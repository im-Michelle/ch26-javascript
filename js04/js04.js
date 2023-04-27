

//Otros codigos antes e maquina con linux

/*
    Do While
Sintaxis:

    do {
        sentencias;
    } while (comprobacion);
*/

/* let count = 0;
do {
    console.log("N. contador do-while: " + count);
} while (confirm("¿Deseas continuar?")); */


let valor = -2;
while (valor < 5) {
    console.log("While "+valor);
    valor ++;
}

valor = 5;
do {
    console.log("Do While " + valor);
    valor ++;
} while (valor < 5);



/*
FIFO: first input, first output
LIFO: last input, first output
*/

const alimentos = [];


// Usar FIFO
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miercoles");
console.log(alimentos);
// Sacar las manzanas
console.log("Sacando las manzanas antiguas: " + alimentos.shift());
console.log(alimentos);
console.log("Sacando las manzanas antiguas: " + alimentos.shift());
console.log(alimentos);


//Usar LIFO
const productos = [];
// Temporada navideña
productos.push("Desarmadores");
productos.push("Luces de colores");
console.log(productos);
//Sacar ultima manzana
console.log("Sacando las manzanas antiguas: " + productos.pop());