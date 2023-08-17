import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])
  return (
    <>
      <h1>Kategoriler:</h1>
      <div className="list-group">
        {
          categories.map((category, index) =>
            <Link key={index}
              className="list-group-item list-group-item-action"
              to={`/products/category/${category}`}
            >
              {category.toUpperCase()}
            </Link>
          )
        }

      </div>
    </>
  )
}