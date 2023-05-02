


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


const noDefinido = true;
console.log ( noDefinido || theBigBang);

// Quiero imprimir "Estas Autorizado si la varible isOnline y isActive son true

const isOnline = true;
const isActive = true;
if (isOnline) {
    if (isActive) {
        console.log("Estas autorizado");
    }
}

if (isOnline && isActive) {
    console.log("Estas autorizado");
}

console.log(isOnline && isActive ? "Estas autorizado" : "No estas autorizado");

if (isOnline && isActive && "Estas autorizado") {
    console.log("Estas autorizado");
}


// Operadores relacionales 
/*
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. 
*/

console.log( 23 < "40");

console.log( 23 < "40");
console.log( "b" < "A");

console.log( "Hola" < "HOLA");

// Desestructuracion 

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA}, b:${dataB}`);

// Quiero intercambair los datos

/*
let temporal;

temporal = dataA;
dataA = dataB;
dataB = temporal;
console.log(`a: ${dataA}, b:${dataB}`);
*/

[dataA, dataB] = [dataB, dataA];
console.log(`a: ${dataA}, b:${dataB}`);

const calificaciones = [50, 80, 100, 30];
// dataA = calificaciones[0]; // 50
// ataB = calificaciones[1]; // 80
let resto; // rest parameter
[dataA, dataB, ...resto] = calificaciones;
console.log(`a: ${dataA}, b:${dataB}`);
console.log(resto);

const primerAnio = {
    dataA : "43 alumnos",
    dataB : "50 alumnos",
    dataC : "20 alumnos"
};

({dataA, dataB} = primerAnio);

console.log(`a: ${dataA}, b:${dataB}`);


const auto = {
    model : "Chevrolet",
    year : 2023,
    color : "red",
    motor : "2.0"
};

console.log("Modelo " + auto.model); // auto 

// Asignar un nuewvo nombre al atributo
// const {model, color : colorAuto} = auto;
const {model, color} = auto;
console.log("Modelo " + model + " color: " + color);

/*
 Hacer una funcion que realice la division de  numeros
    y me entrege (return) en entero el cociente y residuo
*/

const division = (numeroUno, numeroDos) => {
    const cociente = Math.floor(numeroUno / numeroDos);
    const residuo = numeroUno % numeroDos;
    return { cociente, residuo };
};

const {cociente, residuo} = division(4, 2);

console.log("Cociente: "+ cociente + " Residuo: "+ residuo);
  