// Integrantes
const integrante1 = {
    nombre1: "Patricia A. Bossicovich", 
    frase1:"'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant",
    fotoPerfil1: src = "../recursos/historia.jpg", 
    imagenes1: {
        imagen1: src = "../recursos/cuadros/pbossicovich1.jpg", 
        imagen2: src = "../recursos/cuadros/pbossicovich2.jpg"
    }
};
const {nombre1, frase1, fotoPerfil1, imagenes1: {imagen1, imagen2}} = integrante1;

const integrante2 = {
    nombre2: "Bibiana Bossicovich", 
    frase2: "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
    fotoPerfil2: src = "../recursos/historia.jpg", 
    imagenes2:{
        imagen3: src = "../recursos/cuadros/bbossicovich1.jpg",
        imagen4: src = "../recursos/cuadros/bbossicovich2.jpg"
    }
};
const {nombre2, frase2, fotoPerfil2, imagenes2: {imagen3, imagen4}} = integrante2;

const integrante3 = {
    nombre3: "Gabriela Ulivieri",
    frase3: "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
    fotoPerfil3: src = "../recursos/historia.jpg", 
    imagenes3: {
        imagen5: src = "../recursos/historia.jpg", 
        imagen6: src = "../recursos/historia.jpg"
    }
};
const {nombre3, frase3, fotoPerfil3, imagenes3: {imagen5, imagen6}} = integrante3;

const integrante4 = {
    nombre4: "Karen Liljesthron", 
    frase4: "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
    fotoPerfil4: src = "../recursos/historia.jpg", 
    imagenes4: {
        imagen7: src = "../recursos/historia.jpg", 
        imagen8: src = "../recursos/historia.jpg"
    }
};
const {nombre4, frase4, fotoPerfil4, imagenes4: {imagen7, imagen8}} = integrante4;

const integrante5 = {
    nombre5: "Gabriela De Dominicis", 
    frase5: "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
    fotoPerfil5: src = "../recursos/historia.jpg", 
    imagenes5:{
        imagen9:src = "../recursos/historia.jpg", 
        imagen10: src = "../recursos/historia.jpg"
    }
};
const {nombre5, frase5, fotoPerfil5, imagenes5: {imagen9, imagen10}} = integrante5;
// Cuadros

// Arrays
// Integrantes
const integrantes = [];

integrantes.push(integrante1);
integrantes.push(integrante2);
integrantes.push(integrante3);
integrantes.push(integrante4); 
integrantes.push(integrante5);
console.log(integrantes);
// Cuadros
const cuadros = [];
cuadros.push(imagen1);
cuadros.push(imagen2);
cuadros.push(imagen3);
cuadros.push(imagen4);
cuadros.push(imagen5);
cuadros.push(imagen6);
cuadros.push(imagen7);
cuadros.push(imagen8);
cuadros.push(imagen9);
cuadros.push(imagen10);
console.log(cuadros);

// Armado de pagina
const verIntegrantes = document.getElementById("verIntegrantes");

integrantes.forEach( Integrantes=> {
    let article = document.createElement("article");
    article.innerHTML = `<div class="verIntegrantes__imagen">
                            <img src="${Integrantes.imagen}" class="verIntegrantes__img">
                        </div> 
                        <div class="verIntegrantes__bio">
                            <span class="">${Integrantes.nombre}</span>
                            <p class="verIntegrantes">${Integrantes.frese}</p>
                        </div>
                        <div>
                            <img src="${Integrantes.imagen2}" class="verIntegrantes__img--cuadro">
                            <img src="${Integrantes.imagen3}" class="verIntegrantes__img--cuadro">
                        </div> <hr>`
    verIntegrantes.appendChild(article);
})

