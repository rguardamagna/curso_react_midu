import { WINNER_COMBOS } from "../constasts"

export const checkWinnerFrom = (boardToCheck) => {
    
    // revisamos todas las combinaciones ganadoras, para ver si X o O ganaron
    for (const combo of WINNER_COMBOS) {
        const [a,b,c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
            ) {
            return boardToCheck[a]
            }
        }
    //si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    //revisamos si hay empate, si no hay mas espacios vacíos en el tabler
    return newBoard.every((square) => square !== null)
}