const productos = [
    {id: "1",nombre: "camiseta suplente", precio: 60000, img:"../img/alternativa.avif", idCat:"1" },
    {id: "2",nombre: "camiseta entrenamiento", precio: 55000, img:"../img/entrenamiento.avif",idCat:"1" },
    {id: "3",nombre: "zapatillas edicion 2023", precio: 55000, img:"../img/zapatillasarg.jpg",idCat:"2" },
    {id: "4",nombre: "botines leo messi 2023", precio: 55000, img:"../img/botinesleomessi.avif",idCat:"2" },
    {id: "5",nombre: "vaso copa mundial", precio: 60000, img:"../img/vaso.jpg", idCat:"3" },
    {id: "6",nombre: "camisa seleccion", precio: 55000, img:"../img/camisa.avif",idCat:"3" },
    {id: "7",nombre: "piluso seleccion", precio: 55000, img:"../img/piluso.avif",idCat:"3" },
    {id: "8",nombre: "buzo afa", precio: 55000, img:"../img/buzo.jfif",idCat:"3" }
    
    
    
]
export const getProductos = () => {
    return new Promise((resolve) => {
       setTimeout( ()=>{
        resolve(productos);
       }, 100) 
    })
        
   
}
 export const getUnProducto = (id) => {
    return new Promise(resolve => {
      setTimeout (() => {
        const producto = productos.find(prod => prod.id ===id);
        resolve(producto);
      },100)  
    })
 }

 export const getProductosPorCategorias = (idCategoria) =>{
    return new Promise((resolve) => {
     setTimeout(()=>{
    const productosCategorias = productos.filter(prod => prod.idCat === idCategoria);
    resolve(productosCategorias);
     },100)   
    })
 }