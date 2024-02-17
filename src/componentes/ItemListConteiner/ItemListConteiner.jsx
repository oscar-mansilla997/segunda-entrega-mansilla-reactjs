import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
// import { getProductos, getProductosPorCategorias } from "../../asyncmock"
import { db } from "../../services/config";
import {collection, getDocs, where, query,  doc } from "firebase/firestore";
import { useParams } from "react-router-dom";



const ItemListConteiner = () => {
    const [productos, setProductos] = useState ([]);

    const {idCategoria}= useParams ();


    useEffect(()=> {
      const misProductos = idCategoria ? query(collection (db,"productos"), where("idCat", "==", idCategoria)) : collection (db, "productos")
      getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return{id: doc.id, ...data};
        })
        setProductos(nuevosProductos);
      })
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