const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

})

const username = 'roger';
const reGex = /^[a-z]{6}$/