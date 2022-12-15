const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input');

const addTodo = (inputValue, e) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
    `
    e.target.reset()
  }
}

formAddTodo.addEventListener('submit', e => {
  e.preventDefault()

  const inputValue = e.target.add.value.trim()
  addTodo(inputValue, e)
  // if (inputValue.length) {
  //   todosContainer.innerHTML += `
  //     <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
  //       <span>${inputValue}</span>
  //       <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
  //     </li>
  //   `
  //   e.target.reset()
  // }
})

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if (trashDataValue) {
    todo.remove()
  }
}

todosContainer.addEventListener('click', e => {
  const clickedElement = e.target
  removeTodo(clickedElement)

  // ------------------------- O código abaixo tem a função de rmover o elemento se a lixeira dele for clicada. 
  // const trashDataValue = clickedElement.dataset.trash
  // const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  // if (trashDataValue) {
  //   todo.remove()
  // }
  // --------------------------------------

  // Código abaixo alterado para uma solução que não envolva navegar pelo dom para encontrar elementos pois o código pode quebrar se a marcação mudar.

  // const removeIconClicked = Array.from(clickedElement.classList).includes('delete')

  // if (removeIconClicked){
  //   clickedElement.parentElement.remove()
  // }
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos.filter( todo => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTodos ? matchedTodos : !matchedTodos
  })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach(toDo => {
    toDo.classList.remove(classToRemove) 
    toDo.classList.add(classToAdd)
  })
}

const hideTodos = (inputValue, todos) => {
  const todosToHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (inputValue, todos) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todosToShow, 'd-flex', 'hidden')
  //   .forEach(toDo => {
  //     toDo.classList.remove('hidden') 
  //     toDo.classList.add('d-flex')
  // })
}

inputSearchTodo.addEventListener('input', e => {
  const inputValue = e.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  hideTodos(inputValue, todos)

  // todos
  //   .filter(toDo => !toDo.textContent.toLowerCase().includes(inputValue))
  //   .forEach(toDo => {
  //     toDo.classList.remove('d-flex') 
  //     toDo.classList.add('hidden')
  //   })

  showTodos(inputValue, todos)

// todos
//   .filter(toDo => toDo.textContent.toLowerCase().includes(inputValue))
//   .forEach(toDo => {
//     toDo.classList.remove('hidden') 
//     toDo.classList.add('d-flex')
//   })
})