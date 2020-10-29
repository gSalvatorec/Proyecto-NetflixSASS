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

    //Inyectar dinamicamente el div con error
    if (clase === 'no-valido') {
        //construimos mensaje de error
    } else {
        // limpiamos mensaje de error
    }
}


//Funciones