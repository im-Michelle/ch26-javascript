console.log("Js 08 Clases");

// Crear una clase
// Para el nombre se usa la anotación Pascal Case ( UpperCamelCase);

const price = Symbol();

class Car {


    
    // Metodo constructor
    constructor(name, brand, price){
        console.log("Has creado un nuevo objeto " + name);
        this.name = name;
        this.brand = brand;
        this[price] = price;
    };

    igniteEngine = (state) => state? "Engine is on": "Engine is off";

    //
    
    
    toString() {
        return `Car: \nName: ${this.name} \nBrand:${this.brand} \nPrice:${this[price]}`;
    };
    
};


// Usar la clase para instaciar un objeto
// Para instanciar se usa new NombreClase

const elantra = new Car("Elantra", "Hyundai", 450_000);
const aveo = new Car("Aveo", "Chevrolet", 250_000);

console.log(elantra);
console.log(aveo);
console.log(elantra.name + " " +elantra.igniteEngine(true));
console.log(aveo.toString());