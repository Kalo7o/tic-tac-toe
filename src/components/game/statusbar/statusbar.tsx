import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../../../features/game'
import { WIN } from '../../../features/game/constants'
import { isNullOrUndefined } from 'util'

const StatusBar: React.FC = () => {

    const currentPlayer = useSelector(selectors.getPlayerState)

    return (
        <Fragment>
            {
                currentPlayer.isWinner === null
                    ? <p>player {currentPlayer.value.slice(-1)} turn</p>
                    : currentPlayer.isWinner === WIN
                        ? <p>player {currentPlayer.value.slice(-1)} Wins!</p>
                        : <p>Draw!</p>
            }
        </Fragment>
    )
}
export default StatusBar