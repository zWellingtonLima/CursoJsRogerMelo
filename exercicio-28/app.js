/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/
const request = new XMLHttpRequest()
const url = `https://pokeapi.co/api/v2/pokemon/pikachu`
request.open('GET', url)
// request.send()

request.addEventListener('readystatechange', () => {
  const sucessfullRequest = request.readyState === 4 && request.status === 200

  if (sucessfullRequest) {
    return console.log(request.responseText)
  }

  if (request.readyState === 4) {
    console.log('Não foi possível obter os dados do pokemon.')
  } // Eu posso remover esse log do if mas a cada vez que o primeiro if transicionar entre os estados 1,2 e 3 esse console vai ler lido e executado.
})


/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const myInfo = {
  name: 'Wellington',
  surname: 'Lima',
  gender: 'male',
  age: 25,
  height: 1.75,
  weight: 65,
  isWalking: false,
  distanceWalked: 0
}

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
myInfo.addAge = () => {
  myInfo.age++
}

for(let i = 0; i < 5; i++) {
  // myInfo.addAge()
}

// console.log(myInfo.age)
/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
myInfo.incrementDistance = distance => {
  if (distance) {
    myInfo.distanceWalked += distance
    myInfo.isWalking = true
  }
}

const metersWalked = [4, 11, 8, 70]

metersWalked.forEach(meter => myInfo.incrementDistance(meter))

// console.log(myInfo.distanceWalked, myInfo.isWalking)
/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/
const getCorrectValue = (value, test, trufhyValue, falsyValue) => 
  value === test ? trufhyValue : falsyValue 

myInfo.whoIAm = () => {
  const { name, surname, age, gender, weight, height, distanceWalked } = myInfo

  const correctGender = getCorrectValue(gender, 'male','o', 'a')
  const agePluralOrSingular = getCorrectValue(age, 1, 'ano','anos')
  const walkedMetersPluralOrSingular = getCorrectValue(distanceWalked, 1 ,'metro','metros')
  const heightPluralOrSingular = getCorrectValue(height, 1 ,'metro','metros')
  
  return `Oi. Eu sou ${correctGender} ${name} ${surname}, tenho ${age} ${agePluralOrSingular}, ${height} ${heightPluralOrSingular} de altura, peso ${weight} quilos e, só hoje, eu já caminhei ${distanceWalked} ${walkedMetersPluralOrSingular}.`
}

// console.log(myInfo.whoIAm())

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/
const verifyTruthness = value => {
  const falsyValues = ['', 0, null, undefined, false, NaN]
  
  if (falsyValues.includes(value)) {
    return false
  }

  return true 
}

// console.log(verifyTruthness()) // Valores trufhy são quaisquer outros que não sejam falsy (undefined, NaN, 0, '', null, false)

// Outra forma de fazer é:
const isTrufhy = value => Boolean(value)

const falsyValues = ['', 0, null, undefined, false, NaN]
const trufhyValues = [1, [], {}, 'Oi', true, '0', -1, 'false']

const logTrufhyValue = falsyValues => console.log(isTrufhy(falsyValues))
const logFalsyValue = trufhyValues => console.log(isTrufhy(trufhyValues))

falsyValues.forEach(logFalsyValue)
trufhyValues.forEach(logTrufhyValue)

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBookInfo = bookName  => {
  const booksNames = {
     'A volta dos que não foram': {
        totalPages: 24,
        author: 'José da Silva',
        publisher: 'TrucoGongs'
     },
     'Guabirados em Qrekhum': {
        totalPages: 48,
        author: 'Da Silva',
        publisher: 'HerbertRicher'
     },
     'Jkafuy Lopan': {
        totalPages: 62,
        author: 'Silva José',
        publisher: 'Pingolim Dourado'
     }
  }
  
  // if (bookName !== booksNames[bookName]) {
  //   return booksNames
  // } Eu poderia retornar um if caso o nome do livro não desse match com os que o objeto booksNames possui ou...
  
  // return booksNames[bookName] ? booksNames[bookName] : booksNames
  
  // Como undefined é um valor falsy, o ternário checa isso e caso seja, retorna todo o objeto (que é um valor Trufhy)
  // Também posso fazer essa verificação do ternário apenas usando o return bookName invés de booksNames[bookName] pois se nenhum valor for passado por parâmetro a função retornaria undefined.

  // Uso de curto circuito.
  return booksNames[bookName] || booksNames
}

console.log(getBookInfo('A volta dos que não foram'))