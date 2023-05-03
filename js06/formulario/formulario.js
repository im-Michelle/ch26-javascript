
console.log("Sesion JS06-Formulario");

const refForm = document.forms["registro"];




refForm.addEventListener('submit' , (event) =>{
    event.preventDefault(); // omita las acciones por default
    //console.log(event);
    const email = refForm.elements["inputEmail4"];
    const password = refForm.elements["inputPassword4"];
    const addres = refForm.elements["inputAddress"];
    const city = refForm.elements["inputCity"];
    const state = refForm.elements["inputState"];
    const zip = refForm.elements["inputZip"];

    // Crear el objeto con los datos del formulario
    user = {
        email:email.value,
        password: password.value,
        addres: addres.value,
        city: city.value,
        state: state.value,
        zip:zip.value

    }
    console.log(user);

}  );