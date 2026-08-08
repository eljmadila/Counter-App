import "./App.css"
import {Routes, Route , Link } from "react-router-dom"
import Counter from "./pages/Counter"
import Time from "./pages/Time"
import Quiz from "./pages/Quiz"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
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