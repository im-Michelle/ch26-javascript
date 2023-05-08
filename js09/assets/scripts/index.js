console.log("JS09 uso de Axios");

const url = "https://reqres.in/api/unknown/23";

const getUsersFetch = () => {
    fetch(url)
        .then((response) => response.json())
        .then((users) => {
            console.log(users.data);
        })
        .catch((error) => console.log(error));
};

const getUsersAxios = () => {
    axios
        .get(url)
        .then((users) => {
            console.log(users.data.data);
        })
        .catch((error) => console.log(error));
};

// --------- Usar Axios con async-await --------------

const getUsersAxiosAwait = async () => {
    try {
        const users = await axios.get(url);
        console.log(users);
    } catch (error) {
        console.log(error);
        //alert( error.message  )
    }
};

// ------- Solicitud POst con Axios. ------------------


const createUser = () => {
    axios.post('https://reqres.in/api/users', {
        name: 'morpheus',
        job: 'leader'
    })
        .then((response) => {
            console.log('ID:', response.data.id);
            console.log('Name:', response.data.name);
            console.log('Job:', response.data.job);
            console.log('Created at:', response.data.createdAt);
        })
        .catch((error) => {
            console.log(error);
        });
};

createUser();




