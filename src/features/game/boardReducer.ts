import { SET_SYMBOL_X, SET_SYMBOL_O } from './constants'
import { PlayerActionTypes } from './types'

const initialBoardState = {
    value: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
    ]
}

export default (state = initialBoardState, action: PlayerActionTypes) => {
    switch (action.type) {
        case SET_SYMBOL_X:
            return { ...state, state: state.value[Number(action.index)] = "X" }
        case SET_SYMBOL_O:
            return { ...state, state: state.value[Number(action.index)] = "O" }
        default:
            return state
    }
}


