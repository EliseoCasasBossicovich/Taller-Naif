const $form = document.querySelector("form");

$form.addEventListener ("sumbit", handleSumbit);

async function handleSumbit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        header: {
            "Accept": "application/json"
        }
    })
    if (response.ok){
        this.reset(); 
        alert ("Gracias por contactarnos, te escribiremos pronto.");
    }
}
