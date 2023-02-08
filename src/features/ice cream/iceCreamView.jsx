import React from 'react'
import { useSelector } from 'react-redux'

export const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  return (
    <div>
        <h2>Number of ice Creams - { numOfIceCreams }</h2>
        <button>Order ice Cream</button>
        <button>Restock ice Cream</button>
    </div>
  )
}
