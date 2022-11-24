/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('ul');
const ulChildren = Array.from(ul.children) //o nome da const pode ser alterado para 'lis' para tornar mais legível.

// Posso dar um nome a ação abaixo para melhorar a legibilidade do código. Logo:
// ulChildren.forEach(li => {
//   li.classList.add('video')
// })

const insertVideoClass = li => {
  li.classList.add('video') 
 }

ulChildren.forEach(insertVideoClass)

console.log(ulChildren)

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('h2');
console.log(h2.parentElement) // Body

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector('h1');
console.log(h1.nextElementSibling) // h2

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling) // h2

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

ulChildren.forEach(li => {
  li.addEventListener('click', e => {
    console.log(e.target) // Se eu quisesse adquirir o conteúdo da li basta eu encadear a propriedade innerText / textContent.
  })
})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button');
const li = document.createElement('li')

  button.addEventListener('click', () => {
    ul.appendChild(li)
    
    videos.forEach(vid => {
      li.innerText = vid.name
    })
  })

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const body = document.querySelector('body');


h1.addEventListener('click', (e) => {
  const clickedElement = e.target
  
})