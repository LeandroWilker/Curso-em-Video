var area = document.querySelector('#area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function entrar() {
    area.innerHTML = 'entrou!'
    area.style.background = 'blue'
}

function clicar(){
    area.innerHTML = 'clicou!'
    area.style.background = 'red'
}

function sair() {
    area.innerHTML = 'saiu!'
    area.style.background = 'green'
}

