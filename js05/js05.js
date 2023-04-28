


// Operadores aritmeticos
// Multiplicacion *
// Substraccion  -
// División /
// Exponencial **
// Resto  %

let dinero = 20 + 10;

// Operadores de asignación

// Asigna un valor a su operando izquierdo basándose en el valor de
// su operando derecho
// Asignación =
// Asignación  de adición  +=
dinero += 15;

// Multiplicación *=
// Substracción -=
// División /=
// Exponencial **=
// Resto %=


2 ** 3 ** 2; // 512

// Operadores unarios
// Un operador unario realiza una operación en un solo operando.
// Negación
dinero = -3;
console.log(dinero);

// Conversión a Númerico +
dinero = +dinero;
dinero = + "200";
console.log(dinero);

// typeof
// Operador lógico not
let valorBooleano = !true;
console.log(valorBooleano);


// Operadors de incremento y decremento
// Operador de pre incremento y pre decremento
// Preincremento ++valor
// predecremetno --valor

// Operador de postincremento valor++
// Operador de postdecremento  valor--;

let numero = 10;
numero++;  // 11
++numero;  // 12
console.log(numero);

let nuevoValor = numero++;
/*
    let nuevoValor = numero;
    numero = numero + 1;
*/
console.log("Nuevo valor: ",nuevoValor);  // 12
console.log("numero: ",numero);  // 13

let nuevoDato = ++numero;
console.log("Nuevo dato: ",nuevoDato);   // 14
console.log("numero: ", numero);   // 14

let x = 3;
let y = ++x;
console.log(`x ${x++} y ${++y}`);  // 4 - 5
console.log(`x: ${x} y: ${y}`);  // 5 - 5


// Operadors lógicos AND && y OR ||


const a = true;
const b = false;
const c = true;
console.log( a || b && c );  // true


// Operadores de corto cicuito
// cuando los operadores lógicos AND y OR actuan sobre operandos diferentes a booleanos

// Op1 && Op2   Si Op1 es verdadero, se raliza el resultado de OP2.
console.log( a && "Holi Crayoli" );
console.log( b && "Holi Crayoli" );
console.log( NaN && "El valor es un numero que se puede procesar");
console.log( "false" && "El valor es false");

console.log( a || "Holi Crayoli" );
console.log( b || "Holi Crayoli" );
console.log( NaN || "El valor es un numero que se puede procesar");
console.log( "false" || "El valor es false");
console.log( "" || "El valor es false");