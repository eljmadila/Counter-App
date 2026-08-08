import React from "react"
import BackHome from "../components/BackHome"

function Time() {
  return (
    <div>
        <BackHome />
        <div>
            <p>Time</p>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    </div>
  )
}

export default Time