/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ['Caio', 'André', 'Dário']
const namesCopy = names.map(name => name).sort()
console.log(namesCopy, names)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]
const charactersCopy = characters.map(char => ({id: char.id, name: char.name})) // Esses parênteses envolvendo a criação do objeto são usados para que a abertura de chaves do objeto não seja confundido por abertura do bloco da função pela arrow da function. A expressão que tem maior precedência em JS é o que estiver dentro de parênteses, logo, o objeto vai ser criado primeiro e depois a arrow function atua retornando o objeto criado.

charactersCopy.sort((item1, item2) => item1.id - item2.id)

console.log(characters, charactersCopy) // Embora o map tenha gerado um novo array, como os itens do array são objetos (que são tipos de referência), os objetos do novo array não são uma cópia dos originais, eles apontam para o mesmo local. Se eu quiser fazer uma cópia é preciso eu retornar um novo objeto no map.
/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]
const numbersCopy = numbers.map(item => item).sort((item1, item2) => item1 - item2)

console.log(numbers, numbersCopy)
/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/
// Usando o método find - ele retorna o primeiro item do array que corresponder à função de teste que passarmos. Se o find não encontrar um valor truthy ele retorna undefined.
const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]
console.log(randomNumbers.find(item => item > 50))

/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']
const peopleCopy = people.map(item => item).reverse()

console.log(peopleCopy)
/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']
const cookedIngredients = ingredients.reduce((acc, item, index) => {
  const correctGenderLetter = item[item.length - 1] === 'a' ? 'cozida' : 'cozido' 
  // Também posso fazer usando a ReGex /a$/.test(item)
  
  if (index === ingredients.length -1) {
    return acc + `${item} ${correctGenderLetter}.`
  }

  return acc + `${item} ${correctGenderLetter}, `
}, '')

console.log(cookedIngredients)
/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const onlyDisneyViwers = topBrazilMovies.reduce((acc, item) => {
  if (item.distributedBy === 'Disney') {
    acc += item.peopleAmount
  }

  return acc
}, 0)

console.log(onlyDisneyViwers + ' milhões de pessoas assistiram aos filmes da Disney.')

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const petsWithHumanAge = pets
  .filter(({type}) => type === 'Dog')
  .map(({name, age, type}) => ({name: name, HumanAge: age * 7, type: type
}))

console.log(petsWithHumanAge)
/*
  09
  
  - Considerando o array topBrazilMovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/
const ul = document.querySelector('.list-group');
const li = document.createElement('li')

const moviesList = topBrazilMovies.map(({title}) => `<li>${title}</li>`).join('')
ul.innerHTML = moviesList
console.log(moviesList)

const movieNames = topBrazilMovies.reduce((acc, movie) => acc + `<li>${movie.title}</li>`, '')

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/
