import { useEffect, useState } from "react";
import { useParams, useNavigete } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(false)
  const {category} = useParams()
  console.log(category)
 
 
    useEffect(() => {
      console.log(category)
      setLoading(true)
     if(category){
      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch(e => console.error(e))
      .finally (() => setLoading(false))
     }else{
      fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch(e => console.error(e))
      .finally (() => setLoading(false))
     }
  }, [category])

  if(loading){
    return (
      <h2>Cargando......</h2>
    )
  }

  return (
   <>
   { products.length > 0? (
    <div>
      {products.map((product)=> <div key={product.id}><p>{product.title}</p><button onClick={()=> Navigate(`/productDetail/${product.id}`)}>Detalle</button></div>)}
    </div>
   ) : (
    <h2>No exitte el produtos que selecciono </h2>
   )}
   </>
  )
}

export default ItemListContainer;
