/* 
  01

  - Insira apenas o css do bootstrap no index.html.
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

setTimeout(() => {
  // console.log("Um segundo e meio se passaram desde que a página foi carregada.")
}, 1500)

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const buttonInit = document.querySelector('.button-init-counter');
const buttonStop = document.querySelector('.button-stop-counter');
const counter = document.querySelector('.counter-container');

let timer // Também poderia atribuir a essa let um 'null'
// const timer = () => {
//   interval = setInterval(() => {
//     counter.textContent++    
//   }, 1000)
// }

// buttonInit.addEventListener('click', () => {
//   timer()
// })
// Uma forma alternativa de fazer:

const incrementedCounter = () => {
  counter.textContent++
}

const stopCounter = () => () => {
  clearInterval(timer)
}
  setInterval(() => {
    if (counter.textContent > 0) {
      counter.textContent--
    }
  }, 100)

buttonInit.addEventListener('click', () => {
  timer = setInterval(incrementedCounter, 1000)
})

buttonStop.addEventListener('click', () => {
  stopCounter
})


/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
