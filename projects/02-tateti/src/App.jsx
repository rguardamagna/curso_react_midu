import {useState,useEffect} from 'react'
import confetti from 'canvas-confetti'

import { Square } from "./components/Square"
import {TURNS} from "./constasts"
import {checkWinnerFrom, checkEndGame} from "./logic/board"
import {WinnerModal} from "./components/WinnerModal"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null) 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    
    // no actualizar el cuadro si ya tiene un valor dentro
    if (board[index] || winner) return

    // actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
  
    // revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard) 
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  
  }

  useEffect(() => {
    // Como mínimo se ejecuta una vez, cuando se monta el componente
    console.log('codigo a ejecutar en el dom')
  }, []) 
  // si está vacío se ejecuta solo una vez, 
  //si tiene "winner" y "turn" cada vez que cambia el turno o hay un ganador

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>
        Resetear juego
      </button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn===TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn===TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
