const button = document.querySelector('button')
const popupWrapper = document.querySelector('.popup-wrapper');
// const popupClose = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popupWrapper.style.display = 'block'
})

// popupClose.addEventListener('click', () => {
//   popupWrapper.style.display = 'none'
// }) // Fecha o popup ao clicar no 'x'

// Para corrigir o problema abaixo eu posso adicionar o event ao listener do button e descobrir qual elemento foi clicado.
popupWrapper.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
  const shouldClosePopup = classNames.some(classNames => classNameOfClickedElement)

  if (shouldClosePopup){
    popupWrapper.style.display = 'none'
  }

}) // Fecha o popup ao clicar fora da janela de popup. No entanto, essa abordagem é ineficiente porque se o usuário clicar em qualquer parte dentro do popup ele também fecha. 