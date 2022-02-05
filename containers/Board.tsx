import { useState, useEffect } from "react"
import Square from "../components/Square"
import type { Player, State, WinState } from "../types"

function checkWinner(squares: State[]): WinState {
	const lines: [number, number, number][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let [a, b, c] of lines) {
		const product = squares[a] * squares[b] * squares[c];
		if (product === 1) return 1
		else if (product === 8) return 2
	}
	// no winner
	return squares.filter(sq => sq === 0).length ? 3 : 0
}
function Board() {
	const [squares, setSquares] = useState<State[]>(Array(9).fill(0))
	const [player, setPlayer] = useState<Player>(1)
	const [winnerState, setWinnerState] = useState<WinState>(0)

	function reset() {
		setSquares(Array(9).fill(0))
		setWinnerState(0)
		setPlayer(1)
	}

	function setMove(index: number) {
		const newData = squares.map(
			(val, i) => i === index ? player : val
		)
		setSquares(newData)
		setPlayer(player === 1 ? 2 : 1)
	}

	useEffect(() => {
		setWinnerState(checkWinner(squares))
	}, [squares])

  	return (
  		<div>
			<p>Hey {player === 1 ? "X" : "O"}, it&apos;s your turn</p>
	  		Board
		</div>
	  )
}

export default Board