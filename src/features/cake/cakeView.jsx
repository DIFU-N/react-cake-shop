import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cake-slice';

export const CakeView = () => {
  const [orderValue, setOrderValue] = React.useState(1)
  const [restockValue, setRestockValue] = React.useState(1)
  const numOfCakes = useSelector((state) => state.cake.numOfCAkes);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <input type="number"  value={orderValue} onChange={(e) => setOrderValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(ordered(orderValue))}>Order Cake</button>
        <input type="number"  value={restockValue} onChange={(e) => setRestockValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restocked(restockValue))}>Restock Cakes</button>
    </div>
  )
}
