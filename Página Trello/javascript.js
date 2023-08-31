function addCard(contenedor, titulo, contenido, url) {

    const infoLink = document.createElement("a"); // Cuando se clickea este botón, se abre la primera búsqueda de Google de lo que se puso como título de la tarjeta
    infoLink.href = "https://" + url;
    infoLink.target = "_blank";
    infoLink.className = "btn btn-primary wrap";
    infoLink.textContent = "Más info";

    const deleteLink = document.createElement("button");
    deleteLink.type = "button";
    deleteLink.className = "btn btn-danger";
    deleteLink.textContent = "Eliminar tarjeta";

    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "container d-flex flex-column gap-1";

    contenedorBotones.appendChild(infoLink);
    contenedorBotones.appendChild(deleteLink);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = titulo;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = contenido;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(contenedorBotones);

    const cardContent = document.createElement("div");
    cardContent.className = "card";
    cardContent.style.width = "100%";

    cardContent.appendChild(cardBody);

    const columna = document.createElement("div");
    columna.className = "colorcolumna";

    columna.appendChild(cardContent);

    const col = document.createElement("div");
    col.className = "prueba";

    col.appendChild(columna);

    const card = document.createElement("div");
    card.className = "card card-body p-2";
    let min = 1;
    let max = 100000;
    let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    card.id = randomInteger;

    card.appendChild(col);

    const container = document.getElementById(contenedor);

    container.appendChild(card);

    deleteLink.addEventListener("click", function () {
        let tarjetaAEliminar = document.getElementById(randomInteger);
        tarjetaAEliminar.parentNode.removeChild(tarjetaAEliminar);
    });
}

let titulo1 = document.getElementById("titulo1");
let contenido1 = document.getElementById("contenido1");
let modal1 = new bootstrap.Modal(document.getElementById("modal1"));

let titulo2 = document.getElementById("titulo2");
let contenido2 = document.getElementById("contenido2");
let modal2 = new bootstrap.Modal(document.getElementById("modal2"));

let titulo3 = document.getElementById("titulo3");
let contenido3 = document.getElementById("contenido3");
let modal3 = new bootstrap.Modal(document.getElementById("modal3"));


document.getElementById("creartarjeta1").addEventListener("click", async function () {
    modal1.hide();
    const url = await busquedaGoogle(titulo1.value); // Guarda en esta variable la url mencionada debajo
    addCard("contenedortarjetas1", titulo1.value, contenido1.value, url);
});

document.getElementById("creartarjeta2").addEventListener("click", async function () {
    modal2.hide();
    const url = await busquedaGoogle(titulo2.value);
    addCard("contenedortarjetas2", titulo2.value, contenido2.value, url);
});

document.getElementById("creartarjeta3").addEventListener("click", async function () {
    modal3.hide();
    const url = await busquedaGoogle(titulo3.value);
    addCard("contenedortarjetas3", titulo3.value, contenido3.value, url);
});

modal1._element.addEventListener("show.bs.modal", function () {
    titulo1.value = "";
    contenido1.value = "";
    link1.value = "";
});

modal2._element.addEventListener("show.bs.modal", function () {
    titulo2.value = "";
    contenido2.value = "";
    link2.value = "";
});

modal3._element.addEventListener("show.bs.modal", function () {
    titulo3.value = "";
    contenido3.value = "";
    link3.value = "";
});

// Esta función devuelve la url de la primera búsqueda de Google del argumento que se le pasa.
async function busquedaGoogle(busqueda) {
    let url = new URL('https://google-search72.p.rapidapi.com/search');

    let params = {
        q: busqueda,
        num: 1,
        start: 0
    };

    url.search = new URLSearchParams(params).toString();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66f6342837mshc9d25ffbe7d365fp12c67ejsnaa35602c726b',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.items[0].displayLink;
    } catch (error) {
        console.error(error);
        return null;
    }
}