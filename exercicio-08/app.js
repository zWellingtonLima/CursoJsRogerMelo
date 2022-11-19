/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function sum(num1 = 2, num2 = 1) {
  return num1 * num2
}

console.log(sum())
/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const division = function(num1 = 3, num2 = 3){
  return num1 / num2
}

console.log(division())
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

// const showParamMessage = function(message = 'Mensagem padrão.'){
//   let loopCounter = 0

//   for(let i = 0; i <= 6; i++){
//     loopCounter++
//     console.log(`Essa é a ${loopCounter}ª vez que essa string é exibida.`)
//   }

//   return console.log(message)
// }
// console.log(showParamMessage())

const log = function(value){ // A questão pede que a função apenas exiba no console o valor recebido no parâmetro.
  console.log(value)
}

for (let i = 0; i < 7; i++) {
  let counter = i + 1

  log(`Está é a ${counter}ª vez que esta string é exibida.`)
}

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;

  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
// const millennialUpperWords = []

// const toUpperCaseStrings = function() {
//   for(let i = 0; i < millennialWords.length; i++){
//     millennialUpperWords.push(millennialWords[i].toUpperCase())
//   }
// }
// // toUpperCaseStrings()

// console.log(millennialUpperWords)
// Outra forma de fazer é:

const transformToUpperCase = function(array = []){
  let newArray = []

  for (let i = 0; i < array.length; i++){ 
    // Especificando o parâmetro invés de 'MillenialWorlds' torna mais geral e possível usar essa função com qualquer outro array que eu queira deixar em maiúsculo.
    const wordInUpperCase = array[i].toUpperCase()
    newArray.push(wordInUpperCase)
  }

  return newArray
}

// log(transformToUpperCase(millennialWords))
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui${} números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

//Aqui segue a mesma lógica  da questão anterior. Eu posso usar um parâmetro para generalizar o que eu vou receber invés de linkar especificamente o nome de alguma const, variável etc. Outra questão é a de deixar o loop dentro da função. Usando a forma da correção apenas o essencial para a função será escrita dentro dela.

const positiveNumbers = function() {
  let positiveNum = 0
  let negativeNum = 0

  for(let i = 0; i < randomNumbers.length; i++){
    if (randomNumbers[i] > 0){
      positiveNum++
    } else {
      negativeNum++
    }
  }

  return `O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNum} positivos e ${negativeNum} negativos.`
}
console.log(positiveNumbers())


// Logo, refatorando, fica:
let positiveNumbersCounter = 0
let negativeNumbersCounter = 0

const isPositive = function(number = 0) {
  return number > 0 // Ou >= 1 Dessa forma a função fica com apenas a responsabilidade de retornar o número positivo e o loop fica do lado de fora da função.
}

for (let i = 0 ; i < randomNumbers.length; i++){
  const isPositiveNumber = isPositive(randomNumbers[i])
  
  if (isPositiveNumber){
    positiveNumbersCounter++
  } else {
    negativeNumbersCounter++
  }
}

console.log(`O array "ramdomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumbersCounter} positivos e ${negativeNumbersCounter} negativos.`)

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/


const getOddNumbers = function([...nums]) { // como parâmetro também posso receber "numbers = []", o resto é igual.

  const oddNumbers = []

  for(let i = 0; i < nums.length; i++){
    const number = nums[i]
    const isOddNumber = number % 2 !== 0 

    if (isOddNumber) {
      oddNumbers.push(number)
    }
  }
  return oddNumbers
}

const oddNumberss = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

console.log(oddNumberss)

/*
  07
  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let sentence = ''
for (let i = 0; i < functions.length; i++){
  const string = `${functions[i]()} `

  sentence += string // O detalhe dessa questão é invocar cada função durante as iterações para que as strings sejam 'libertadas'.
}

console.log(sentence)