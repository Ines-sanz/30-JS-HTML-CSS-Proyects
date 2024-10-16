const search = document.querySelector('.search')
const button = document.querySelector('.myButton')
const input = document.querySelector('.myInput')

button.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})