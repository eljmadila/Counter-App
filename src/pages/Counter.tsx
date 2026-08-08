import React, {useState} from 'react'
import {Plus, Minus, RotateCcw} from "lucide-react"
import BackHome from '../components/BackHome'

function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => {if(count > 0) {setCount(count - 1)}};
    const reset = () => setCount(0);
  return (
    <div className="counterContainer">
        <BackHome />
        <div className='counterContent'>
            <button onClick={() => increase()}> <Plus /></button>
            <div className='counterMiddle'>
                <h1>{count}</h1>
                <button onClick={() => reset()}><RotateCcw /></button>
            </div>
            <button onClick={() => decrease()}><Minus /></button>
        </div>
    </div>
  )
}

export default Counter