import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecream-slice'

export const IceCreamView = () => {
  const [orderValue, setOrderValue] = React.useState(1)
  const [restockValue, setRestockValue] = React.useState(1)
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of ice Creams - { numOfIceCreams }</h2>
        <input type="number"  value={orderValue} onChange={(e) => setOrderValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(ordered(orderValue))}>Order ice Cream</button>
        <input type="number"  value={restockValue} onChange={(e) => setRestockValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restocked(restockValue))}>Restock ice Cream</button>
    </div>
  )
}
