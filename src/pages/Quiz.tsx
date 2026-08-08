import { useEffect, useState } from 'react';
import BackHome from '../components/BackHome'
import Card from '../components/Card'

function Quiz() {
  const [score, setScore] = useState(0);
  const [cardData, setCardData] = useState({
    question: "",
    answer: "",
    options: []
  });

  const fetchData = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");
    const data = await res.json();
    setCardData({
      question: data.results[0].question,
      answer: data.results[0].correct_answer,
      options: data.results[0].incorrect_answers,
    });
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
        <BackHome />
        <div className='quizContainer'>
            <Card question={cardData.question}  options={[...cardData.options, cardData.answer].sort()} />

            <p>The answer is : {cardData.answer}</p>
            <p>Your score : {score}</p>

            <div className='quizBtnsContainer'>
              <button className='quizBtn' onClick={fetchData}>Next</button>
              <button className='quizBtn' onClick={fetchData}>Skip</button>
            </div>
        </div>
        
    </div>
  )
}

export default Quiz