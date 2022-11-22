/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const h1 = document.querySelector('h1');

// h1.innerText.toUpperCase() Dessa forma não funciona. É necessário reatribuir um valor

h1.innerText = h1.innerText.toUpperCase()
// Se eu usasse textContent seria a mesma coisa.

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/
const ul = document.querySelector('.numbers') // Tbm poderia pegar a referência da classe .numbers invés de 'ul'.
const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]

const insertNumberIntoUl = number => {
  ul.innerHTML += `<li class="number">${number}</li>`
}

numbers.forEach(insertNumberIntoUl)

/*
  03
  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/
// As <li></li> já foram adicionadas à página ao chegar aqui, logo, eu posso armazenar elas em uma variável e percorrê-las com o forEach.

const lis = document.querySelectorAll('.number')

const changeLiColor = li => {
  const isNumberEven = Number(li.textContent) % 2 === 0 
  // const isNumberOdd = Number(li.textContent) % 2 !== 0 
  // Quando o número não for par ele só pode ser ímpar, logo, mudando um pouco o código embaixo evita a necessidade dessa const.

  if(isNumberEven){
    li.style.color = 'lightblue'
    return
  }

  //Como estou dentro de uma função, adicionando um return no if acima o código abaixo só é lido quando o número for ímpar, logo, não é necessário nem um else nem um outro if.

  // if(isNumberOdd){
  li.style.color = 'pink'
    // }
}

lis.forEach(changeLiColor) // Nomear e desacoplar as funções de callback.


// Primeiro código - funcionando mas pode ser melhorado e, de fato, foi.

// numbers.forEach(number => {
//   const numberIsEven = number % 2 === 0
//   const numberIsOdd = number % 2 !== 0

//   if(numberIsEven){
//     ul.innerHTML += `<li style="color: red;">${number}</li>`
//   }

//   if(numberIsOdd){
//     ul.innerHTML += `<li style="color: orange;">${number}</li>`
//   }
//   // ul.innerHTML += `<li>${number}</li>`
// })

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const body = document.querySelector('body');
body.classList.add('body-background')

// Outra forma de selecionar o body é usando document.body.

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const anchor = document.querySelector('a')

anchor.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo')

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/
console.log(anchor.getAttribute('href'))

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(h1.style)

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

body.classList.remove('body-background')

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
anchor.classList.toggle('link')
