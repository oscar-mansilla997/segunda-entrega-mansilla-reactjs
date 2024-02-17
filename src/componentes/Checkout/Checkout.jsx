import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';

export const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");


    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("por favor completa todos los campos ")
            return;
        }
        if (email !== emailConfirmacion) {
            setError("los email no coinciden")
            return
        }
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,


        }

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("error al crear la orden de compra", error);
                setError("no se pudo crear la orden");
            })
    }

    return (
        <div>
            <h2>checkout-finalizamos la compra</h2>
            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <label htmlFor="nombre">nombre</label>
                    <input type="nombre" id='nombre' onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="apellido">apellido</label>
                    <input type="apellido" id='apellido' onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="telefono">telefono</label>
                    <input type="telefoo" id='telefono' onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="emailcon">email confirmacion</label>
                    <input type="email" id='emailcon' onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>


                {
                    error && <p>{error}</p>
                }
                {
                    <button>finalizar orden</button>
                }
                {
                    ordenId && <strong>gracias por su compra! tu numero de orden es el siguiente: {ordenId}</strong>
                }

            </form>
        </div>
    )
}
