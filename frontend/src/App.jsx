import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Topics from './pages/Topics'
import TopicDetails from './pages/TopicDetails'
import Quiz from './pages/Quiz'

import {
  getCurrentUser,
  logoutUser,
} from './services/api'


function App() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
      } catch {
        setUser(null)
      } finally {
        setAuthLoading(false)
      }
    }

    checkAuthentication()
  }, [])

  async function handleLogout() {
    try {
      await logoutUser()
    } catch {
      // Keep the client state consistent even if the request fails.
    } finally {
      setUser(null)
    }
  }

  if (authLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Navbar
        user={user}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={
            <Login onLogin={setUser} />
          }
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/topics"
          element={<Topics />}
        />

        <Route
          path="/topics/:id"
          element={<TopicDetails />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App