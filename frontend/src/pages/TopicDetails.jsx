import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTopic } from '../services/api'
import './TopicDetails.css'

function TopicDetails() {
  const { id } = useParams()

  const [topic, setTopic] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadTopic() {
      try {
        const data = await getTopic(id)
        setTopic(data)
      } catch {
        setError('Unable to load this first-aid topic.')
      } finally {
        setLoading(false)
      }
    }

    loadTopic()
  }, [id])

  if (loading) {
    return (
      <main className="topic-details-page">
        <div className="topic-status">
          Loading topic...
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="topic-details-page">
        <div className="topic-status">
          {error}
        </div>

        <Link
          to="/topics"
          className="back-link"
        >
          ← Back to Topics
        </Link>
      </main>
    )
  }

  return (
    <main className="topic-details-page">
      <section className="topic-hero">
        <Link
          to="/topics"
          className="back-link"
        >
          ← Back to Topics
        </Link>

        <div className="topic-hero-content">
          <p className="section-label">
            FIRST AID TOPIC
          </p>

          <h1>{topic.title}</h1>

          <p className="topic-description">
            {topic.description}
          </p>
        </div>

        <div className="topic-hero-mark">
          +
        </div>
      </section>

      <section className="topic-information">
        <article className="topic-info-card">
          <div className="topic-info-number">
            01
          </div>

          <div>
            <p className="detail-label">
              WHAT TO DO
            </p>

            <h2>
              Immediate awareness
            </h2>

            <p>
              {topic.instructions}
            </p>
          </div>
        </article>

        <article className="topic-info-card topic-warning-card">
          <div className="topic-info-number">
            02
          </div>

          <div>
            <p className="detail-label">
              IMPORTANT
            </p>

            <h2>
              Know when to get help
            </h2>

            <p>
              {topic.warnings}
            </p>
          </div>
        </article>
      </section>

      <section className="topic-footer">
        <div>
          <p className="section-label">
            KEEP LEARNING
          </p>

          <h2>
            Explore another
            <br />
            first-aid topic.
          </h2>
        </div>

        <Link
          to="/topics"
          className="topic-button"
        >
          View All Topics
        </Link>
      </section>
    </main>
  )
}

export default TopicDetails