import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react"

function BackHome() {
  return (
    <div className='backhomeContainer'>
        <button className='backHomeBtn'>
            <Link to="/"><ArrowLeft /></Link>
        </button>
    </div>
  )
}

export default BackHome