import * as React from 'react'

<<<<<<< HEAD
/*posso colocar vários valores dentro de uma variável criando um vetor, 
  mas a função set da variável de estado só consegue atualizar a variável por inteiro.
  Em um vetor isso prejudica, por isso faz a cópia do estado atual, 
  altera a cópia e sobrescreve a original com a cópia modificada.*/

function Board() {
  // 🐨 squares é o estado para este componente. Adicione useState para squares
  //const squares = Array(9).fill(null) ESTA É UMA VARIÁVEL COMUM
  
  const [squares, setSquares] = React.useState(Array(9).fill(null))
=======
function Board() {
  // 🐨 squares é o estado para este componente. Adicione useState para squares
  //const squares = Array(9).fill(null)
  //const [squares, setSquares] = React.useState(Array(9).fill(null))

  // Restaurando o estado salvo no local storage, caso haja
  // Colocamos a leitura do estado dentro de uma função para implementar
  // "lazy intializing"
  const [squares, setSquares] = React.useState(
    // JSON.parse ~> lê uma string e tenta converter para objeto
    () => JSON.parse(window.localStorage.getItem('squares')) ?? Array(9).fill(null)
  )
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546

  // 🐨 Precisaremos dos seguintes itens de estados derivados:
  // - nextValue ('X' ou 'O')
  // - winner ('X', 'O', ou null)
  // - status (`Vencedor: ${winner}`, `Deu velha!`, or `Próximo jogador: ${nextValue}`)
  // 💰 Os respectivos cálculos já estão prontos. Basta usar os utilitários 
  // mais abaixo no código para criar essas variáveis
<<<<<<< HEAD

  const nextValue = calculateNextValue(squares)// calcula de quem é a vez
  const winner = calculateWinner(squares) //a cada jogada, verifica se tem trinca
  const status = calculateStatus(winner, squares, nextValue) // situação do jogo
=======
  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546

  // Esta é a função que o manipulador de clique no quadrado irá chamar. `square`
  // deve ser um índice. Portanto, se você clicar sobre o quadrado central, o
  // valor será `4`.
  function selectSquare(square) {
    // 🐨 primeiramente, se já existe um vencedor ou já há um valor no
    // quadrado indicado pelo índice (como quando alguém clica em um quadrado
    // que já foi clicado), retorne prematuramente, assim não precisaremos
    // fazer quaisquer mudanças de estado
    if(winner || squares[square]) return

    // 🦉 Tipicamente, é uma má ideia mudar ou alterar diretamente um estado
    // em React. Isso pode levar a bugs sutis que podem facilmente ir parar
    // em produção.
    //
    // 🐨 faça uma cópia da matriz dos quadrados
<<<<<<< HEAD
    // 💰 espalhamento `[...squares]` é do que você precisa!) -> desmonta e monta igual com outro nome e não é alterado quando o original sofre mudança
=======
    // 💰 `[...squares]` é do que você precisa!)
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
    const squaresCopy = [...squares]
    
    // 🐨 ajuste o valor do quadrado que foi selecionado
    // 💰 `squaresCopy[square] = nextValue`
<<<<<<< HEAD
    squaresCopy[square] = nextValue 
=======
    squaresCopy[square] = nextValue
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
    
    // 🐨 atribua a cópia à matriz dos quadrados
    setSquares(squaresCopy)
  }

<<<<<<< HEAD
  function restart() { //para reiniciar o jogo limpando o tabuleiro
    // 🐨 volte os quadrados ao estado inicial
=======
  function restart() {
    // 🐨 volte os quadrados ao estado inicial
    // 💰 `Array(9).fill(null)` é do que você precisa!
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

<<<<<<< HEAD
    //Salva o estado do jogo a cada jogada (sempre que a variável squares for alterada)
    // esqueleto do userEffect React.useEffect(()=>{},[]) arrow function vazia e o vetor de dependência
    React.useEffect(()=>{
      window.localStorage.setItem('squares', JSON.stringify(squares)),
      [squares]}) 
      //JSON.stringify converte um objeto (que pode ser um vetor) em string
=======
  // Salva o estado do jogo a cada jogada
  React.useEffect(() => {
    // JSON.stringify converte um objeto (que pode ser um vetor) em string
    window.localStorage.setItem('squares', JSON.stringify(squares))
  }, [squares])

>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
  return (
    <div>
      {/* 🐨 coloque o status na div abaixo */}
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
      <hr />
<<<<<<< HEAD
      <div style={{fontFamily: 'monospace'}}> {/*div acrescentada para mostrar as variáveis durante o jogo*/}
=======
      <div style={{ fontFamily: 'monospace' }}>
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
        {JSON.stringify(squares)}
      </div>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Vencedor: ${winner}`
    : squares.every(Boolean)
    ? `Deu velha!`
    : `Próximo jogador: ${nextValue}`
}

<<<<<<< HEAD
function calculateNextValue(squares) { //estado derivado
=======
function calculateNextValue(squares) {
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Exercicio04() {
  return <Game />
}

export default Exercicio04