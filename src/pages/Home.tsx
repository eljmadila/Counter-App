import {Sun, Moon} from "lucide-react"
import {Link} from "react-router-dom"
import "../App.css"
import { useState } from "react"

function Home() {
    const [theme, setTheme] = useState("Dark")
  return (
    <div className='homeSection'>
        <div className='homeTitleContainer'>
            <h1 className='title'>Counter App</h1>
            <p className='description'>A simple counter application</p>
        </div>
        <div className='homeLinksContainer'>
            <Link to="/counter" className='homeLink'>Counter</Link>
            <Link to="/time" className='homeLink'>Time</Link>
            <Link to="/quiz" className='homeLink'>Quiz</Link>
        </div>
        <div>
            <button className='themeButton' onClick = {() => {setTheme((theme === "Light") ? "Dark" : "Light") }}>{theme === "Light" ? (<div><Sun />  <p>light</p></div>) : (<div><Moon /> <p>dark</p></div>)}</button>
        </div>
        
    </div>
  )
}

export default Home