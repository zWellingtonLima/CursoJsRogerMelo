const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const sucessfullRequest = request.readyState === 4 && request.status === 200

    if (sucessfullRequest) {
      return callback(null, request.responseText)
    }

    if (request.readyState === 4) {
      return callback('Não foi possível obter os dados da requisição.', null)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos((error, data) => {
  console.log('Callback Executado')

  if (error) {
    return console.log(error)
  }

  console.log(data)
})