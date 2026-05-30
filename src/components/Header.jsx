import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext'; // Import the auth hook

function Header() {
  const { user, signOut } = useAuth(); // Get the user and signOut function
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login'); // Redirect to login after signing out
  };

  return (
    <header className="site-header">
      <div className="site-header__wrapper">
        <Link to="/" className="site-header__logo">Geno</Link>
        <div className="site-header__actions">
          <nav className="site-header__nav">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/playground">Playground</Link>
            <Link to="/js-game">JS Game</Link>
            <Link to="/scheduler">Scheduler</Link>
          </nav>
          
          {/* --- Conditional Rendering --- */}
          {user ? (
            <button onClick={handleSignOut} className="header-button">Logout</button>
          ) : (
            <Link to="/login" className="header-button">Login</Link>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header; 