import { GameState, PlayerState } from './types'

export const getBoardState = (state: GameState) => state.BoardCells
export const getPlayerState = (state: PlayerState) => state.PlayerTurn