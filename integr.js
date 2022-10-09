// Clases
// Integrantes
class Integrante {
    constructor (nombre, frase, imagen1, imagen2, imagen3){
        this.nombre = nombre;
        this.frese = frase;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
    }
}
const integrante1 = new Integrante ("Patricia A. Bossicovich", 
                                    "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant",
                                    src = "../recursos/historia.jpg", src = "../recursos/historia.jpg", src = "../recursos/historia.jpg");
const integrante2 = new Integrante ("Bibiana Bossicovich", 
                                    "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
                                    src = "../recursos/historia.jpg", src = "../recursos/historia.jpg", src = "../recursos/historia.jpg");
const integrante3 = new Integrante ("Gabriela Ulivieri",
                                    "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
                                    src = "../recursos/historia.jpg", src = "../recursos/historia.jpg", src = "../recursos/historia.jpg");
const integrante4 = new Integrante ("Karen Liljesthron", 
                                    "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
                                    src = "../recursos/historia.jpg", src = "../recursos/historia.jpg", src = "../recursos/historia.jpg");
const integrante5 = new Integrante ("Gabriela De Dominicis", 
                                    "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
                                    src = "../recursos/historia.jpg", src = "../recursos/historia.jpg", src = "../recursos/historia.jpg");
const integrante6 = new Integrante (" Ingrid Malanot",
                                    "'La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.' Immanuel Kant", 
                                    src = "../recursos/historia.jpg", src = "../recursos/historia.jpg",src = "../recursos/historia.jpg");

// Arrays
// Integrantes
const integrantes = [];

integrantes.push(integrante1);
integrantes.push(integrante2);
integrantes.push(integrante3);
integrantes.push(integrante4); 
integrantes.push(integrante5);
integrantes.push(integrante6);
console.log(integrantes)

// Armado de pagina
const verIntegrantes = document.getElementById("verIntegrantes");

integrantes.forEach( Integrantes=> {
    let article = document.createElement("article");
    article.innerHTML = `<div class="verIntegrantes__imagen">
                            <img src="${Integrantes.imagen1}" class="verIntegrantes__img">
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

