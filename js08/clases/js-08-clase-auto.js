/*

 */



class Car {
    
    // Metodo constructor
    constructor(name, brand, price){
        console.log("Has creado un nuevo objeto " + name);
        this.#name = name;
        this.#brand = brand;
        this.#price = price;
    };

    igniteEngine = (state) => state? "Engine is on": "Engine is off";

    #name;
    #brand;
    #price;
    
    toString() {
        return `Car: \nName: ${this.#name} \nBrand:${this.#brand} \nPrice:${this.#price}`;
    };
    
};


export {Car};