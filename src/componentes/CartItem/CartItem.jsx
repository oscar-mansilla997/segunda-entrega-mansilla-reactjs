import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <h3>{item.nombre}</h3>
        
        <p>cantidad: {item.precio}</p>
    </div>
  )
}

export default CartItem