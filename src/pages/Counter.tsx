import {Plus, Minus, RotateCcw} from "lucide-react"
import BackHome from '../components/BackHome'
import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => {if(count > 0) {setCount(count - 1)}};
    const reset = () => setCount(0);
  return (
    <div className="counterContainer">
        <BackHome />
        <div className='counterContent'>
          <button className='counterLeftBtn' onClick={() => decrease()}><Minus /></button>
            <div className='counterMiddle'>
                <h1>{count}</h1>
                <button className='counterMiddleBtn' onClick={() => reset()}><RotateCcw /></button>
            </div>
            <button className='counterRightBtn' onClick={() => increase()}> <Plus /></button>
        </div>
    </div>
  )
}

export default Counter