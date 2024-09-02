import React from 'react';
import './Header.css'; // Si deseas aplicar estilos personalizados

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="explore" className="navbar-link">Explore</a>
          </li>
          <li className="navbar-item">
            <a href="myspace" className="navbar-link">MySpace</a>
          </li>
          <li className="navbar-item">
            <a href="ranking" className="navbar-link">Ranking</a>
          </li>
          <li className="navbar-item">
            <a href="profile" className="navbar-link">Profile</a>
          </li>
          <li className="navbar-item" id='setting'>
            <a href="settings" className="navbar-link">Settings</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;