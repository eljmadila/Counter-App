import { useEffect, useState, useCallback, useRef } from 'react';
import BackHome from '../components/BackHome'
import Card from '../components/Card'
import Loader from '../components/Loader'

// Robust HTML entity decoder
const decodeHTML = (html: string): string => {
  if (!html) return ""
  const textarea = document.createElement("textarea")
  textarea.innerHTML = html
  return textarea.value
}

function Quiz() {
  const [loading, setLoading] = useState(true)
  const [choosed, setChoosed] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [score, setScore] = useState(0);
  const [cardData, setCardData] = useState<{ question: string; answer: string; options: string[] }>({
    question: "",
    answer: "",
    options: []
  });

  const timerRef = useRef<number | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setChoosed(false)
    setSelectedOption(null)
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const item = data.results[0]
        const decodedQuestion = decodeHTML(item.question)
        const decodedAnswer = decodeHTML(item.correct_answer)
        const decodedIncorrect = item.incorrect_answers.map((opt: string) => decodeHTML(opt))
        const allOptions = [...decodedIncorrect, decodedAnswer].sort()

        setCardData({
          question: decodedQuestion,
          answer: decodedAnswer,
          options: allOptions
        });
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      setLoading(false);
    }
  }, [])

  const choosedFunc = useCallback((value: string) => {
    if (choosed) return // Prevent changing answer or multi-clicking!

    setChoosed(true)
    setSelectedOption(value)

    if (value === cardData.answer) {
      setScore((prev) => prev + 1)
    }

    if (timerRef.current) window.clearTimeout(timerRef.current)

    timerRef.current = window.setTimeout(() => {
      fetchData()
    }, 1500)
  }, [choosed, cardData.answer, fetchData])

  useEffect(() => {
    document.title = "Trivia Quiz | Dracarys App"
    fetchData()

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [fetchData])
  
  return (
    <main className="quizPage" id="quiz-page">
      <BackHome />
      <div className='quizContainer'>
        {loading ? (
          <Loader text="Fetching quiz questions..." />
        ) : (
          <>
            <Card 
              question={cardData.question} 
              options={cardData.options} 
              handleChoose={choosedFunc}
              disabled={choosed}
              selectedOption={selectedOption}
              correctAnswer={cardData.answer}
            />

            <p className='answer' id="quiz-answer-display">The answer is : {choosed ? <span className='answerSpan'>{cardData.answer}</span> : ''}</p>
            <p className='score' id="quiz-score-display">Your score : <span className='scoreSpan'> {score}</span></p>

            <div className='quizBtnsContainer'>
              <button className='quizBtn' id="quiz-skip-btn" aria-label="Skip Question" onClick={fetchData}>Skip</button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Quiz