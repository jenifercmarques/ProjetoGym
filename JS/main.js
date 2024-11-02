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

getNow.addEventListener('click', () => {
    cadastro.classList.add('active')
})

setSend.addEventListener('click', () => {
    cadastro.classList.remove('active')
    send.classList.add('active')
})

back.addEventListener("click", () => {
    send.classList.remove('active')
})


const animationElements = () => {
    gsap.from(".explore", 1.5, { opacity: 0, y: 150, duration: .1 });
    gsap.from('.class', 1.8, { opacity: 0, x: -100, delay: .1 })
    gsap.from('.join-us', 1.5, { opacity: 0, y: 150, delay: .1 })
    gsap.from('.plans', 1.8, { opacity: 0, x: -100, delay: .1 })
    window.removeEventListener("scroll", animationElements)
}

window.addEventListener("scroll", animationElements)

document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".home", { opacity: 0, y: 150, duration: 1.5 });
});

