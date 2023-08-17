import Products from "../products/Products";

export default function Home({user}){
  return(
    <>
    <h1>Home</h1>
    <h2>Urunler:</h2>
    <Products user={user} />    
    </>
  )
}