// Desarrollo sincrono

const primerPaso = () => {
    console.log("01- Inicio de mi programa");
};

const segundoPaso = () => {
    console.log("02- Desarrollo de mi programa");
};

const tercerPaso = () => {
    console.log("03- Fin de mi programa");
};

primerPaso();
segundoPaso();
tercerPaso();


// Programacion Asincrona
// setTimeout()

// Establee un temporizador que ejcuta
// Una vez que expire el temporizador

const desarrolloAsincrono = (saludo) => {
    console.log("Hola " + saludo);
};

const segundoPasoAsincrono = (saludo) => {
    /*setTimeout((saludoRef) => {
        console.log("Hola "+ saludoRef);
    }, 4000, saludo);*/
    setTimeout(() => {
        console.log("Hola "+ saludo);
    }, 4000);
};

console.log("");
primerPaso();
// setTimeout(desarrolloAsincrono, 3000, "ch26");
segundoPasoAsincrono("ch26 con 4 s. de retardo");
tercerPaso();


// setInterval
// Ejecuta una funcion de manera reiterada con un tiempo de retardo fijo entre cada llamada

const segundoPasoConIntervalo = (saludo) => {
    setInterval(() => console.log("La banda malandra es " + saludo), 2000);
};

console.log("setInterval")
primerPaso();
segundoPasoConIntervalo("ch26 wu, wu");
tercerPaso();

// Iniciar y detener setInterval

const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;
refStartInterval.disable = true;

refStartInterval.addEventListener("click", ()=> {
    // console.log("Se pulsó iniciar");
    setInterval(() => {
        refDateH2.innerHTML = new Date().toLocaleString();
    }, 1000);
    refStartInterval.disable = true;
    refStopInterval.disable = false;
});

refStopInterval.addEventListener("click", () => {
    // console.log("Se pulsó detener");
    clearInterval(idInterval); // detener mi intervalo
    refStartInterval.disable = false;
    refStopInterval.disable = true;
});