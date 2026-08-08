import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react"

function BackHome() {
  return (
    <div className='backhomeContainer'>
      <Link className='backHomeBtn' to="/"><ArrowLeft />Back</Link>
    </div>
  )
}

export default BackHome