import { useState } from 'react'
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import {
  getCurrentUser,
  loginUser,
} from '../services/api'

import './Login.css'


function Login({ onLogin }) {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/'

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }


  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      await loginUser(formData)

      const currentUser = await getCurrentUser()

      if (!currentUser) {
        throw new Error(
          'Login succeeded, but the session could not be verified.'
        )
      }

      onLogin(currentUser)

      navigate(from, {
        replace: true,
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <main className="auth-page">
      <section className="auth-container">
        <div className="auth-intro">
          <p className="section-label">
            WELCOME BACK
          </p>

          <h1>
            Ready to
            <br />
            learn more?
          </h1>

          <p>
            Sign in to continue your first-aid learning
            journey and keep track of your quiz progress.
          </p>
        </div>

        <div className="auth-card">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? 'Signing in...'
                : 'Sign in'}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{' '}
            <Link to="/register">
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login