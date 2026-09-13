import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            FIRST AID AWARENESS
          </p>

          <h1>
            Know what to do.
            <br />
            When it matters most.
          </h1>

          <p className="hero-description">
            Simple, accessible first-aid awareness for common
            emergencies. Learn the basics, understand what to
            avoid, and know when professional help is needed.
          </p>

          <div className="hero-actions">

            <Link
              to="/topics"
              className="primary-button"
            >
              Explore First Aid
              <span>→</span>
            </Link>

            <Link
              to="/quiz"
              className="secondary-button"
            >
              Take the Quiz
              <span>↗</span>
            </Link>

          </div>

          <div className="hero-meta">

            <div>
              <strong>8</strong>
              <span>Learning topics</span>
            </div>

            <div>
              <strong>10</strong>
              <span>Quiz questions</span>
            </div>

            <div>
              <strong>112</strong>
              <span>Emergency number in India</span>
            </div>

          </div>

        </div>


        <div className="hero-visual">

          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-main-shape">

            <div className="hero-cross">
              <span></span>
              <span></span>
            </div>

            <div className="hero-shape-text">
              FIRST AID
            </div>

          </div>


          <div className="hero-floating-card hero-floating-card-top">

            <span className="floating-label">
              BE PREPARED
            </span>

            <strong>
              Learn before
              <br />
              the emergency.
            </strong>

          </div>


          <div className="hero-floating-card hero-floating-card-bottom">

            <span className="floating-label">
              QUICK GUIDE
            </span>

            <strong>
              Check
              <br />
              Call
              <br />
              Care
            </strong>

          </div>

        </div>

      </section>


      <section className="home-intro">

        <div className="home-intro-label">
          <p className="section-label">
            WHY FIRST AID MATTERS
          </p>
        </div>

        <div className="home-intro-content">

          <h2>
            A few seconds of knowledge
            <br />
            can make a meaningful difference.
          </h2>

          <p>
            First-aid awareness helps people recognize
            emergencies, respond appropriately, and seek
            professional help when it is needed.
          </p>

        </div>

      </section>


      <section className="emergency-section">

        <div className="emergency-heading">

          <div>
            <p className="section-label">
              EMERGENCY AWARENESS
            </p>

            <h2>
              Know when it's time
              <br />
              to call for help.
            </h2>
          </div>

          <p>
            First-aid knowledge can help you respond while
            professional help is being arranged. It does not
            replace emergency medical care or professional
            training.
          </p>

        </div>


        <div className="emergency-grid">

          <article className="emergency-card emergency-card-dark">

            <span className="emergency-number">
              01
            </span>

            <div className="emergency-card-content">

              <h3>
                CHECK
              </h3>

              <p>
                Check that the scene is safe and look for
                obvious life-threatening conditions.
              </p>

            </div>

          </article>


          <article className="emergency-card">

            <span className="emergency-number">
              02
            </span>

            <div className="emergency-card-content">

              <h3>
                CALL
              </h3>

              <p>
                For a life-threatening emergency in India,
                call 112 or ask someone nearby to call.
              </p>

              <a
                href="tel:112"
                className="emergency-call-button"
              >
                Call 112 →
              </a>

            </div>

          </article>


          <article className="emergency-card">

            <span className="emergency-number">
              03
            </span>

            <div className="emergency-card-content">

              <h3>
                CARE
              </h3>

              <p>
                Provide appropriate care within your level
                of training until professional help arrives.
              </p>

            </div>

          </article>

        </div>

      </section>


      <section className="home-cta">

        <div>

          <p className="section-label">
            KEEP LEARNING
          </p>

          <h2>
            Learn the basics.
            <br />
            Be ready to respond.
          </h2>

        </div>

        <Link
          to="/topics"
          className="primary-button"
        >
          Explore Topics
          <span>→</span>
        </Link>

      </section>

    </main>
  )
}

export default Home