const joinNow = document.querySelector('#login')
const getNow = document.querySelector('#get-started')
const cadastro = document.querySelector('#modal')
const send = document.querySelector('#send')
const setCadastro = document.querySelector('#cadastro')
const setSend = document.querySelector('#button-send')
const back = document.querySelector('#close-modal')

joinNow.addEventListener('click', () => {
    cadastro.classList.add('active')
})

getNow.addEventListener('click', () =>{
    cadastro.classList.add('active')
})

setSend.addEventListener('click', () => {
    cadastro.classList.remove('active')
    send.classList.add('active')
})

back.addEventListener("click", () => {
    send.classList.remove('active')
})