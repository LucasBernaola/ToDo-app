
import errorSvg from "../assets/404.svg"
import "../styles/error.css"

export default function Error() {
  return (
    <>
    <div className="container">
      
    <img src={errorSvg} alt="Error SVG" className='error-404' />
    <h1>Error</h1>
    </div>
    
    </>
    

  )
}
