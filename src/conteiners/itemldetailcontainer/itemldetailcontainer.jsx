import { useEffect, useState } from "react" 
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState()
    const {idProduct} = useParams()

    useEffect (() =>{
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch(e => console.error(e))
    }, [])

    return(
        <div>{product?.title}</div>
    )
}


export default ItemDetailContainer