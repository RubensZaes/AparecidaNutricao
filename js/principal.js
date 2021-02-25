let titulo = document.querySelector('.titulo')
titulo.innerText = `Aparecida Nutricionista`

let pacientes = document.querySelectorAll('.paciente')

for (let index = 0; index < pacientes.length; index++) {
    let paciente = pacientes[index]

    let tdPeso = paciente.querySelector('.info-peso')
    let peso = tdPeso.textContent

    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent

    let tdImc = paciente.querySelector('.info-imc')


    let pesoEhValido = true
    let alturaEhValida = true

    if (peso <= 0 || peso >= 800) {
        pesoEhValido = false
        tdImc.textContent = 'Peso Inválido!'
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false
        tdImc.innerText = 'Altura Inválida!'
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = peso / (Math.pow(altura, 2))
        tdImc.textContent = imc.toFixed(2)
    } else {
        paciente.classList.add('paciente-invalido')
        //paciente.style.background = 'lightcoral'
    } 
}


