import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react"

function BackHome() {
  return (
    <nav className='backhomeContainer' aria-label="Back to home navigation">
      <Link className='backHomeBtn' id="back-home-link" aria-label="Back to Home Page" to="/">
        <ArrowLeft />Back
      </Link>
    </nav>
  )
}

export default BackHome