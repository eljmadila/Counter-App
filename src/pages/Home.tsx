import { Sun, Moon } from "lucide-react"
import { Link } from "react-router-dom"
import "../App.css"

function Home({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  return (
    <div className='homeSection'>
      <div className='homeTitleContainer'>
        <h1 className='title'>Dracarys App</h1>
        <p className='description'>A simple application with counter, timer and quiz</p>
      </div>
      <div className='homeLinksContainer'>
        <Link to="/counter" className='homeLink'>Counter</Link>
        <Link to="/time" className='homeLink'>Timer</Link>
        <Link to="/quiz" className='homeLink'>Quiz</Link>
      </div>
      <div>
        <button className='themeButton' onClick={() => setDark(!dark)}>
          {dark ? (<div><Moon /> <p>dark</p></div>) : (<div><Sun /> <p>light</p></div>)}
        </button>
      </div>
    </div>
  )
}

export default Home