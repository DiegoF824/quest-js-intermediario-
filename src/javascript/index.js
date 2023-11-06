const inputs = document.querySelectorAll('.campo-formulario')
const alertas = document.querySelectorAll(".alerta")
const botaoEnviar = document.getElementById('enviar')

botaoEnviar.addEventListener('click', function () {
    inputs.forEach(function (input, index) {
        if (input.value !== '') {
            input.style.borderColor = '#00C22B';

            alertas[index].classList.remove('mostrar');
        } else {
            input.style.borderColor = '#F52E2E';

            alertas[index].classList.add('mostrar');
        }
    });
})