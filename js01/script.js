console.log("Sesión js01");

// Son 7 datos primitivos:
// String "Hola"
console.log("Tipo de dato String: ", "Hola");


//Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para representar el número
console.log("Tipo de dato Number: ",12, -45, 367.12, 45/0, -56/0, 56*"Hola");
console.log("valor máximo a representar: ",Number.MAX_VALUE);
console.log("Valor seguro: ",Number.MAX_SAFE_INTEGER);

// BigInt
//  Sirven para representar valor númerocps enteros, de los que el tipo number4
// no puedo representar o no es seguro
console.log("MAX_SAFE_INTEGER + 1 :",Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 :",Number.MAX_SAFE_INTEGER + 2);

let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 1n);

// Boolean
// Tenemos solo 2 estados: true / false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null
// intencionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // undefined
myVarNull = "Saludos Sr. Pepe"; // Se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // string

myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // object

// symbol
// crea propiedades privadas en los objetos

// Tipos de datos Object
// Object:
const misDatos = {
    // clave : valor
    nombre : "Michelle",
    apellido : "Trejo",
    edad : 25,
    isBelicoso: false,
    musicaPreferidaPorGenero : {
        rock : "La celula que explota",
        corridosTumbados : "Ella baila sola"
    },
    nombreCompleto : function fullName(){
        return this.nombre + " " + this.apellido;
    }
};

console.log("Datos completos: ",misDatos);
console.log("Nombre: ",misDatos.nombre);
console.log("Música de fin de semana: ", misDatos.musicaPreferidaPorGenero.corridosTumbados);
console.log("Nombre completo: ", misDatos.nombreCompleto());


// Array
// ALmacena diferentes tipos de datos, su primer elemento es el indice 0

const cancionesPP = [
    "Soy el Belicon",
    "El azul",
    "El Tsurito",
    "AMG",
    {
        2020 : 5,
        "2021" : 30,
        2022 : 56
    }
];

console.log("Canción con color: ",cancionesPP[1]);
console.log("Canciones hechas en el año 2021: ", cancionesPP[4][2021]);

// Propiedades de arreglos

console.log("Num total de elementos: ",cancionesPP.length);
console.log("Contiene la canción AMG: ",cancionesPP.indexOf("AMG"));