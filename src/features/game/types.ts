import { SET_SYMBOL_X, SET_SYMBOL_O, WIN, DRAW } from './constants'

export interface PlayerActionTypes {
    type: typeof SET_SYMBOL_O | typeof SET_SYMBOL_X | typeof WIN | typeof DRAW,
    index: Number
}

export interface PlayerState {
    PlayerTurn: {
        value: typeof SET_SYMBOL_X | typeof SET_SYMBOL_O
        isWinner: String
    }
}

export interface GameState {
    BoardCells: {
        value: Array<String>
    }
}

