
function Card({question, options}:{question: string, options: string[]}) {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <p className='cardQuestion'>{question}</p>
        <div className="cardBtnsContainer">
          <button className='cardBtn'>{options[0]}</button>
          <button className='cardBtn'>{options[1]}</button>
          <button className='cardBtn'>{options[2]}</button>
        </div>
      </div>
    </div>
  )
}

export default Card