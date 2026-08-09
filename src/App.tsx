import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Counter from "./pages/Counter"
import Time from "./pages/Time"
import Quiz from "./pages/Quiz"
import Home from "./pages/Home"

function App() {
  const [dark, setDark] = useState<boolean>(true)

  return (
    <div className={dark ? "dark" : "light"}>
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/time" element={<Time />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>

      <footer>
        <p>elyamine-madila © 2026 All rights reserved</p>
      </footer>
    </div>
  )
}

export default App