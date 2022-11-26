const button = document.querySelector('button');
const ul = document.querySelector('ul')

button.addEventListener('click', ()=> {
  // ul.innerHTML += '<li>Novo item</li>' Essa é uma forma de criar um item a mais nessa ul.
  const li = document.createElement('li')
  li.innerText = 'Novo item'
  ul.append(li) // Um problema que se dá aqui é que esses elementos criados não possuem um EventListener e por isso não são removidos quando clicados.
})

// Event delegation

ul.addEventListener('click', event => { // A função vai ser usada para descobrir qual elemento foi clicado.
  const clickedElement = event.target 

  if (clickedElement.tagName === 'LI'){
    clickedElement.remove()
  }
})

// Essa parte do código foi comentada para adicionar o Event Delegation pois a forma usada aqui trás alguns problemas.
// const lis = document.querySelectorAll('li')

// lis.forEach(li => {
//   li.addEventListener('click', event => {
//     const clickedElement = event.target
    
//     clickedElement.remove()  
//   })
// })


