const form = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result');

const correctAnswers = ['B','B','B','B']

let score = 0

const getUserAnswers = () => {
  const userAnswers = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value
    ]
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
  finalResult.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalResult.querySelector('span').textContent = `${counter}%`
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
  // finalResult.classList.remove('d-none')

  showFinalScore()

  //Animação da pontuação final.
  // let counter = 0
  // const timer = setInterval(() => {
  //   if (counter === score) {
  //     clearInterval(timer)
  //   }

  //   finalResult.querySelector('span').textContent = `${counter}%`
  //   counter++
  // }, 15)

  animateFinalScore()

})

console.log(window)