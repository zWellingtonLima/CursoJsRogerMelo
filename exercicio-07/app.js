/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante','pavão', 'hipopótamo']

const isNotLeonInArray = !animals.includes('leão')

if (isNotLeonInArray){
  console.log('Leão não existe no array "animals".')
} else {
  console.log('Existe um leão no array "animals".')
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/
let counter = 0
const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]

for (let i = 0; i< randomNumbers.length; i++) {
  const limit = 400
  counter += randomNumbers[i] 

  if (counter > limit) {
    console.log(`A soma ultrapassou ${limit}. Até aqui o valor atual é ${counter}.`)
    break
  }
}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
let phrase = ''

for (let i = 0; i < sentence.length; i++) {
  const word = sentence[i]

  if (word.includes('certeza')) {
    continue
  }
  phrase += `${word} `
}

console.log(phrase)

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
const strings = []
let stringCounter = 0
let arrayCounter = 0
let booleanCounter = 0

for (let i = 0; i < randomValues.length; i++) {
  const value = randomValues[i]

  const isString = typeof value === 'string'
  const isBoolean = typeof value === 'boolean'

  arrayCounter++

  if (isString){
    stringCounter++
    strings.push(value)
  }

  if (isBoolean){
    booleanCounter++
  }

  const lastItem = strings[strings.length -1];
  const first4Strings = strings.join(', ').replace(`, ${lastItem}`, ` e ${lastItem}`)

  if (stringCounter === 4) {
    console.log(`3 informações sobre o array randomValues:
    - As primeiras 4 strings são ${first4Strings};
    - Até que as primeiras 4 strings fossem iteradas, ${booleanCounter} booleans foram iterados;
    - O array foi iterado por ${arrayCounter} vezes.`)
    break
  }
  // Eu posso remover o log de dentro do if acima e o colocar abaixo do for loop pois ele apenas será lido quando o break do loop ocorrer. 
}

/*
  06

  - Descomente a constante abaixo e atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'água'
let drinkMessage = null

switch (drinkType) {
  case 'água':
    drinkMessage = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio."
    break;
  case 'refrigerante':
    drinkMessage = "Bebida não alcoólica e não fermentada fabricada industrialmente, à base de água mineral e açúcar."
    break;
  case 'suco':
    drinkMessage = "Bebida produzida do líquido extraído de frutos."
    break
  default:
    drinkMessage = "Bebida desconhecida pelo banco de dados da Cachaceiros da Piranguagem(dCaP)."
}

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const number = 2
const numberMessage = `O valor de "number" é`

switch (number) {
  case 0:
    console.log(`${numberMessage} ${number}`)
    break
  case 1:
    console.log(`${numberMessage} ${number}`)
    break
  default:
    console.log(`${numberMessage} qualquer número, exceto 0 e 1`)

}

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }
