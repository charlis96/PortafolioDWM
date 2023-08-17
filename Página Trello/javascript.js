// ---------------------------------------- Crear tarjetas en la columna de "Por hacer" ----------------------------------------

function addCard1(titulo, contenido, link) {

    const tutorialLink = document.createElement("a");
    tutorialLink.href = "http://www." + link;
    tutorialLink.target = "_blank";
    tutorialLink.className = "btn btn-primary";
    tutorialLink.textContent = "Más información";

    const deleteLink = document.createElement("button");
    deleteLink.type = "button";
    deleteLink.className = "btn btn-danger"
    deleteLink.textContent = "Eliminar tarjeta";

    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "container d-flex flex-column gap-1";

    contenedorBotones.appendChild(tutorialLink);
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

    const primeracolumna = document.createElement("div");
    primeracolumna.className = "primeracolumna";

    primeracolumna.appendChild(cardContent);

    const col = document.createElement("div");
    col.className = "col";

    col.appendChild(primeracolumna);

    const card = document.createElement("div");
    card.className = "card card-body";

    card.appendChild(col);

    const container = document.getElementById("contenedortarjetas1");

    container.appendChild(card);

}

let titulo1 = document.getElementById("titulo1");
let contenido1 = document.getElementById("contenido1");
let link1 = document.getElementById("link1");
let modal1 = new bootstrap.Modal(document.getElementById("modal1"));

document.getElementById("creartarjeta1").addEventListener("click", function () {
    modal1.hide();
    addCard1(titulo1.value, contenido1.value, link1.value);
});

// Limpiar campos cuando se muestra el modal
modal1._element.addEventListener("show.bs.modal", function () {
    titulo1.value = "";
    contenido1.value = "";
    link1.value = "";
});



// ---------------------------------------- Crear tarjetas en la columna de "En proceso" ----------------------------------------

function addCard2(titulo, contenido, link) {

    const tutorialLink = document.createElement("a");
    tutorialLink.href = "http://www." + link;
    tutorialLink.target = "_blank";
    tutorialLink.className = "btn btn-primary";
    tutorialLink.textContent = "Más información";

    const deleteLink = document.createElement("button");
    deleteLink.type = "button";
    deleteLink.className = "btn btn-danger"
    deleteLink.textContent = "Eliminar tarjeta";

    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "container d-flex flex-column gap-1";

    contenedorBotones.appendChild(tutorialLink);
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

    const primeracolumna = document.createElement("div");
    primeracolumna.className = "segundacolumna";

    primeracolumna.appendChild(cardContent);

    const col = document.createElement("div");
    col.className = "col";

    col.appendChild(primeracolumna);

    const card = document.createElement("div");
    card.className = "card card-body";

    card.appendChild(col);

    const container = document.getElementById("contenedortarjetas2");

    container.appendChild(card);

}

let titulo2 = document.getElementById("titulo2");
let contenido2 = document.getElementById("contenido2");
let link2 = document.getElementById("link2");
let modal2 = new bootstrap.Modal(document.getElementById("modal2"));

document.getElementById("creartarjeta2").addEventListener("click", function () {
    modal2.hide();
    addCard2(titulo2.value, contenido2.value, link2.value);
});

// Limpiar campos cuando se muestra el modal
modal2._element.addEventListener("show.bs.modal", function () {
    titulo2.value = "";
    contenido2.value = "";
    link2.value = "";
});


// ---------------------------------------- Crear tarjetas en la columna de "En proceso" ----------------------------------------

function addCard3(titulo, contenido, link) {

    const tutorialLink = document.createElement("a");
    tutorialLink.href = "http://www." + link;
    tutorialLink.target = "_blank";
    tutorialLink.className = "btn btn-primary";
    tutorialLink.textContent = "Más información";

    const deleteLink = document.createElement("button");
    deleteLink.type = "button";
    deleteLink.className = "btn btn-danger"
    deleteLink.textContent = "Eliminar tarjeta";

    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "container d-flex flex-column gap-1";

    contenedorBotones.appendChild(tutorialLink);
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

    const primeracolumna = document.createElement("div");
    primeracolumna.className = "terceracolumna";

    primeracolumna.appendChild(cardContent);

    const col = document.createElement("div");
    col.className = "col";

    col.appendChild(primeracolumna);

    const card = document.createElement("div");
    card.className = "card card-body";

    card.appendChild(col);

    const container = document.getElementById("contenedortarjetas3");

    container.appendChild(card);

}

let titulo3 = document.getElementById("titulo3");
let contenido3 = document.getElementById("contenido3");
let link3 = document.getElementById("link3");
let modal3 = new bootstrap.Modal(document.getElementById("modal3"));

document.getElementById("creartarjeta3").addEventListener("click", function () {
    modal3.hide();
    addCard3(titulo3.value, contenido3.value, link3.value);
});

// Limpiar campos cuando se muestra el modal
modal3._element.addEventListener("show.bs.modal", function () {
    titulo3.value = "";
    contenido3.value = "";
    link3.value = "";
});