//Variables
const inputs = document.querySelectorAll('form .campo input')
console.log(inputs)


//eventos
document.addEventListener('DOMContentLoaded', () => {
    inputs.forEach(input => {
        input.addEventListener('blur', validarInput);
    });
    inputs.forEach(input => {
        input.addEventListener('input', validarInput);
    });
});

function validarInput(e) {
    // console.log(e.target.value);
    const estado = ['valido', 'no-valido'];
    let clase;
    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    // console.log(clase);
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //Inyectar dinamicamente el div con error
    if (clase === 'no-valido') {
        //Validamos que no haya campo de error
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            //construimos mensaje de error
            const errorDiv = document.createElement('vid');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //insertar el error
            console.log(e.target);
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        // limpiamos mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}


//Funciones