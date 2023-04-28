

// Matrices (arreglos de 2 dimensiones)

const personasEnCohorte = [
/*ch26*/     ["Arath", "Jose", "Karen", "Sofi"],
/*ch27*/     ["Manuel", "Maria", "Francisco", "Pablo"],
/*ch28*/     ["Vennanzio", "Doris", "Brendan", "Lucas"]
];

console.log("Personas ch27: " + personasEnCohorte[1].join(", "));

// Accediendo a Francisco
console.log("Paco en Ch27: " + personasEnCohorte[1][2]);

// Modificaciòn de un elemento
personasEnCohorte[1][3] = "Juán";
console.log("Personas ch27: " + personasEnCohorte[1].join(", "));

// Iterar un arreglo de dos dimensiones 
personasEnCohorte.forEach(fila => {
    fila.forEach(element => {
        console.log(element);
    });
});

// Iterar todos los elementos en un arreglo de 2 dimensiones. 
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
     console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`);
     for (let columna = 0; columna < personasEnCohorte[fila].length; columna++) {
        console.log(`Nombre: ${personasEnCohorte[fila][columna]}`)        
     } 
}

// Usando forEcha con función flecha

personasEnCohorte.forEach(fila => fila
    .forEach(columna => console.log(columna)));


// For of
// Ejecuta sentencias por cada elemento de un objeto iterable (arrays, string y objetos)

const myName = "Michelle";
for (const char of myName) {
    console.log(char);
}

for (const fila of personasEnCohorte) {
    for (const columna of fila) {
        console.log(columna);
    }
}

// Consideraciones para el ciclo for





// Ejercicio
// Iterar y mostrar a las personas en personasEnCohorte y detener cuando se encuentre a Maria

console.log("Ejercicio");

personas:
for (let i = 0; i < personasEnCohorte.length; i++) {
    columna:
    for (let columna = 0; columna < personasEnCohorte[i].length; columna++) {
        if (personasEnCohorte[i][columna] === "Maria") {
            break personas;
        }
        console.log(personasEnCohorte[i][columna]);
    }
}


// continue

// Termina la ejecucion de la sentencia en la iteracion actual y continua la 

console.log("==== uso de continue ====")
personas:
for (let i = 0; i < personasEnCohorte.length; i++) {
    for (let columna = 0; columna < personasEnCohorte[i].length; columna++) {
        if (personasEnCohorte[i][columna] === "Maria" || personasEnCohorte[i][columna] === "María")
            continue;
        const concatenacion = "Persona: " +personasEnCohorte[i][columna];
        console.log(concatenacion);
    }
}


// Ciclo While
/*
    Crea un bucle que ejecuta una sentancia mientras la condicion especificada sea verdadera

    Sintaxis:

while (condicion) {
    sentencias

    aumento++;
}
*/

/* let counter = 0;
while (confirm("¿QUieres continuar?")) {
    console.log(`Has continuado ${++counter} ${counter<2 ? "vez":"veces"}`);
} */

const number = [9,5,6,7];
let counter = 0;

while (counter < number.length) {
    console.log(number[counter]);
    counter++;
}

// Practica
/*

*/