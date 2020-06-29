import { SET_SYMBOL_X, SET_SYMBOL_O, WIN, DRAW } from './constants'
import { PlayerActionTypes } from './types'

const initialPlayerState = {
    value: SET_SYMBOL_X,
    isWinner: ''
}

export default (state = initialPlayerState, action: PlayerActionTypes) => {
    switch (action.type) {
        case SET_SYMBOL_X:
            return { ...state, value: state.value = SET_SYMBOL_O }
        case SET_SYMBOL_O:
            return { ...state, value: state.value = SET_SYMBOL_X }
        case WIN:
            return { ...state, isWinner: state.isWinner = WIN }
        case DRAW:
            return { ...state, isWinner: state.isWinner = DRAW }
        default:
            return state
    }
}

