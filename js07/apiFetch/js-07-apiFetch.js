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


/*
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
*/


const url = 'https://reqres.in/api/users?delay=3';

const handleError = (err) => {
    console.log(err);
    contentH1.textContent = `Error: ${err}`;
};

const addRow = (containerId, data) => {
    const container = document.getElementById(containerId);
    const row = document.createElement('div');
    row.classList.add('row');

    row.innerHTML = `
        <div class="col-1">${data.id}</div>
        <div class="col-2">${data.first_name}</div>
        <div class="col-2">${data.last_name}</div>
        <div class="col-5">${data.email}</div>
        <div class="col-2">
            <img src="${data.avatar}" alt="" class="circular-image">
        </div>
    `;

    container.appendChild(row);
};

const getData = async (url) => {
    try {
        const response = await fetch(url);
        const { data } = await response.json();
        console.log(data);
        localStorage.setItem('Datos', JSON.stringify(data));
        localStorage.setItem('DatosExpiracion', Date.now() + 5 * 60 * 1000); 
        data.slice(0, 6).forEach((item) => addRow('dataTable', item));
    } catch (error) {
        handleError(error);
    }
};

const date = new Date();
const minute = date.getMinutes();
console.log(minute);

const datosExpiracion = localStorage.getItem('DatosExpiracion');
if (datosExpiracion && parseInt(datosExpiracion) > Date.now()) {
    const data = JSON.parse(localStorage.getItem('Datos'));
    data.slice(0, 6).forEach((item) => addRow('dataTable', item));
} else {
    getData(url);
}
