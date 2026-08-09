import { Plus, Minus, RotateCcw } from "lucide-react"
import BackHome from '../components/BackHome'
import { useState, useEffect } from "react"

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Counter | Dracarys App"
  }, [])

  const increase = () => setCount(count + 1);
  const decrease = () => { if (count > 0) { setCount(count - 1) } };
  const reset = () => setCount(0);

  return (
    <main className="counterContainer" id="counter-page">
      <BackHome />
      <div className='counterContent'>
        <button className='counterLeftBtn' id="counter-decrease-btn" aria-label="Decrease counter" onClick={decrease}>
          <Minus />
        </button>
        <div className='counterMiddle'>
          <h1 id="counter-value">{count}</h1>
          <button className='counterMiddleBtn' id="counter-reset-btn" aria-label="Reset counter" onClick={reset}>
            <RotateCcw />
          </button>
        </div>
        <button className='counterRightBtn' id="counter-increase-btn" aria-label="Increase counter" onClick={increase}>
          <Plus />
        </button>
      </div>
    </main>
  )
}

export default Counter