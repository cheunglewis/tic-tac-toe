import { SquareState, GameState } from "../types/types"

interface SquareProps {
	key: number,
	onClick: () => void,
	state: SquareState,
	gameState: GameState,
}

function Square({key, onClick, state, gameState}: SquareProps) {
	if (state === 0) return (
		<button className="square" onClick={onClick} disabled={!!gameState} />
	)
	else return (
		<button className={`square square_${state}`} disabled>
			{state === 1 ? "X": "O"}
		</button>
	)
}

export default Square