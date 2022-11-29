/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const inputUsername = document.querySelector('#username')
const form = document.querySelector('form')
const button = document.querySelector('button');

const paragraphUsernameFeedback = document.createElement('p')
const paragraphSubmitFeedback = document.createElement('p')
// Dois parágrafos foram criados pois um anulava o outro quando um nome de usuário incorreto era inserido.
const usernameRegex = /^[a-zA-Z]{6,}$/

const invalidSubmitInfo = {
  paragraph: paragraphSubmitFeedback, 
  text: 'Por favor, insira um username válido.', 
  className: 'submit-help-feedback', 
  elementPosition: button
}

const validSubmitInfo = {
  paragraph: paragraphSubmitFeedback, 
  text: 'Dados enviados.', 
  className: 'submit-success-feedback', 
  elementPosition: button
}

const invalidUsernameInfo = {
  paragraph: paragraphUsernameFeedback,
  text: "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas",
  className: 'username-help-feedback',
  elementPosition: inputUsername
}

const validUsernameInfo = {
  paragraph: paragraphUsernameFeedback,
  text: "Username válido.",
  className: 'username-success-feedback',
  elementPosition: inputUsername // Antes era event.target mas como esse valor só é recebido dentro do listener, aqui daria erro pois o event não está definido nesse escopo e acessar uma propriedade de algo undefined gera erro.
}

// No entanto, refatorando assim ocorre outro problema: o comprimento da invocação da função fica muito grande. É possível resolver isso indentando o código ou, como os valores estão relacionados entre si, é possível agrupá-los em um objeto e fazer a função receber o objeto invés dos parâmetros soltos.

//Depois da criação dos dois objetos contendo as informações do usuário (válidas ou não) a função precisa receber um objeto. Evitando a sintaxe objeto.propriedade dentro da função, uma forma boa é fazendo destructuring dentro da função do objeto que é recebido como parâmetro.
const insertParagraphIntoDom = (paragraphInfo) => {
  const {paragraph, text, className, elementPosition} = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  elementPosition.insertAdjacentElement('afterend', paragraph)
}

paragraphSubmitFeedback.setAttribute('data-feedback', 'submit-feedback')

const removeSubmitParagraph = () => {
  const paragraphSubmitFeedbackExists = document.querySelector('[data-feedback="submit-feedback"]')

  if (paragraphSubmitFeedbackExists) {
    paragraphSubmitFeedback.remove()
  }
}

// o event foi trocado de keyup para input pois o segundo só executa a função quando o valor do input mudar pois ao pressionar o enter anteriormente o segundo parágrafo surgia e sumia rapidamente.  
inputUsername.addEventListener('input', event => {
  const inputValue = event.target.value

  removeSubmitParagraph()
  // p.setAttribute('data-feedback','username-feedback')

  // const feedbackParagraph = document.querySelector('[data-feedback="username-feedback"]');
  
  // if (feedbackParagraph) {
  //   feedbackParagraph.remove()
  // } // Todo esse código comentado tem a função de remover os parágrafos criados adicionalmente caso o createElement('p') estivesse dentro do listener keyup. 

  if (!usernameRegex.test(inputValue)) {
    insertParagraphIntoDom(invalidUsernameInfo)
    return
  }

  insertParagraphIntoDom(validUsernameInfo)
})

// início da refatoração. Nesse listener existe muita repetição de código mudando apenas alguns valores. Existe o padrão: setar o texto de um parágrafo, a classe e inserir o parágrafo em uma posição específica na tela. 
form.addEventListener('submit', e => {
  e.preventDefault()

  const inputValue = inputUsername.value

  if (!usernameRegex.test(inputValue)) {
    insertParagraphIntoDom(invalidSubmitInfo)
    return
  }

  insertParagraphIntoDom(validSubmitInfo)

  form.username.value = ''
})
/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/
