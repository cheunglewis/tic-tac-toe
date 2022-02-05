import { State } from "../types"

interface SquareProps {
	key: number,
	onClick: () => void,
	value: State,
	winnerState: State,
}

function Square({key, onClick, value, winnerState}: SquareProps) {
	if (value === 0) return (
		<button className="square" onClick={onClick} disabled={!!winnerState} />
	)
	else return (
		<button className={`square squared_${value}`} disabled>
			{value}
		</button>
	)
}

export default Square