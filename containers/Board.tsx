import { useState, useEffect } from "react"
import Square from "../components/Square"
import type { Player, SquareState, GameState } from "../types/types"

function checkWinner(squares: SquareState[]): GameState {
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
	return squares.filter(sq => sq === 0).length ? 0 : 3 // 3 - game draw, 0 - not finish
}
function Board() {
	const [squares, setSquares] = useState<SquareState[]>(Array(9).fill(0))
	const [player, setPlayer] = useState<Player>(1)
	const [gameState, setGameState] = useState<GameState>(0)

	function reset() {
		setSquares(Array(9).fill(0))
		setGameState(0)
		setPlayer(1)
	}

	function setMove(index: number, current: Player) {
		const newData = squares.map(
			(val, i) => i === index ? current : val
		)
		setSquares(newData)
		setPlayer(current === 1 ? 2 : 1)
	}

	useEffect(() => {
		setGameState(checkWinner(squares))
	}, [squares])

  	return (
  		<div>
			<div>
				{!gameState && <p>Hey {player === 1 ? "X" : "O"}, it&apos;s your turn</p>}
				{(gameState === 3) && <p>The Game draws!</p>}
				{(gameState === 1) && <p>Congratulations, X wins!</p>}
				{(gameState === 2) && <p>Congratulations, O wins!</p>}
			</div>
			<div className="grid">
				{Array(9).fill(0).map(
					(_, i) => (
						<Square 
							key={i}
							onClick={() => setMove(i, player)}
							state={squares[i]}
							gameState={gameState}
						/>
					)
				)}
			</div>
			<button className="reset" onClick={reset}>
				RESET
			</button>
		</div>
	  )
}

export default Board