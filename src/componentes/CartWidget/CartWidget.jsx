import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';


const CardWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to= "/cart">
        <img className='imgCarrito' src="../img/carrito.png" alt="carrito" />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
      </Link>
    </div>
  )
}

export default CardWidget