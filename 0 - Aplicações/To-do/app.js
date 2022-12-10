const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const addInput = document.querySelector('[data-add="add"]')

const addTodoValue = () => {
  const li = document.createElement('li')
  todosContainer.appendChild(li)
  li.innerHTML = `<span>${addInput.value}</span>`
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

  return li
}

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const li = addTodoValue()

  const i = document.createElement('i');
  li.appendChild(i)

  i.classList.add('far', 'fa-trash-alt', 'delete')

  addInput.value = ''
})