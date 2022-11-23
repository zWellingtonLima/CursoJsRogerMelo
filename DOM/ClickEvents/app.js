const button = document.querySelector('button');
const ul = document.querySelector('ul')

button.addEventListener('click', ()=> {
  // ul.innerHTML += '<li>Novo item</li>' Essa é uma forma de criar um item a mais nessa ul.
  const li = document.createElement('li')
  li.innerText = 'Novo item'
  ul.append(li) // Um problema que se dá aqui é que esses elementos criados não possuem um EventListener e por isso não são removidos quando clicados.
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target
    
    clickedElement.remove() 
  })
})

