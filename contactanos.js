// FORMULARIO
const $form = document.querySelector('#form');
$form.addEventListener('sumbit', handleSumbit);

async function handleSumbit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset();
        alert ("Gracias por contactarnos, te escribiremos pronto.");
    }
}

// OPINION
// reserva de datos enviados
class Opinion {
    constructor(nombre, mensaje){
        this.nombre = nombre;
        this.mensaje = mensaje;
    }
}
// Array opiniones
const arrayOpiniones = [];

const idOpinion = document.getElementById("reseña");

idOpinion.addEventListener("submit", (e) =>{
    e.preventDefault();
    agregarReseña();
})
function agregarReseña(){
    const nombre = document.getElementById("sujeto").value;
    const mensaje = document.getElementById("comentario").value;
    const nuevaReseña = new Opinion(nombre, mensaje);
    arrayOpiniones.push(nuevaReseña);
    localStorage.setItem(Opinion, JSON.stringify(arrayOpiniones)); 
    idOpinion.reset();
}
const verReseña = document.getElementById("listaReseñas");
const datosReseña = document.getElementById("datosReseña");
verReseña.addEventListener("click", () =>{
    mostrarReseñas();
})

function mostrarReseñas(){
    datosReseña.innerHTML ="";
    arrayOpiniones.forEach( opinion => {
        const div = document.createElement("div");
        div.innerHTML = `<div>
                            <p> Nombre: ${opinion.nombre}</p>
                            <p> Reseña: ${opinion.mensaje}</p>
                        </div>
                        `;
        datosReseña.appendChild(div);
    })
}
