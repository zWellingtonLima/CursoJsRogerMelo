const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const addInput = document.querySelector('[data-add="add"]')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  if (inputValue.length){
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`
  }
})


// const addTodoValue = () => {
//   const li = document.createElement('li')
//   todosContainer.appendChild(li)
//   li.innerHTML = `<span>${addInput.value}</span>`
//   li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

//   return li
// }

// formAddTodo.addEventListener('submit', event => {
//   event.preventDefault()

//   const li = addTodoValue()

//   const i = document.createElement('i');
//   li.appendChild(i)

//   i.classList.add('far', 'fa-trash-alt', 'delete')

  
//   addInput.value = ''
// })