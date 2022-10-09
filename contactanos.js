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
    Toastify( {
        text: "Opinion enviada con exito. Gracias!",
        duration: 2000,
        position: "right",
        gravity: "bottom",
        className: "toastDis",

    }).showToast();   
})
function agregarReseña(){
    const nombre = document.getElementById("sujeto").value;
    const mensaje = document.getElementById("comentario").value;
    const nuevaReseña = new Opinion(nombre, mensaje);
    arrayOpiniones.push(nuevaReseña);
    localStorage.setItem("reseñasOp", JSON.stringify(arrayOpiniones)); 
    idOpinion.reset();
}
const verReseña = document.getElementById("listaReseñas");
const datosReseña = document.getElementById("datosReseña");


verReseña.addEventListener("click", () =>{
    const nuevaReseña = localStorage.getItem("reseñasOp") ? 
    JSON.parse(localStorage.getItem("reseñasOp")):
    elementosVacios();
    let aux ="";
    nuevaReseña.forEach(nuevaReseña => {
        aux += `<div class="reseñas__listado--reseña">
                <p> Nombre: ${nuevaReseña .nombre}</p>
                <p> Reseña: ${nuevaReseña.mensaje}</p>
                </div>
                <hr>
                `;
    })
    datosReseña.innerHTML = aux; 

})

function elementosVacios(){
    Toastify( {
        text: "No hay reseñas, dejanos una!",
        duration: 2000,
        position: "right",
        gravity: "bottom",
        className: "toastDis",

    }).showToast();   
}