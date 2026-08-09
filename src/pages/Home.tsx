import { useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Link } from "react-router-dom"
import "../App.css"

function Home({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  useEffect(() => {
    document.title = "Dracarys App | Counter, Timer & Quiz"
  }, [])

  return (
    <main className='homeSection' id="main-content">
      <header className='homeTitleContainer'>
        <h1 className='title' id="app-title">Dracarys App</h1>
        <p className='description' id="app-description">A simple application with counter, Stop Watch and quiz</p>
      </header>
      <nav className='homeLinksContainer' aria-label="Main Navigation">
        <Link to="/counter" className='homeLink' id="nav-link-counter">Counter</Link>
        <Link to="/time" className='homeLink' id="nav-link-timer">Stop Watch</Link>
        <Link to="/quiz" className='homeLink' id="nav-link-quiz">Quiz</Link>
      </nav>
      <div>
        <button 
          className='themeButton' 
          id="theme-toggle-btn"
          aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          onClick={() => setDark(!dark)}
        >
          {dark ? (<div><Moon size={20} /> <span>dark</span></div>) : (<div><Sun size={20} /> <span>light</span></div>)}
        </button>
      </div>
    </main>
  )
}

export default Home