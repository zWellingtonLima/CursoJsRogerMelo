/*
  01

  - Crie um objeto com um método getColor. Este método deve retornar o valor da
    propriedade 'color' dos objetos descritos abaixo;
  - Crie 2 novos objetos que representem dois carros. Na criação dos objetos, 
    faça o objeto com o método getColor ser prototype desses dois carros;
  - Após criar os carros, crie neles as propriedades 'color'. Atribua valores 
    diferentes para a propriedade color de cada carro;
  - Teste o método getColor do prototype dos carros.
*/

const carProto = {
  getColor () {
    return this.color //Esse this é usado aqui pois ele referencia o objeto no qual a invocação do método getColot for encadeada. Obs1: ele só está referenciado o novo objeto criado porque ele está dentro de uma abreviação de uma function declaration. 
  }
}

let fiatUno = Object.create(carProto)
let fusca = Object.create(carProto)

fiatUno.color = 'verde'
fusca.color = 'rosa'

// console.log(fiatUno.getColor(), fusca.getColor())

/*
  02

  - No código abaixo, a invocação da função 'getSummary' está retornando 
    "undefined foi dirigido por undefined e tem undefined no papel principal.";
  - Faça a invocação da função retornar a string com os valores esperados 
    (ao invés de undefined's);
  - Não modifique o objeto 'movie' e a declaração da função 'getSummary';
  - Após fazer o código funcionar, você pode refatorar a declaração da função, 
    se necessário.
*/

const movie = {
  title: 'Forrest Gump',
  director: 'Robert Zemeckis',
  starringRole: 'Tom Hanks'
}

function getSummary () {
  return `${this.title} foi dirigido por ${this.director} e tem ${this.starringRole} no papel principal.`
}

// console.log(getSummary.call(movie)) // Essa função está sendo invocada como uma função e não como o método de um objeto, logo, o window é o objeto referenciado por ela. O valor do this dentro da função depende de como a função é invocada. Pra fazer o this referenciar o objeto que eu quiser basta eu usar o call()

/*
  03

  - A invocação da função abaixo deve retornar este objeto:
    {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3' 
    }
  - Descomente o código e crie a função.
*/

const createObj = (acc, [key, value]) => {
  acc[key] = value
  return acc
}

const arrayToObj = arr => arr.reduce(createObj, {})

// console.log(
//   arrayToObj([
//     ['prop1', 'value1'], 
//     ['prop2', 'value2'],
//     ['prop3', 'value3']
//   ])
// )


/*
  04

  - Refatore as classes abaixo para factory functions.
*/

const formatTimeUnits = units => units
  .map(unit => unit < 10 ? `0${unit}` : unit)

const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

const getFormattedTime = template => {
  const [hours, minutes, seconds] = getTime()
  const formattedTime = formatTimeUnits([hours, minutes, seconds])

  return template
    .split(':')
    .map((_, index) => formattedTime[index])
    .join(':')
}

const makeClock = ({ template }) => ({
  template,
  render () {
    const formattedTime = getFormattedTime(this.template) // O this vai referenciar o objeto ao qual o método está encadeado.
    console.log(formattedTime)
  },
  start () {
    const oneSecond = 1000

    this.render()
    this.timer = setInterval(() => this.render(), oneSecond)
  },
  stop () {
    clearInterval(this.timer)
  }
})

const makeExtendedClock = ({ template, precision = 1000}) => ({
  precision,
  ...makeClock({ template }),
  start () {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
})

const clock = makeExtendedClock({ template: 'h:m:s', precision: 1000 })
// clock.start()
// clock.stop()

/*
  05

  - No index.html, descomente: 
    - A div com a classe "container" que contém uma tabela e um botão;
    - A tag link (no head) que carrega os estilos CSS do Bootstrap.
  - Seu desafio neste exercício é exportar as células da tabela HTML para um 
    arquivo CSV que pode ser aberto no Excel ou Google Planilhas;
  
  Passo a passo para alcançar este resultado
    - Quando um click no botão "Exportar para CSV" acontecer, faça o seguinte:
      - Gere um array com todas as referências dos elementos <tr> da tabela;
      - À partir do array de referências das <tr>, gere uma string CSV:
        - Uma string CSV contém, em cada linha, separados por vírgula, o 
          conteúdo textual de uma célula da <tr> (seja a célula um <th> ou 
          <td>). Ou seja, a string CSV deve ter a formatação abaixo, incluindo 
          as quebras de linha:
          
          #,Jogo do Ano,Desenvolvedora,Data da premiação
          1,The Last of Us Part II,Naughty Dog,10 de dezembro de 2020
          2,Sekiro: Shadows Die Twice,FromSoftware,12 de dezembro de 2019
          3,God of War,SIE Santa Monica Studio,6 de dezembro de 2018
          4,The Legend of Zelda: Breath...,Nintendo...,7 de dezembro de 2017
          5,Overwatch,Blizzard Entertainment,1 de dezembro de 2016
        
        - Dicas:
          - O elemento <tr> contém uma propriedade 'cells'.
          - Para quebrar linha, você pode usar dentro da string o caractere 
            especial '\n';
          - É possível gerar a string usando o método reduce. Porém, neste caso,
            o código fica mais legível (e menos complicado) com o map.
      - Após gerar a string CSV, insira 2 atributos no botão:
        - href, com o valor 
          `data:text/csvcharset=utf-8,${encodeURIComponent(SUA_STRING_CSV)}`. 
          encodeURIComponent é um método do window que precisa receber a string 
          CSV que você criou;
        - download, com o valor 'table.csv'.
*/

const exportBtn = document.querySelector('[data-js="export-table-btn"]')
const tableRows = document.querySelectorAll('tr')
// Outra forma de converter o arrayLike que a tableRows armazena é usar o spread para espalhar os itens dele (...tableRows).
const getCellsText = ({ textContent }) => textContent

const getStringWithCommas = ({ cells }) => Array.from(cells)
.map(getCellsText)
.join(",")

const createCSVString = () => Array.from(tableRows)
    .map(getStringWithCommas)
    .join("\n")

const setCSVDownload = CSVString => {
  const CSVURI = `data:text/csvcharset=utf-8,${encodeURIComponent(CSVString)}`

  exportBtn.setAttribute('href', CSVURI)
     //Data URL é um tipo de url que permite que eu incorpore arquivos embutidos no meu HTML. Eu uso o método ado window encodeURIComponent para ele codificar os caracteres que possuem acentuação para que eles sejam suportados.
  exportBtn.setAttribute('download', 'table.csv') // Esse método não deve ser usado quando tiver dados sensíveis pois apenas repousando o mouse sobre o link todo conteúdo existente no arquivo é exibido sob o cursor.
}

const exportTable = () => {
  const CSVString = createCSVString()
  setCSVDownload(CSVString)
}

// exportBtn.addEventListener('click', exportTable)

/*
  06
  
  - Na Weather Application, refatore para uma factory function o código que 
    executa os requests e obtém as informações do clima da cidade;
  - Se ao fazer o request, uma mensagem "Access to fetch at 'http://...' from 
    origin 'http://...'"... for exibida no console, crie uma nova app na 
    plataforma da accuweather e pegue uma nova chave: 
    https://developer.accuweather.com/;
  - O procedimento é o mesmo mostrado nas aulas da etapa em que construímos 
    essa aplicação.
*/



/*
  07

  - No index.html, comente a div com a classe "container" que contém a tabela;
  - Descomente: 
    - A <div> com a classe "container" abaixo da div que você acabou de 
      comentar;
    - A <link> que importa o style.css;
  - Construa uma aplicação de conversão de moedas. O HTML e CSS são os que 
    você está vendo no browser (após salvar os arquivos);
  - Você poderá modificar a marcação e estilos da aplicação depois. No momento, 
    concentre-se em executar o que descreverei abaixo;
    - Quando a página for carregada: 
      - Popule os <select> com tags <option> que contém as moedas que podem ser
        convertidas. "BRL" para real brasileiro, "EUR" para euro, "USD" para 
        dollar dos Estados Unidos, etc. Use os dados da API para popular 
        os selects.
      - O option selecionado por padrão no 1º <select> deve ser "USD" e o option
        no 2º <select> deve ser "BRL";
      - O parágrafo com data-js="converted-value" deve exibir o resultado da 
        conversão de 1 USD para 1 BRL;
      - Quando um novo número for inserido no input com 
        data-js="currency-one-times", o parágrafo do item acima deve atualizar 
        seu valor;
      - O parágrafo com data-js="conversion-precision" deve conter a conversão 
        apenas x1. Exemplo: 1 USD = 5.0615 BRL;
      - O conteúdo do parágrafo do item acima deve ser atualizado à cada 
        mudança nos selects;
      - O conteúdo do parágrafo data-js="converted-value" deve ser atualizado à
        cada mudança nos selects e/ou no input com data-js="currency-one-times";
      - Para que o valor contido no parágrafo do item acima não tenha mais de 
        dois dígitos após o ponto, você pode usar o método toFixed: 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    - Para obter as moedas com os valores já convertidos, use a Exchange rate 
      API: https://www.exchangerate-api.com/;
      - Para obter a key e fazer requests, você terá que fazer login e escolher
        o plano free. Seus dados de cartão de crédito não serão solicitados.
  
*/

const $firstCurrency = document.querySelector('[data-js="currency-one"]')
const $secondCurrency = document.querySelector('[data-js="currency-two"]')
const $dataCurrencies = document.querySelector('[data-js="currencies-container"]')
const $convertedValue = document.querySelector('[data-js="converted-value"]')
const $valuePrecision = document.querySelector('[data-js="conversion-precision"]')
const $timesCurrency = document.querySelector('[data-js="currency-one-times"]')

let internalExchangeRate = {}

const getUrl = currency => `https://v6.exchangerate-api.com/v6/1fdb9b688310bf2f8705b891/latest/${currency}`

const getErrorMessage = errorType => ({
  'unsupported-code': 'A moeda não existe em nosso banco de dados.',
  'base-code-only-on-pro':'Seu plano não permite alterar a moeda base para a escolhida.',
  'malformed-request':'O tipo da requisição precisa seguir o modelo a seguir: https://v6.exchangerate-api.com/v6/{APIKey}/latest/USD',
  'invalid-key':'A chave da API não é válida.',
  'quota-reached':'Quantidade máxima de conversões atingidas para o plano atual.',
  'not-available-on-plan':'O plano atual não suporta esse tipo de requisição.'
})[errorType] || 'Não foi possível obter as informações.'

const fetchExchanteRate = async url => {
  try { 
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Sua conexão falhou. Não foi possível obter as informações.')
    }

    const exchangeRateData = await response.json()

    if (exchangeRateData.result === 'error'){
      throw new Error(getErrorMessage(exchangeRateData['error-type']))
    }

    return exchangeRateData

  } catch(err) {
      const div = document.createElement('div')
      const button = document.createElement('button')

      div.textContent = err.message
      div.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show')
      button.classList.add('btn-close')
      div.setAttribute('role', 'alert')
      button.setAttribute('type', 'button')
      button.setAttribute('aria-label', 'Close')

      button.addEventListener('click', () => {
        div.remove()
      })

      div.appendChild(button)
      $dataCurrencies.insertAdjacentElement('afterend', div)
  }
} 

const init = async () => {
  internalExchangeRate = { ...(await fetchExchanteRate(getUrl('USD'))) }

  const getOptions = selectedCurrency => Object.keys(internalExchangeRate.conversion_rates)
    .map(currency => `<option ${currency === selectedCurrency ? 'selected' : ''}>${currency}</option>`)
    .join('')
  
  $firstCurrency.innerHTML = getOptions('USD')
  $secondCurrency.innerHTML = getOptions('BRL')

  $convertedValue.textContent = internalExchangeRate.conversion_rates.BRL.toFixed(2)
  $valuePrecision.textContent = `1 USD = ${internalExchangeRate.conversion_rates.BRL} BRL`
}

$timesCurrency.addEventListener('input', e => {
  $convertedValue.textContent = (e.target.value * internalExchangeRate.conversion_rates[$secondCurrency.value]).toFixed(2)
})

$secondCurrency.addEventListener('input', e => {
  const currencyTwoValue = (internalExchangeRate.conversion_rates[e.target.value])
  
  $convertedValue.textContent = ($timesCurrency.value * currencyTwoValue).toFixed(2)
  $valuePrecision.textContent = `1 ${$firstCurrency.value} = ${1 * internalExchangeRate.conversion_rates[$secondCurrency.value]} ${$secondCurrency.value}`
})

$firstCurrency.addEventListener('input', async e => {
  internalExchangeRate = { ...(await fetchExchanteRate(getUrl(e.target.value))) }

  $convertedValue.textContent = ($timesCurrency.value * internalExchangeRate.conversion_rates[$secondCurrency.value]).toFixed(2)
  $valuePrecision.textContent = `1 ${$firstCurrency.value} = ${1 * internalExchangeRate.conversion_rates[$secondCurrency.value]} ${$secondCurrency.value}`
})

init()
