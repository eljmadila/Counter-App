
function Card({question, options, handleChoose}:{question: string, options: string[], handleChoose: (value: string) => void}) {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <p className='cardQuestion'>{question}</p>
        <div className="cardBtnsContainer">
          {options.map((option, index) => (
            <button 
              className='cardBtn' 
              key={index} 
              value={option}
              onClick={() => handleChoose(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card