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
        imagen3: src = "../recursos/cuadros/bbossicovich3.jpg",
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
// Obras
const obra1 = {src:"recursos/cuadros/toto2.jpg"};
const obra2 = {src:"recursos/cuadros/dominicis3.jpg"};
const obra3 = {src:"recursos/cuadros/pbossicovich5.jpg"};
const obra4 = {src:"recursos/cuadros/mendez4.jpg"};
const obra5 = {src:"recursos/cuadros/liljesthrom5.jpg"};
const obra6 = {src:"recursos/cuadros/chemes3.jpg"};
const obra7 = {src:"recursos/cuadros/bbossicovich1.jpg"};
const obra8 = {src:"recursos/cuadros/ulivieri5.jpg"};
const obra9 = {src:"recursos/cuadros/reyes3.jpg"};
const obra10 = {src:"recursos/cuadros/maris4.jpg"};
const obras = [obra1, obra2, obra3, obra4, obra5, obra6, obra7, obra8, obra9, obra10];
// Uniendo dos arrays con spread
const coleccion = [...obras, ...cuadros];

// Armado de pagina
const verIntegrantes = document.getElementById('verIntegrantes');
    verIntegrantes.innerHTML = `<article>
                                    <div class="verIntegrantes__imagen">
                                    <img src="${fotoPerfil1}" class="verIntegrantes__img">
                                    </div>
                                    <div class="verIntegrantes__bio">
                                        <span class="">${nombre1}</span>
                                        <p class="verIntegrantes">${frase1}</p>
                                    </div>
                                    <div>
                                        <img src="${imagen1}" class="verIntegrantes__img--cuadro">
                                        <img src="${imagen2}" class="verIntegrantes__img--cuadro">
                                    </div> 
                                </article> <hr>
                                <article>
                                    <div class="verIntegrantes__imagen">
                                    <img src="${fotoPerfil2}" class="verIntegrantes__img">
                                    </div>
                                    <div class="verIntegrantes__bio">
                                        <span class="">${nombre2}</span>
                                        <p class="verIntegrantes">${frase2}</p>
                                    </div>
                                    <div>
                                        <img src="${imagen3}" class="verIntegrantes__img--cuadro">
                                        <img src="${imagen4}" class="verIntegrantes__img--cuadro">
                                    </div> 
                                </article> <hr>
                                <article>
                                    <div class="verIntegrantes__imagen">
                                    <img src="${fotoPerfil3}" class="verIntegrantes__img">
                                    </div>
                                    <div class="verIntegrantes__bio">
                                        <span class="">${nombre3}</span>
                                        <p class="verIntegrantes">${frase3}</p>
                                    </div>
                                    <div>
                                        <img src="${imagen5}" class="verIntegrantes__img--cuadro">
                                        <img src="${imagen6}" class="verIntegrantes__img--cuadro">
                                    </div> 
                                </article> <hr>
                                <article>
                                    <div class="verIntegrantes__imagen">
                                    <img src="${fotoPerfil4}" class="verIntegrantes__img">
                                    </div>
                                    <div class="verIntegrantes__bio">
                                        <span class="">${nombre4}</span>
                                        <p class="verIntegrantes">${frase4}</p>
                                    </div>
                                    <div>
                                        <img src="${imagen7}" class="verIntegrantes__img--cuadro">
                                        <img src="${imagen8}" class="verIntegrantes__img--cuadro">
                                    </div> 
                                </article> <hr>
                                <article>
                                    <div class="verIntegrantes__imagen">
                                    <img src="${fotoPerfil5}" class="verIntegrantes__img">
                                    </div>
                                    <div class="verIntegrantes__bio">
                                        <span class="">${nombre5}</span>
                                        <p class="verIntegrantes">${frase5}</p>
                                    </div>
                                    <div>
                                        <img src="${imagen9}" class="verIntegrantes__img--cuadro">
                                        <img src="${imagen10}" class="verIntegrantes__img--cuadro">
                                    </div> 
                                </article> <hr>`

