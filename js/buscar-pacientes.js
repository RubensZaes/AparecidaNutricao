let botaoAddPacientes = document.querySelector('#buscar-pacientes')

botaoAddPacientes.addEventListener('click', function(){
    console.log('Buscando dados...');
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    xhr.addEventListener('load', function(){
        let resposta = xhr.responseText
        let pacientes = JSON.parse(resposta)        

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
        })
    })
    xhr.send()
})