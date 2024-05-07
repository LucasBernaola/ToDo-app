import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">
        To-Do App
      </div>
      <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/todo">App</a></li>
        <li><a href="/about">Quienes Somos?</a></li>
      </ul>
      <a href="https://github.com/LucasBernaola/ToDo-app.git" target="_blank" style={{ marginRight: '30px' }}>
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '40px', color: 'rgb(7, 5, 113)' }} />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </nav>
  );
}

export default Navbar;

