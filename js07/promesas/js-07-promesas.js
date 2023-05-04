console.log("Js07 - promesas");

/*  
Una promesa (promise) es un objeto que se represnta la terminación o fracaso
de una operacioón asincrona.

Para crear una promesa se usa el constructor new Promise();
*/

const pinkiPromise = new Promise((fncCallBackRelsove, fncCallBackReject) => {
    const menorEdad = false;

    if (menorEdad)
        fncCallBackRelsove("Hay que estar siempre juntos");
    else
        fncCallBackReject("No te conozco");
});


// Consumir las promesas
// function then, catch y finally.

console.log("Antes de consumir la promesa");

pinkiPromise
    .then((response) => console.log("Promesa resulta " + response))
    .catch((exception) => console.error("Tu promesa fue rechazada " + exception));


console.log("Despues de consumir la promesa");


// Una promesa que reciba dos numeros A y B, y los divida
// en caso de que b sesa cero, me envie un rechazo diciendome por que no se puede 
// realizar la division 

/*
const divisionDosNumeros = new Promise((resolve, reject) => {
    const a = 10;
    const b = 0;

    if (b === 0) {
        reject("No se puede dividir entre cero");
    } else {
        resolve(a / b);
    }
});


divisionDosNumeros
    .then(response => console.log(response))
    .catch(exception => console.error(exception));
*/

const divisionAsincrona = (a, b) => {
    const myPromise = new Promise((resolve, reject) => {
        if (b === 0)
            reject("No se puede dividir entre cero");
        else
            resolve(a / b);
    });
    return myPromise;
};

divisionAsincrona(10, 2)
    .then((response) => console.log(response))
    .catch((exception) => console.error(exception));



// Promise.resolve();

const promesaRapida = Promise.resolve(123);


// Resulevan con .then

const consumirConThen = () => {
    promesaRapida.then(resultado => {
        console.log("Resultado: ", resultado);
    });
    console.log(456);
};

consumirConThen();



// Resolver con try catch

const consumirConAwait = async () => {
    const resultado = await promesaRapida;
    console.log("Consumir con Await: ", resultado);
    console.log(789);
}

consumirConAwait();
