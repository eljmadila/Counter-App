import BackHome from "../components/BackHome"
import { Play, Pause, RotateCcw } from "lucide-react"
import { useState, useEffect, useCallback, memo } from "react"

// Helper function to format seconds into HH : MM : SS (pure function outside render loop)
const formatTime = (totalSeconds: number): string => {
  const hrs = Math.floor(totalSeconds / 3600)
  const mins = Math.floor((totalSeconds % 3600) / 60)
  const secs = totalSeconds % 60

  const formattedHours = String(hrs).padStart(2, "0")
  const formattedMinutes = String(mins).padStart(2, "0")
  const formattedSeconds = String(secs).padStart(2, "0")

  return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`
}

const Time = memo(function Time() {
  const [seconds, setSeconds] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  useEffect(() => {
    document.title = "Stopwatch Timer | Dracarys App"
  }, [])

  // Start interval when timer is running
  useEffect(() => {
    let interval: number | undefined

    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning])

  // Timer controls
  const handleStart = useCallback(() => setIsRunning(true), [])
  const handlePause = useCallback(() => setIsRunning(false), [])
  const handleReset = useCallback(() => {
    setIsRunning(false)
    setSeconds(0)
  }, [])

  return (
    <main className="timeContainer" id="timer-page">
      <BackHome />
      <div className="timeContent">
        <h1 className="timeDisplay" id="timer-display">{formatTime(seconds)}</h1>
      </div>
      <div className="timeBtnsContainer">
        {!isRunning ? (
          <button className="timeBtn" id="timer-start-btn" aria-label="Start Timer" onClick={handleStart}>
            <Play size={20} /> Start
          </button>
        ) : (
          <button className="timeBtn" id="timer-pause-btn" aria-label="Pause Timer" onClick={handlePause}>
            <Pause size={20} /> Pause
          </button>
        )}
        <button className="timeBtn" id="timer-reset-btn" aria-label="Reset Timer" onClick={handleReset}>
          <RotateCcw size={20} /> Reset
        </button>
      </div>
    </main>
  )
})

export default Time