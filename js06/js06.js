console.log("Sesion JS06");

function findElementByIdFnc01 () {
    /* instrucciones */ 
    return null;
}

const findElementById = (nameDeveloper) => {
    const tituloRef = document.getElementById("titulo");
    
    tituloRef.innerHTML = tituloRef.innerHTML + " " + nameDeveloper;
}

findElementById("Michelle");

const changeSubtitleById = (newTxt) => {
    const subtitleRef = document.getElementById("subtitulo");

    subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;

}

changeSubtitleById("viernes de cholos")

const changeEmphasis = (newtxt,url) => {
    const emphasisRef = document.getElementsByTagName("em");
    // console.log(emphasisRef)
    for (element of emphasisRef) {
        console.log(element);
        element.innerHTML = `<a href="${url}" target="_blank">${newtxt}</a>`;
    };
};


changeEmphasis("viernes friki", "https://www.google.com/");


// ---- Selector universal --
// querySelector

const findElementsByQuerySelector = () => {
    const refElements = document.querySelector(".noticias");

    refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11`;
}

findElementsByQuerySelector();


// Crear nuevo elemento 
// appendChild

const newElement = () => {
    const newElementRef = document.createElement("p"); // <p></p>
    newElementRef.innerHTML = `La Ch 26 le gusta: 
    <ul>
        <li>El pan de muerto</li>
        <li>El chismesito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>
    </ul>
    `;

    const articleRef = document.querySelector("article");
    articleRef.appendChild(newElementRef);  // Se agrega el nuevo elemento

    // Clonar el nodo anterior
    // const nodoClonado = articleRef.cloneNode(true);
    // document.querySelector("article-news").appendChild(nodoClonado);
}

newElement();


const changeColor = (color, borderColor) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
    refIntro.style.border = `thick solid ${borderColor}`;
}

changeColor("red","red");

// Agregar a un elemento un border
// .style.border = "thick solid #0000FF"; 


// ----- Propiedades de visulaizacion (desaparecer elementos) -----
// display: none (Quitar el elemento de DOM)
// visibility = hidden (Ocultar el elemento del Dom)

const quitarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none";
};

const ocultarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden";
};

const resetBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "visible";
}
  