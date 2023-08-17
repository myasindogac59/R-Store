import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product({user}){
  const {productId} = useParams()
  const [product, setproduct] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(json => setproduct(json))
    .catch(err => console.error(err))
  }, [productId])

  return(
    <>
    <h1>{product.title}</h1>
    <img src= {product.image} alt="" className="img-w-100 img-thumbnail" />
    <p>
      {product.description}
    </p>
    </>
  )
  }