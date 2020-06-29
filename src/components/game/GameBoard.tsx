import React, { Fragment } from 'react'
import Cell from './cell'
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../../features/game'
import { IsWIN, DRAW, WIN } from '../../features/game/constants'

const GameBoard: React.FC = () => {

  const board = useSelector(selectors.getBoardState).value
  const currentPlayer = useSelector(selectors.getPlayerState)
  const dispatch = useDispatch()
/*
  for (let i = 0; i < IsWIN.length; i++) {
    if (board[IsWIN[i][0]] === ('X' || 'O') &&
      board[IsWIN[i][0]] === board[IsWIN[i][1]] &&
      board[IsWIN[i][1]] === board[IsWIN[i][2]]) {

      dispatch({ type: 'WIN' })
    } else if (!board.includes(' ')) {
      dispatch({ type: 'DRAW' })
    }
  }
*/
  return (
    <Fragment>
      <div className="game-container">
        <div className="game-board">
          <div className="row">
            <Cell id={0} />
            <Cell id={1} />
            <Cell id={2} />
          </div>
          <div className="row">
            <Cell id={3} />
            <Cell id={4} />
            <Cell id={5} />
          </div>
          <div className="row">
            <Cell id={6} />
            <Cell id={7} />
            <Cell id={8} />
          </div>
        </div>
        <div className="status">
          <p>player {currentPlayer.value.slice(-1)} turn</p>
        </div>
      </div>
    </Fragment>
  )
}

export default GameBoard
