import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>nombre:{nombre}</h2>
        <h3>precio: {precio}</h3>
        <img src="img" alt={nombre} />
        <p>id: {id}</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem, nisi libero voluptas quibusdam esse dolore vel? Maxime, excepturi. Nostrum quibusdam, atque ullam vitae eaque harum accusamus beatae dicta dignissimos!</p>
    </div>
  )
}

export default ItemDetail