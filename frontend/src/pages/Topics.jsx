import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getTopics } from '../services/api'
import './Topics.css'


function Topics() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadTopics() {
      try {
        setLoading(true)
        setError('')

        const data = await getTopics()
        setTopics(data)
      } catch (err) {
        setError(
          err.message || 'Unable to load first-aid topics.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadTopics()
  }, [])

  if (loading) {
    return (
      <main className="topics-page">
        <section className="topics-loading">
          <div className="loading-spinner"></div>
          <p>Loading first-aid topics...</p>
        </section>
      </main>
    )
  }

  if (error) {
    return (
      <main className="topics-page">
        <section className="topics-error">
          <span className="error-label">SOMETHING WENT WRONG</span>

          <h1>We couldn't load the topics.</h1>

          <p>{error}</p>

          <button
            type="button"
            className="topics-retry-button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="topics-page">
      <section className="topics-hero">
        <div>
          <span className="section-label">
            LEARN FIRST AID
          </span>

          <h1>
            Know what to do
            <br />
            before you need to.
          </h1>
        </div>

        <div className="topics-count">
          <span>{topics.length}</span>
          <p>TOPICS</p>
        </div>
      </section>

      <section className="topics-grid">
        {topics.map((topic, index) => (
          <Link
            to={`/topics/${topic.id}`}
            className="topic-card"
            key={topic.id}
          >
            <div className="topic-card-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="topic-card-content">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>

            <div className="topic-card-arrow">
              →
            </div>
          </Link>
        ))}
      </section>

      {topics.length === 0 && (
        <section className="topics-empty">
          <h2>No topics available yet.</h2>
          <p>
            First-aid learning content will appear here soon.
          </p>
        </section>
      )}

      <section className="topics-cta">
        <div>
          <span className="section-label">
            TEST YOUR KNOWLEDGE
          </span>

          <h2>
            Ready to see
            <br />
            what you remember?
          </h2>
        </div>

        <Link
          to="/quiz"
          className="topics-quiz-button"
        >
          Take the Quiz →
        </Link>
      </section>
    </main>
  )
}

export default Topics