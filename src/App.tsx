import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect, lazy, Suspense } from "react"
import Home from "./pages/Home"
import Loader from "./components/Loader"

const Counter = lazy(() => import("./pages/Counter"))
const Time = lazy(() => import("./pages/Time"))
const Quiz = lazy(() => import("./pages/Quiz"))

function App() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("dracarys-theme")
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem("dracarys-theme", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={dark ? "dark" : "light"}>
      <Suspense fallback={<div className="homeSection"><Loader text="Loading page..." /></div>}>
        <Routes>
          <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/time" element={<Time />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Suspense>

      <footer>
        <p>elyamine-madila © 2026 All rights reserved</p>
      </footer>
    </div>
  )
}

export default App