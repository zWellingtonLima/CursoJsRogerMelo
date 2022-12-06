const form = document.querySelector('.quiz-form');
const finalScoreContainer = document.querySelector('.final-score-container') // Essa const 'finalResult' armazena uma div então, semanticamente, deve ser renomeada. A classe também deve ser renomeada (result) pois isso não indica o que ela faz.  

const correctAnswers = ['B','B','B','B']

let score = 0

const getUserAnswers = () => {
  
  let userAnswers = []

  correctAnswers.forEach((correctAnswer, index) => {
    userAnswers.push(form[`inputQuestion${index + 1}`].value)
  })

  // for (let i = 0; i < correctAnswers.length; i++) {
  //   form[`inputQuestion${i + 1}`].value
  // }

  // const userAnswers = [ //O problema dessa const é que ela pega os dados manualmente. No entanto, se fossem adicionadas mais 10 perguntas elas teriam de ser adicionadas manualmente aqui. 
    //   form.inputQuestion1.value,
    //   form.inputQuestion2.value,
    //   form.inputQuestion3.value,
    //   form.inputQuestion4.value
    // ]
    return userAnswers
}

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer,index) => {
    if (userAnswer === correctAnswers[index]){
      score += 25
    }
  })
}

const showFinalScore = () => {
  scrollTo(0, 0)
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter}%`
    counter++
  }, 15)
}

// Função muito extensa. Refatorar para quebrar em funções isoladas.
form.addEventListener('submit', event => {
  event.preventDefault()

  //Obtém as respostas do usuário.
  // const userAnswers = [
  //   form.inputQuestion1.value,
  //   form.inputQuestion2.value,
  //   form.inputQuestion3.value,
  //   form.inputQuestion4.value
  // ]
  const userAnswers = getUserAnswers()

  // Calcular a pontuação do usuário.
  // userAnswers.forEach((userAnswer,index) => {
  //   if (userAnswer === correctAnswers[index]){
  //     score += 25
  //   }
  // })

  calculateUserScore(userAnswers)

  // Exibir a pontuação final.
  // scrollTo(0, 0)
  // finalScoreContainer.classList.remove('d-none')

  showFinalScore()

  //Animação da pontuação final.
  // let counter = 0
  // const timer = setInterval(() => {
  //   if (counter === score) {
  //     clearInterval(timer)
  //   }

  //   finalScoreContainer.querySelector('span').textContent = `${counter}%`
  //   counter++
  // }, 15)

  animateFinalScore()

})

console.log(window)