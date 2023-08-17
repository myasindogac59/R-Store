import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function Products({user}) {
  const [last10Products, setlast10Products] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=> res.json())
    .then(json => setlast10Products(json))
  }, [])
  return (
    <>
    <div className="row row-cols-sm-3 row-cols-md-4">
    {
      last10Products.map(item => <ProductCard user = {user} key={item.id} item={item}  />)
    }
    </div>
    </>
  )
}
