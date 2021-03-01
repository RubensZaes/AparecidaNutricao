let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = obtemPacienteDoFormulario(form)

    let pacienteTr = montaTr(paciente)

    let erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return
    }

    if(!validaPaciente(paciente)){
        console.log('Paciente Inválido!');
        return
    }

    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)

    form.reset()
    document.querySelector('#mensagens-erro').innerHTML = ''

})

function exibeMensagensDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erro){
        let li = document.createElement('li')
        li.innerText = erro
        ul.appendChild(li)
    })
}

function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr    
}

function montaTd(dado, classe) {
    let td = document.createElement('td')
    td.innerText = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    let erros = []

    if(paciente.nome.length == 0)
        erros.push('O campo nome não pode está vazio.')

    if(!validaPeso(paciente.peso))
        erros.push('Peso é Inválido!')    

    if(!validaAltura(paciente.altura))
        erros.push('Altura é inválida!')
        
    if(paciente.gordura.length == 0)
        erros.push('O campo gordura não pode está vazio.')

    return erros
}
