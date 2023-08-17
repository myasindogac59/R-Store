import { Link } from "react-router-dom";

export default function PageNotFound(){
  return(
    <>
    <h1>Page Not Found- 404</h1>
    <Link className="btn btn-danger" to={'/'}>Anasayfaya Git</Link>
    </>
  )
}