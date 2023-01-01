const getTodos = () => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const sucessfullRequest = request.readyState === 4 && request.status === 200

    if (sucessfullRequest) {
      return console.log(request.responseText)
    }

    if (request.readyState === 4) {
      return console.log('Não foi possível obter os dados da requisição.')
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos()