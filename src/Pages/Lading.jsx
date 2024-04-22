import Navbar from "../components/Navbar/Navbar"
import LandingImg from "../assets/404.svg"
import ".././styles/landing.css"

export default function Lading() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
        <div className="col"><h1>este es una prueba</h1></div>
        <div className="col"><img src={LandingImg} alt="" /></div>
    </div>

    </>
  )
}
