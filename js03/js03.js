console.log("Sesion js03");

// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
    let edadSergio = 39, edadLuis = 25;


   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    console.log(`Sergio: ${edadSergio} años`);
    console.log(`Luis ${edadLuis} años`)

   }
}



// Condicional if-else
/*
sintaxis:
    if(condicion) {
        sentencias;
    }

    if(condicion) sentencia;
    else sentencia;

    if(condicion) {
        sentencia;
    } else {
        sentencia;
    }


*/


const temperatura = 20;

/* if (temperatura == 21) 
    mensaje = `temperatura ideal ${temperatura}`;
else 
    mensaje = `${temperatura} grados no es ideal`; */


if (temperatura === 21) 
     mensaje = `Temperatura ideal ${temperatura}`; 
else if( temperatura>21)  
    mensaje = `Temperatura de ${temperatura} grados es caliente`; 
else if( temperatura<21)  
    mensaje = `Temperatura de ${temperatura} grados es fría`;
else  
    mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);


// --------------------- Ejercicio -----------------------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

 Usar if-else
*/




// Switch
/* 
La instruccion switch evalua una expresion y se compara 
con el valor de cada instancia en case y se ejecuta las
sentencias asociadas a ese case hasta que se encuentre la sentencia break


Sintaxis:
    switch (expresion) {
        case valor1:
            sentencias;
            break;
        case valor 2: 
            sentencias;
            break;
        case valor n:
            sentencias;
            break;
        default:
            sentencias;
            break;
    }
*/



const setVelocidadVentilador = (velocidad) => {
    let msj;

    switch (velocidad) {
        case 0:
            msj = "Apagado";
            break;
        case 1:
            msj = "Velocidad baja";
            break;
        case 2:
            msj = "Velocidad media";
            break;
        case 3:
            msj = "Velocidad alta";
            break;
        case 4: 
            msj = "El nivel no existe";
            break;
    }
    return msj;
}

console.log(`El ventilador esta en ${setVelocidadVentilador(1)}`);


// Practica
// refcatorizar el ejercicio anterior y usar un switch

// --------------------- Ejercicio -----------------------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

 Usar Switch
*/

/* const getEstacionDelAnio = () => {
    const mes = document.getElementById("mes"), valor {
        let estacion;
    switch (mes) {
        case "Enero":
        case "Febrero":   
        case "Diciembre":
            estacion = "invierno";
            break;
        case "Marzo":
        case "Abril":   
        case "Mayo":
            estacion = "primavera";
            break;
        case "Junio":
        case "Julio":   
        case "Agosto":
            estacion = "verano";
            break;
        case "Septiembre":
        case "Octubre":   
        case "Noviembre":
            estacion = "invierno";
            break;
        default:
            estacion = "mes no valido";
            break;
    }
    return estacion;
    }
}

const mes = prompt("Ingresa el mes para saber la estación del año:");
const estacion = getEstacionDelAnio(mes);
const resultElement = document.getElementById("result");
resultElement.innerHTML = `La estación del año correspondiente al mes ${mes} es ${estacion}.`; */