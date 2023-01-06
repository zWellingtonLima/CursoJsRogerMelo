const url = 'https://jsonplaceholder.typicode.com/todos'

const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const sucessfullRequest = request.readyState === 4 && request.status === 200

    if (sucessfullRequest) {
      const data = JSON.parse(request.responseText)
      return callback(null, data)
    }

    if (request.readyState === 4) {
      return callback('Não foi possível obter os dados da requisição.', null)
    }
  })

  request.open('GET', url)
  request.send()
}


// getTodos(url, (error, data) => {
//   console.log(data)
//   getTodos(url, (error, data) => {
//     console.log(data)
//     getTodos(url, (error, data) => {
//       console.log(data)
//     })
//   })
// }) Pyramid Hell - legibilidade ruim e manutenção complicada.