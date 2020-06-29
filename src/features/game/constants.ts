export const SET_SYMBOL_X = 'SET_SYMBOL_X'
export const SET_SYMBOL_O = 'SET_SYMBOL_O'
export const WIN = 'WIN'
export const DRAW = 'DRAW'

export const IsWIN = [
  [0, 1, 2], // Horizontals
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Verticals
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [6, 4, 2]
]