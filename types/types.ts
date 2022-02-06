export type Player = 1 | 2 // X - 1, O - 2
export type SquareState = Player | 0 // 0 - not played
export type GameState = SquareState | 3 // 0 - not finish, 1 - X wins, 2 - O wins, 3 - draw