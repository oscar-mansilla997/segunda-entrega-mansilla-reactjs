import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import './Cart.css';

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal, } = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return( 
            <>
        <h2>no hay productos en el carrito</h2>
        <Link to = "/" >ver producto</Link>
        </>
        )
    }
  return (
    <div className="carrito">
        {
            carrito.map(prod=> <CartItem key = {prod.id}{...prod}/>)
        }
        <h3>total:$ {total}</h3>
        <button onClick={() => vaciarCarrito()}>vaciar carrito</button>
        <Link to= "/checkout">finalizar compra</Link>

    </div>
  )
}

export default Cart