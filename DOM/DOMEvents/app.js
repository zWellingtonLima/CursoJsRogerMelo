const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
  console.log('Text copiado!');
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', (event) => {
  box.innerText = `X ${event.offsetX}
  Y ${event.offsetY}`
})

document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY)
})