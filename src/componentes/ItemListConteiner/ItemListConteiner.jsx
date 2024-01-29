import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategorias } from "../../asyncmock"
import { useParams } from "react-router-dom";



const ItemListConteiner = () => {
    const [productos, setProductos] = useState ([]);

    const {idCategoria}= useParams ();

    useEffect(()=> {

      
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos ;
        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        .catch(error => console.log(error))
        
    }, [idCategoria])
  return (
    <div>
        <h2>Productos</h2>
        <ItemList productos ={productos}/>
    </div>
  )
}

export default ItemListConteiner