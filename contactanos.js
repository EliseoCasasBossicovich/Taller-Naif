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

// verReseña.addEventListener("click", () =>{
//     const nuevaReseña = JSON.parse(localStorage.getItem("Opinion"));
//     let aux ="";
//     nuevaReseña.forEach(opinion => {
//         aux += `<p class="reseña__inf"> Nombre: ${opinion.nombre}</p>
//                 <p class="reseña__inf"> Reseña: ${opinion.mensaje}</p>
//                 `;
        
//     })
//     datosReseña.innerHTML = aux; 
// })
verReseña.addEventListener("click", () =>{
    if(localStorage.getItem("Opinion")){
        let nuevaReseña = JSON.parse(localStorage.getItem("Opinion"));
        let aux ="";
        nuevaReseña.forEach(opinion => {
            aux += `<p class="reseña__inf"> Nombre: ${opinion.nombre}</p>
                    <p class="reseña__inf"> Reseña: ${opinion.mensaje}</p>
                    `;
        })
        datosReseña.innerHTML = aux; 
    }
})

// const nuevaReseña = localStorage.getItem("Opinion") ? 
//     JSON.parse(localStorage.getItem("Opinion")):
//     [];