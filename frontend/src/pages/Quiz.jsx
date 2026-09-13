import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  getQuiz,
  getCurrentUser,
  submitQuiz,
} from '../services/api'

import './Quiz.css'


function Quiz() {
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')


  useEffect(() => {
    async function loadQuiz() {
      try {
        const data = await getQuiz()

        setQuestions(data)
      } catch {
        setError('Unable to load the quiz.')
      } finally {
        setLoading(false)
      }
    }

    loadQuiz()
  }, [])


  function handleAnswerChange(questionId, answer) {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }))
  }


  async function handleSubmit(event) {
    event.preventDefault()

    setError('')

    if (
      questions.length === 0 ||
      Object.keys(answers).length !== questions.length
    ) {
      setError(
        'Please answer every question before submitting.'
      )

      return
    }

    try {
      setSubmitting(true)

      const currentUser = await getCurrentUser()

      if (!currentUser) {
        navigate('/login', {
          state: {
            from: '/quiz',
          },
        })

        return
      }

      const submittedAnswers = questions.map((question) => ({
        question_id: question.id,
        answer: answers[question.id],
      }))

      const data = await submitQuiz(submittedAnswers)

      setResult(data.result)
    } catch (error) {
      if (error.status === 401) {
        navigate('/login', {
          state: {
            from: '/quiz',
          },
        })

        return
      }

      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }


  const answeredCount = Object.keys(answers).length

  const progress =
    questions.length > 0
      ? Math.round(
          (answeredCount / questions.length) * 100
        )
      : 0


  if (loading) {
    return (
      <main className="quiz-page">
        <p className="status-message">
          Loading quiz...
        </p>
      </main>
    )
  }


  if (error && questions.length === 0) {
    return (
      <main className="quiz-page">
        <p className="status-message">
          {error}
        </p>
      </main>
    )
  }


  if (result) {
    return (
      <main className="quiz-page">
        <section className="quiz-result">
          <p className="section-label">
            QUIZ COMPLETE
          </p>

          <h1>
            {result.score}
            <span>
              {' '}
              / {result.total_questions}
            </span>
          </h1>

          <p>
            Great work. Keep learning and building your
            first-aid awareness.
          </p>

          <div className="result-actions">
            <Link
              to="/topics"
              className="quiz-button"
            >
              Continue Learning
            </Link>

            <Link
              to="/"
              className="quiz-secondary-button"
            >
              Back Home
            </Link>
          </div>
        </section>
      </main>
    )
  }


  return (
    <main className="quiz-page">
      <section className="quiz-header">
        <p className="section-label">
          TEST YOUR KNOWLEDGE
        </p>

        <h1>
          What do you
          <br />
          remember?
        </h1>

        <p>
          Test your understanding of basic first-aid
          awareness and emergency response.
        </p>

        <div className="quiz-progress">
          <div className="quiz-progress-top">
            <span>
              {answeredCount} / {questions.length} answered
            </span>

            <span>
              {progress}%
            </span>
          </div>

          <div className="quiz-progress-track">
            <div
              className="quiz-progress-bar"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </section>


      <form
        className="quiz-form"
        onSubmit={handleSubmit}
      >
        {questions.map((question, index) => (
          <section
            className="question-card"
            key={question.id}
          >
            <div className="question-heading">
              <span className="question-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="question-count">
                QUESTION {index + 1} / {questions.length}
              </span>
            </div>

            <h2>
              {question.question}
            </h2>

            <div className="answer-list">
              {question.options.map((option) => (
                <label
                  className={`answer-option ${
                    answers[question.id] === option
                      ? 'selected'
                      : ''
                  }`}
                  key={option}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={
                      answers[question.id] === option
                    }
                    onChange={() =>
                      handleAnswerChange(
                        question.id,
                        option
                      )
                    }
                  />

                  <span>{option}</span>
                </label>
              ))}
            </div>
          </section>
        ))}

        {error && (
          <p className="quiz-error">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="quiz-button"
          disabled={
            submitting ||
            questions.length === 0
          }
        >
          {submitting
            ? 'Submitting...'
            : 'Submit Quiz'}
        </button>
      </form>
    </main>
  )
}


export default Quiz