console.log("Js 08 Objetos");


// Crear un objeto

const frutasColores = {
    // clave : valor
    fresa : ["roja"],
    pepino : ["verde"],
    mango : ["amarillo"],
    naranja : ["anaranjado", "amarillo"],
    mandarina : ["anaranjado"],
    mora : ["morada"],
    pitaya : ["rosa", "rojo", "blanco", "amarillo"]
};


// Formas de leer un objeto
// Leer el color del pepino

console.log("El pepino es " + frutasColores.pepino);


// agregar el color verde al mango
frutasColores.mango.push("verde");
console.log("El mango es: " + frutasColores.mango);


// Iterando los objetos
// Iterar sobre todas las propiedades de un objeto

for (const fruta in frutasColores) {
    console.log(`${fruta} tiene los colores ${frutasColores[fruta]}`)
};

// Uso de symbol
/*
Se utiliza para añadir claves de propiedades unicas y que esten ocultas
a otros mecanismos como la iteracion y stringify
*/

const sueldoOculto = Symbol();

const datosEmpleado = {
    nombre : "El kesa",
    apellido : "Britas",
    [sueldoOculto] : 50_000
};

for (dato in datosEmpleado) {
    console.log(`${dato}: ${datosEmpleado[dato]}`);
};

//localStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado));
sessionStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado));

// Bote de lunetas 

const boteLunetas = {
    gramaje : 20,
    sabor : "chocolate",
    costo : 35,
    abrir : function(){
        return "Despachar producto";
    },
    comer : function(gramosComidos) {
        return this.gramaje -= gramosComidos;
    }
};

console.log("Mi bote de lunetas tiene(g): " +boteLunetas.comer(5));