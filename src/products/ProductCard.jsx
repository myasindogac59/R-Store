import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({item, user}) {
  // const [favs, setFavs] = useState([])

  function handleClick(product){
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? []
    const itemIndex = localFavs.findIndex(localItem => product.id === localItem.id)
    if(itemIndex >= 0) {
      localFavs =  localFavs.filter(item => item.id !==product.id) 
    } else {
      localFavs.push({id: product.id, title: product.title})
    }
    localStorage.setItem ("favs", JSON.stringify(localFavs))
  }
  return (
    <>
    <div className="col-sm mb-3">
      <div className="card">
        <Link to={`/products/product/${item.id}`} >
        <img src= {item.image} className="card-img-top p-3" alt= {item.title}/>
        </Link>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description.slice(0, 20) }...</p>
            <p className="lead">{item.price }</p>
            {user && <a onClick={() => handleClick(item)} href="#" className="btn btn-primary">Fav</a>}
          </div>
      </div>
      </div>
    </>
  )
}