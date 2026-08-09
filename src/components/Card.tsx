
import { memo } from "react"

interface CardProps {
  question: string;
  options: string[];
  handleChoose: (value: string) => void;
  disabled: boolean;
  selectedOption: string | null;
  correctAnswer: string;
}

const Card = memo(function Card({
  question,
  options,
  handleChoose,
  disabled,
  selectedOption,
  correctAnswer
}: CardProps) {
  return (
    <div className="cardContainer" id="quiz-card">
      <div className="cardContent">
        <p className='cardQuestion' id="quiz-question-text">{question}</p>
        <div className="cardBtnsContainer">
          {options.map((option, index) => {
            let btnClass = 'cardBtn';
            if (disabled) {
              if (option === correctAnswer) {
                btnClass += ' correct';
              } else if (option === selectedOption) {
                btnClass += ' incorrect';
              }
            }
            return (
              <button 
                className={btnClass} 
                id={`quiz-option-btn-${index}`}
                key={index} 
                value={option}
                disabled={disabled}
                aria-label={`Select option ${option}`}
                onClick={() => handleChoose(option)}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
})

export default Card