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


    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    if (!pesoEhValido) {
        pesoEhValido = false
        tdImc.textContent = 'Peso Inválido!'
        //paciente.classList.add('paciente-invalido')
    }

    if (!alturaEhValida) {
        alturaEhValida = false
        tdImc.innerText = 'Altura Inválida!'
        //paciente.classList.add('paciente-invalido')
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    } else {
        paciente.classList.add('paciente-invalido')
    } 
}

function validaPeso(peso){
    if (peso > 0 && peso < 800){
        return true
    } else {
        return false
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3){
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (Math.pow(altura, 2))
    return imc.toFixed(2)
}


