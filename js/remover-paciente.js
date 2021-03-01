let tabela = document.querySelector('table')
/*
tabela.addEventListener('dblclick', function(event){
    let alvoEvento = event.target
    let paiDoAlvo = alvoEvento.parentNode
    paiDoAlvo.remove()
})
*/
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
    
})