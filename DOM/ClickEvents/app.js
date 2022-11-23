const button = document.querySelector('button');

button.addEventListener('click', ()=> {

})

const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.style.textDecoration = 'line-through'
  })
})