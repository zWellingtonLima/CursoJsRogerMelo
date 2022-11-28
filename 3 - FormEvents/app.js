const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  const input = event.target.username
  const regexTest = /^[a-zA-z]{6,12}$/ 
  const allowedValue = document.querySelector('.feedback');
  const button = document.querySelector('button');
  const p = document.createElement('p')

    if (regexTest.test(input.value)) {
      allowedValue.classList.add('allowed')
      usernameInput.value = ''
      usernameInput.focus()

      button.appendChild(p)
      p.innerText = 'Nome de usuário cadastrado com sucesso.'
      return
    }
  
    button.appendChild(p)
    p.innerText = 'Nome de usuário não aceito. Tente novamente.'  
})

// const username = 'roger';
// const reGex = /^[a-z]{6}$/