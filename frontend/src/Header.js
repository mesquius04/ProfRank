import React from 'react';
import './Header.css';  // Opcional, si quieres agregar estilos

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Explore</a></li>
          <li><a href="#settings">Ranking</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
