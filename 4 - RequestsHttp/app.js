// const url = 'https://jsonplaceholder.typicode.com/todos'

// const getPokemon = url => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', () => {
//     const sucessfullRequest = request.readyState === 4 && request.status === 200

//     if (sucessfullRequest) {
//       const data = JSON.parse(request.responseText)
//       resolve(data)
//     }

//     if (request.readyState === 4) {
//       reject('Não foi possível obter os dados da requisição.')
//     }
//   })

//   request.open('GET', url)
//   request.send()
//   // Como alterações eu posso remover o uso do callback e fazer as verificações invocarem o resolve ou reject dependendo da situação.
// })

// getPokemon('https://pokeapi.co/v2/pokemon/1')
//   .then(pokemon => {
//     console.log(pokemon)
//     return getPokemon('https://pokeapi.co/v2/pokemon/4')
//   })
//   .then(charmander => {
//     console.log(charmander)
//     return getPokemon('https://pokeapi.co/v2/pokemon/7')
//   })
//   .then(squirtle => {
//     console.log(squirtle)
//   })
//   .catch(error => console.log(error))

// getTodos(url, (error, data) => {
//   console.log(data)
//   getTodos(url, (error, data) => {
//     console.log(data)
//     getTodos(url, (error, data) => {
//       console.log(data)
//     })
//   })
// }) Pyramid Hell - legibilidade ruim e manutenção complicada.

// const getData = () => {
//   return new Promisse((resolve, reject) => {
//     resolve('Dados aqui')
//     reject('Erro aqui')
//   })
// }

// getData()
//   .then(value => {console.log(value);})
//   .catch(error => {}) Exemplo básico para treinar o uso teórico de Promisses.

const getUser = async () => await 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())


const logUsers = async () => {
  const users =  await getUser()
  console.log(users)
}

logUsers()