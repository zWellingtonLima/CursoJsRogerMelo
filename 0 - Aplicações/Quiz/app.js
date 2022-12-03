const form = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result');

const correctAnswers = ['B','B','B','B']

// Função muito extensa. Refatorar para quebrar em funções isoladas.
form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  //Obtém as respostas do usuário.
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  // Calcular a pontuação do usuário.
  userAnswers.forEach((userAnswer,index) => {
    if (userAnswer === correctAnswers[index]){
      score += 25
    }
  })

  // Exibir a pontuação final.
  scrollTo(0, 0)
  finalResult.classList.remove('d-none')

  //Animação da pontuação final.
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalResult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 15)

})

console.log(window)