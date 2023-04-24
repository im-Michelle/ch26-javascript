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