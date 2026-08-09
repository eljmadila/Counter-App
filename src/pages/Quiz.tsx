import { useEffect, useState } from 'react';
import BackHome from '../components/BackHome'
import Card from '../components/Card'
import Loader from '../components/Loader'

function Quiz() {
  const [loading, setLoading] = useState(true)
  const [choosed, setChoosed] = useState(false)
  const [score, setScore] = useState(0);
  const [cardData, setCardData] = useState<{ question: string; answer: string; options: string[] }>({
    question: "",
    answer: "",
    options: []
  });

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setCardData({
          question: data.results[0].question.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
          answer: data.results[0].correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
          options: data.results[0].incorrect_answers.map((option: string) =>
            option.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')
          ),
        });
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      setLoading(false);
    }
  }

  const choosedFunc = (value: string) => {
    if (value === cardData.answer) {
      setScore((prev) => prev + 1)
    }

    setChoosed(true)

    setTimeout(() => {
      fetchData().then(() => {
        setChoosed(false) 
      })
    }, 1500)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      <BackHome />
      <div className='quizContainer'>
        {loading ? (
          <Loader text="Fetching quiz questions..." />
        ) : (
          <>
            <Card question={cardData.question} options={[...cardData.options, cardData.answer].sort()} handleChoose={choosedFunc}/>

            <p className='answer'>The answer is : {choosed ? <span className='answerSpan'>{cardData.answer}</span> : ''}</p>
            <p className='score'>Your score : <span className='scoreSpan'> {score}</span></p>

            <div className='quizBtnsContainer'>
              <button className='quizBtn' onClick={fetchData}>Skip</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Quiz