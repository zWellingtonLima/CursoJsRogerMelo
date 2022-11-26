/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)
const h2 = document.querySelector('h2')
const circleDiv = document.querySelector('.egg')

// elementsInsideDiv.forEach(element => {
//   element.addEventListener('click', (event) => {
//     event.stopPropagation() // Basta usar o método stopPropagation do objeto event.

//       // console.log('Clicou no filho da div.')
//     console.log(`Clicou no <${event.target.tagName.toLowerCase()}>`)
//     h2.innerText = `Clicou no <${event.target.tagName.toLowerCase()}>`
//   })
// }) // Não é necessário adicionar um listener para cada elemento da div para descobrir qual elemento foi clicado. É possível fazer isso na função abaixo.

const showClick = ( {target: { tagName }} ) => { // Aprofundamento de destructuring possibilita diminuir o encadeamento de propriedades (propriedades aninhadas, porém, caso eu precisar usar o valor da propriedade do nível anterior, no caso o target, o log dará um erro dizendo que target is not defined. Outra desvantagem é a de deixar o código um pouco menos legível.) Eu prefiro fazer o destructuring em apenas um nível.

  const clickedElementTagName = tagName.toLowerCase

  if (clickedElementTagName === 'div') {
    h2.textContent = 'Clicou na div.'
    return
  }

  h2.textContent = `Clicou no <${clickedElementTagName}>, filho da <div>.`

} // Dentro da função eu checo se o elemento clicado é um filho da div ou a própria div.

div.addEventListener('click', showClick)

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/


/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/
const logCopyMessage = () => console.log('h2 copiado!')

h2.addEventListener('copy', logCopyMessage)
/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

const showCoordinatesXAndYInsideEgg = ({ offsetX, offsetY}) => {
  circleDiv.innerText = `Eixo X: ${offsetX} | Eixo Y: ${offsetY}`
}

circleDiv.addEventListener('mousemove', showCoordinatesXAndYInsideEgg)

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/
const button = document.querySelector('button')

const changeEggColor = () => circleDiv.style.background = 'lightgoldenrodyellow'

button.addEventListener('click', changeEggColor)

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
]
const hasADeveloper = people.some(({ profession }) => profession === 'Front-end developer')

if (hasADeveloper) {
  console.log('O array contém no mínimo um desenvolvedor.')
}