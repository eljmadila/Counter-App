
import { memo } from "react"

const Card = memo(function Card({question, options, handleChoose}:{question: string, options: string[], handleChoose: (value: string) => void}) {
  return (
    <div className="cardContainer" id="quiz-card">
      <div className="cardContent">
        <p className='cardQuestion' id="quiz-question-text">{question}</p>
        <div className="cardBtnsContainer">
          {options.map((option, index) => (
            <button 
              className='cardBtn' 
              id={`quiz-option-btn-${index}`}
              key={index} 
              value={option}
              aria-label={`Select option ${option}`}
              onClick={() => handleChoose(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Card