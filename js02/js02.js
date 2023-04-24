console.log("Sesion JS02");

// -------- Func{on declarada} --------
// function declaration, function statement
// Una caracteristica es que las funciones declaradas tiene hoisting

/* console.log("El resultado de 5 x 10 = ",multiplica(5,10)); */

/*
    function nombreFuncion(parametros) {
        instrucciones
    }
*/

/* { // Este es un bloque de código
    const operandoA = 5;
    const operandoB = 10;
    const resultado = operandoA * operandoB;
    console.log("resultado");
} */

multiplica(5,10);

function multiplica(operandoA,operandoB) {
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

function divide(dividendo, divisor) {
    return dividendo/divisor;
}

console.log(divide(5,2));


// Funciones expresadas
// Function expressions
// Son declaradas dentro de la asignacion de una variable 
// Estas funciones pueden ser anónimas (no tienen nombre)
// Las funciones expresadas no tiene hoisting, por que no se
// carga en memoria hsta que se utilice


/*
    const nombreVariable = function nombreFuncion(parametros) {
        instrucciones;
    }
*/

const sum = function sumatoria(a,b) {
    return a + b;
}

const resta = function (a,b) {
    return a - b;
}



console.log(sum(5,5));
console.log(resta(10,5));


// Funciones autoinvocadas
// self-invoking functions
// se puede definir con funciones anonimas

(function (){
    console.log("Me autoinvoco en la funcion");
}) ();


// Funciones flechas
// arrowFunctions
// Son funciones similares a las funciones declaradas pero no
// requiere la palabra function
// Si tiene una sola instruccion no requiere las {}
// Si la instrccion es el mismo retorno, no requiere la palabra return

/*
const areaRectangulo = function(base,altura) {
    return base * altura;
}
*/

/**
 * documentacion de la funcion
 * @param {number} base esto es la descripcion de base 
 * @param {number} altura esto es la descripcion de altura
 * @returns área del rectángulo
 */

const areaRectangulo = (base, altura) => base * altura;

console.log("Area de rectangulo de 5x3: ",areaRectangulo(5,3));