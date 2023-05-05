console.log("Js07 Api Fetch");
/*
La Api Fetch nos ayuda a acceder y manipular peticiones HTTP
una forma logica y facil de obtener recursos de la red de manera asincrona

Sintaxis: 
Solicitud get

fetch(  url  )
    .then()
    .catch();

*/

/*
const url = "https://fakestoreapi.com/products";

const getProducts = (url) => {
    fetch(url)
        .then(result => {
            console.log(result.status)
            return result.json();
        })
        .then((productsObj) => {
            console.log("\nLista de productos:")
            // Lista de productos
            console.log(productsObj);
            // Imprimir el titulo de cada producto
            console.log("\nNombre productos:")
            productsObj.forEach(product => {
                console.log(product.title);
            });
        })
        .catch(error => console.log(error));
};

getProducts(url);


// Consumir el fetch usando async await 


const getProductsAwait = async (url) => {
    try {
      const productsJson = await fetch(url);
      console.log(productsJson.status);
      const productsObj = await productsJson.json();
      console.log("\nLista de productos:");
      console.log(productsObj);
      console.log("\nNombre productos:");
  
      localStorage.setItem("mis-productos", JSON.stringify(productsObj));
  
      productsObj.forEach((product) => {
        console.log(product.title);
      });
    } catch (error) {
      console.log(error);
    }
  };
  


getProductsAwait(url);
*/


const postUser = (url, userData) => {
  fetch(url, {
    method: 'POST', // PUT o DELETE
    body: JSON.stringify(userData), // Los datos del usuario, conversion de Obj a JSON
    headers: {'Content-Type': 'application/json'}
  })
  .then((response) => 
    response.json())
  .then((register) => console.log(register))
  .catch((exception) => console.log(exception));
};

user = {
  name : "El Ivan",
  job : "leader"
}

const urlPost = "https://reqres.in/api/users";

postUser(urlPost, user);