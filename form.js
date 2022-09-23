const formulario = document.getElementById("formulario");
let article = document.createElement("article");
article.innerHTML = `<form class="form" action="https://formspree.io/f/xyyvwkgr" method="POST">
                    <div class="form__contenedor">
                        <h2 class="form__contenedor">Contáctanos</h2>
                        <label class="form__imput form__imput--label ">Nombre Completo*</label>
                        <input name="Nombre" required type="text" class="form__imput " id="nombre" placeholder="Juan Garcia">
                        <label for="Email" class="form__imput form__imput--label ">Correo electronico*</label>
                        <input name="Email" required type="email" class=" form__imput " id="email" placeholder="nombre@ejemplo.com">
                        <label for="Mensaje" class="form__imput form__imput--label">Mensaje</label>
                        <textarea name="Mensaje" class=" form__imput form__imput--mensaje " id="Mensaje:"></textarea>
                        <button type="submit" class="form__imput form__btn">Enviar</button>
                    </div>
                    </form>`;              
formulario.appendChild(article);




const $form = document.getElementById('form');
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
