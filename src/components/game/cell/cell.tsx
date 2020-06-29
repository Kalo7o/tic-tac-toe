import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../../features/game'

type Props = {
    id: Number
}

const Cell: React.FC<Props> = ({ id }) => {
    const playerTurn = useSelector(selectors.getPlayerState).value
    const cellSymbol = useSelector(selectors.getBoardState).value[Number(id)]
    const isNotChecked = cellSymbol === ' '
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className="cell col-sm-4"
                onClick={() => isNotChecked ?
                    dispatch({ type: actionTypes[playerTurn], index: id }) :
                    alert('The cell is checked')}
            >{cellSymbol}</div>
        </Fragment>
    )
}

export default Cell