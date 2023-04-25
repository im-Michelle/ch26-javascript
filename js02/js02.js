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

multiplica(5, 10);

function multiplica(operandoA, operandoB) {
  const resultado = operandoA * operandoB;
  console.log(resultado);
}

function divide(dividendo, divisor) {
  return dividendo / divisor;
}

console.log(divide(5, 2));

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

const sum = function sumatoria(a, b) {
  return a + b;
};

const resta = function (a, b) {
  return a - b;
};

console.log(sum(5, 5));
console.log(resta(10, 5));

// Funciones autoinvocadas
// self-invoking functions
// se puede definir con funciones anonimas

(function () {
  console.log("Me autoinvoco en la funcion");
})();

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

console.log("Area de rectangulo de 5x3: ", areaRectangulo(5, 3));

// Parametros rest

// Rest Parameters    Sintaxis:  ...nombreParametro
// NOs permite representar una serie de valores indefinidos en los argumentos
// Estos se preseentan como un array

function sumatoriaVariosNumeros(a, b, ...restoDatos) {
  let suma;
  suma = a + b;
  for (let i = 0; i < restoDatos.length; i++) {
    suma += restoDatos[i]; // suma = suma + rstoDatos[i];
  }
  return suma;
}

console.log("Sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 2));
console.log(
  "Sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 6, 9, 10)
);
console.log(
  "Sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50)
);

//  Funciones de Callback
// Función que se pasa a orta función como argumento, para luego invocarse
// para completar algún tipo de rutina o acción

// 3 funciones, una que imprima en consola, DOM h1.
// 1 parámetro de entrada
// no tiene return.

// Función que imprime un mensaje en la consola

function printToConsole(mensaje) {
  console.log(mensaje);
}

// Función que muestra una alerta en la pantalla
function showAlert(mensaje) {
  alert(mensaje);
}

// Función que agrega un encabezado h1 al DOM

function addH1ToDOM(mensaje) {
  const h1 = document.createElement("h1");
  h1.innerText = mensaje;
  document.body.appendChild(h1);
}

const addH1 = (mensaje) => {
  document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`;
};

function getName() {
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  printToConsole(text);
}

getName();

function double(arr) {
  const doubleNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const duplicate = arr[i] * 2;
    doubleNumbers.push(duplicate);
  }
  return doubleNumbers;
}

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
*/

const student1Courses = [
  "Math",
  "English",
  "Programming",
  "Biology",
  "Physics",
  "Music",
];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];

const student3Courses = ["Biology", "Music"];

function cursosEnComun(student1Courses, student2Courses) {
  const courses = [];
  for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if (student1Courses[i] === student2Courses[j]) {
        courses.push(student1Courses[i]);
      }
    }
  }
  return `Cursos en comun: ${courses}`;
}

function cursosEnComunV2(student1Courses, student2Courses) {
    const courses = student1Courses.filter(course => student2Courses.includes(course));
    return courses;
}
  

// console.log(cursosEnComun(student1Courses, student2Courses));
const commonCourses = cursosEnComunV2(student1Courses, student2Courses);
const commonCoursesWithStudent3 = cursosEnComunV2(commonCourses, student3Courses);
console.log("Common courses:", commonCoursesWithStudent3.join(","));


// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

let frase = "pepe pecas pica papas con un pico y una pala";

function countCharacters(frase) {
  let arr = frase.split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i]).includes('p')) {
      count++;
    }
  }
  return count;
}

const countCharactersV2 = (frase,letra) => {
  return frase.split('').filter(char => char === letra).length;
}

const countCharactersV3 = frase => (frase.match(/p/g) || []).length;


console.log(countCharacters(frase));

console.log(countCharactersV2(frase,'p'));

console.log(countCharactersV3(frase));

// -------------------- Funciones Recursivas ------------------------------
// Es una técnica de programación en donde la función se llama así misma.
// Se debe tener precausión de no entrar a un bucle infinito.

/*
  function funcionRecursiva( valor ){
    if ( condiciónDeParo ){

    }
    else {
        // Llamada recursiva.
    }
  }

*/

const factorialConCicloFor = numero =>{
  let resultadoFactorial = 1;
  
  for(let i = numero; i > 0; i-- ){
      resultadoFactorial *= i;
  }
  return resultadoFactorial;
}

function factorialRecursivo(numero) {
  if (numero <= 1) 
      return 1;
    return numero * factorialRecursivo(numero-1);
}

const factorial = number => (number === 2) ? 
                  number : 
                  number * factorial(number - 1);



console.log("Factorial de 5: " + factorialConCicloFor(5));
console.log("Factorial de 5: " + factorialRecursivo(5));


// ejercicio
// Una funcion recursica que muestre en consola
/*
Saludo 1
Saludo 2
Saludo 3
... 
Saludo 10

saludo(10)
*/

function saludo(numero) {
  if (numero <= 0) {
    return;
  } else {
    saludo(numero - 1);
    console.log("Saludo " + numero);
  }
}

const saludar = ( numero ) => {
  if( numero === 1){
      console.log("Saludo " + numero);
  }else{
      saludar(numero - 1)
      console.log("Saludo " + numero);
  };
};



saludo(10);

saludar(10);