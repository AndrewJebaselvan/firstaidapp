import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-brand"
      >
        FIRST AID
      </Link>

      <div className="navbar-links">
        <Link to="/">
          Home
        </Link>

        <Link to="/topics">
          Learn
        </Link>

        <Link to="/quiz">
          Quiz
        </Link>

        {!user && (
          <Link to="/login">
            Login
          </Link>
        )}
      </div>

      {user ? (
        <div className="navbar-user">
          <span className="navbar-welcome">
            Hi, {user.name}
          </span>

          <button
            type="button"
            className="navbar-logout"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/register"
          className="navbar-button"
        >
          Get Started
        </Link>
      )}
    </nav>
  )
}

export default Navbar