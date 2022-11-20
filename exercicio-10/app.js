/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

const cat = {
  name: 'Kiki',
  age: 2,
  color: 'Cinza',
  bestFriends: ['Day', 'Lima', 'Manquinho', 'Branquinho'],
  sound: function() {
    return 'Miau'
  }
}

console.log(cat)

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}"`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat.age += 2
console.log(cat.age)
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
const addCatFriends = friend => cat.bestFriends.push(friend)
addCatFriends('Agnalda')

console.log(cat.bestFriends)
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

const addAnotherColorToCat = color => cat['color'] += ` e ${color}` // Mais uma vez, se eu quisesse deixar a função mais generalista basta eu passar um parâmetro mais geral tb invés de especificar o 'cat'. 
addAnotherColorToCat('Marrom')

// Por exemplo
const addColor = (object, color) => object['color'] += ` e ${color}`

console.log(cat.color)

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
const isObject = value => typeof value === 'object'

console.log(isObject(cat))
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
const dog = {
  name: 'Jeff',
  age: 2,
  color: 'Preto',
  bestFriends: ['Day', 'Lima', 'Manquinho', 'Branquinho'],
  sound: () => 'Auau'
}

const getAgeMessage = () => `A soma das idades de ${cat.name} e ${dog.name} é ${cat.age + dog.age}.`
console.log(getAgeMessage())

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const suvCars = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35']

const isAnSUV = car => {
  const carsIncluded = suvCars.includes(car)

  if (carsIncluded) {
    return true
  }

  return false
}

// Uma alternativa que deixaria essa questão muito mais concisa mas um pouco mais difícil de ler seria 
// const isAnSuv = car => ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'].includes(car)
// Essa função já retornaria um boolean pois ela põe logo de cara o array e vê se includes o parâmetro car.

// console.log(isAnSUV('Honda Civic'))
// console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const typeOfValue = type => {
  const obj = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }

  return obj[type] // um parâmetro é uma variável local, logo, torna possível usar essa notação de colchetes para acessar algum valor dela. Quando o tipo de dado for passado na invocação da função ela vai acessar e retornar o valor específico desse objeto. 
}

console.log(typeOfValue('undefined'))
console.log(typeOfValue('null'))
console.log(typeOfValue('object'))

// Essa é uma forma alternativa de fazer a mesma coisa.
const typeValue = type => {
  return {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }[type]
}