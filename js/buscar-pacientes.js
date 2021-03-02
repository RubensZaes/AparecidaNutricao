let botaoAddPacientes = document.querySelector('#buscar-pacientes')

botaoAddPacientes.addEventListener('click', function(){
    console.log('Buscando dados...');
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){

        let erroAjax = document.querySelector('#erro-ajax')

        if(xhr.status == 200){
            erroAjax.classList.add('invisivel')
            let resposta = xhr.responseText
            let pacientes = JSON.parse(resposta)        

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            erroAjax.classList.remove('invisivel')
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    })
    xhr.send()
})